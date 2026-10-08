# Technical Overview — holo-racer

Site sync (2026-10-08): the rebuilt /engineering page covers three systems —
holo-racer (Working), Pramaan (In development), and the platform apps
(native Android in Kotlin, MVI, Clerk auth — In development, repos not public
yet). This document remains the holo-racer deep dive.

The strongest real system built by Dev4AIBots. Written at the level a
senior engineer would review it: architecture, data flow, trade-offs, and
known limitations. Status: **Working** — deployed to production.

Repository: https://github.com/dev4aibots/holo-racer
Live: https://holo-racer.vercel.app

---

## 1. What it is

holo-racer is a webcam-controlled 3D racing game that runs entirely in the
browser. The player's hands are the controller: two fists form a virtual
steering wheel, hand depth (z-distance from camera) controls speed, a
thumb-index pinch clicks UI elements, and two open palms open the pause
menu. No camera background is shown during gameplay — only holographic hand
rigs — to keep the player's attention on the track.

## 2. Runtime architecture

```
Camera (getUserMedia, 480p)
   │  requestVideoFrameCallback / rVFC-throttled capture
   ▼
Tracking Web Worker
   │  MediaPipe HandLandmarker (WASM, @mediapipe/tasks-vision 1.0.1)
   │  → 21 landmarks × up-to-2 hands per frame
   ▼
Gesture pipeline (worker)
   │  geometric derivation → filtering → hysteresis → debounce
   │  → discrete gesture events + continuous control values
   ▼  postMessage (structured clone, latest-frame-wins backpressure)
Main thread
   │  game state machine → Three.js scene graph → WebAudio
   ▼
Display (60fps target) + HUD
```

**Threading decision.** All vision work runs in a dedicated Web Worker.
The main thread never touches a video frame or runs inference; it receives
only compact control state (steering angle, speed scalar, gesture events).
This keeps frame pacing independent of inference latency — the single most
important architectural choice for perceived smoothness.

**Backpressure.** The capture path drops stale frames and always forwards
the freshest one (latest-frame-wins). A 20fps inference throttle bounds
worker load; the game interpolates control values between inference ticks
so rendering stays at display rate.

**WASM pinning.** The MediaPipe WASM runtime is pinned to
`@mediapipe/tasks-vision` 1.0.1 and the `hand_landmarker.task` model is
loaded via the `latest` alias, so model and runtime versions move together
and cannot silently mismatch.

## 3. Gesture derivation — geometry, not classification

The tracking stack deliberately avoids the GestureRecognizer classifier
head. All gestures are derived from pure landmark geometry, which is
smaller, faster, and fully inspectable:

- **Fist:** mean fingertip-to-wrist distance < MCP-to-wrist distance × 1.58
- **Open palm:** same ratio > 1.65 (hysteresis band between the two
  thresholds prevents flicker at the boundary)
- **Steering:** the two fists define a virtual wheel; the relative angle
  maps to steering with a 0.045 rad deadzone over a 0.56 rad range
- **Speed:** hand z-depth — pull back (farther from camera) accelerates,
  push forward brakes
- **Pinch:** thumb-index tip distance with a 2-frame minimum-time-in-state
  gate plus presence gates, so a single noisy frame cannot click
- **Pause:** both palms open; **horn:** double thumbs-up

Filtering stages (per gesture): exponential smoothing on continuous
values, MinTimeInState debouncing on discrete transitions, and TTL ghost
persistence so a one-frame tracking loss does not drop the player's input.

## 4. Rendering

Three.js scene: first-person cockpit and third-person views, holographic
hand rigs mirrored from landmark data, traffic, coins, three game modes,
bloom/fog/FOV treatments for depth. The scene graph is updated from the
game state machine, never directly from tracking callbacks — input is
sampled once per frame, which keeps the simulation deterministic and
replayable.

## 5. Audio

WebAudio-synthesized sounds (no audio assets): engine tone tied to speed,
coin pickup, collision, UI clicks, and the double-thumbs-up horn. All
generated at runtime, so the deploy has zero audio payload.

## 6. Build and deploy

- **Build:** Vite + TypeScript, strict mode. Production bundle is a set of
  static assets; no server component.
- **Deploy:** Vercel, production-aliased. Deploy verification checks HTTP
  status, bundle hash against the local build, and the presence of pipeline
  markers in the served bundle — verifying delivery and asset integrity.
- **Payload discipline:** 480p capture, throttled inference, no heavy
  dependencies beyond Three.js and the pinned MediaPipe packages.

## 7. Testing and evaluation

- Unit tests over the gesture pipeline (thresholds, debounce windows,
  ghost persistence) — the parts where a regression silently breaks the
  game feel.
- Browser QA passes against production deploys: menu buttons, keyboard
  race fallback, pause/resume/restart, console-error checks.
- A diagnostics panel exposes frame timing and tracking state for
  on-device debugging.

## 8. Known limitations (honest)

- Production verification covers delivery and asset integrity, **not**
  gesture quality on any specific hardware — real-camera validation by the
  founder is pending.
- Tracking refinement is parked at the founder's direction after a quality
  rejection; the live build is the pure-HandLandmarker pipeline.
- Multiplayer (relay + ghost cars) exists only as an adapter skeleton.
- Performance target is 60fps on typical laptop hardware; low-end devices
  will degrade, and there is no adaptive quality scaling yet.

## 9. What this proves — transfer to the platform work

holo-racer is a game, but the engineering transfers directly to the
Dev4AIBots platform:

- **Real-time pipelines with backpressure** — the same discipline the
  booking/announcement event flows will need.
- **Worker-first architecture** — heavy work off the critical path, a
  habit that applies to any client-heavy app.
- **Evaluation before claims** — thresholds are tested, deploys are
  verified, limitations are written down. This is the process behind the
  status labels on the company site.
- **Solo shipping** — scoped, built, tested, deployed, and documented by
  one person with AI-assisted development. That is the operating model for
  the platform build.

---

*Companion system: Pramaan (Python RAG evidence engine) is documented in
its repository at https://github.com/dev4aibots/Pramaan — authorization
before retrieval (Casbin RBAC/ABAC), hybrid BGE-M3 + BM25 + RRF + RankGPT
reranking, RAGAS-style claim verification, Streamlit + FastAPI over Docker
Compose. Status: in development.*
