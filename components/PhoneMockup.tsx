// Concept preview of the customer app, built in HTML/CSS — design direction,
// not a shipped product. Captioned honestly below.
export default function PhoneMockup() {
  return (
    <div className="mockup-wrap">
      <div className="phone" role="img" aria-label="Concept preview of the customer app: an AI assistant answering a customer, with a one-tap booking card and a business announcement">
        <div className="phone-screen">
          <div className="phone-notch" aria-hidden="true">
            <span />
          </div>
          <div className="app-bar">
            <div className="app-avatar" aria-hidden="true">
              AP
            </div>
            <div>
              <p className="name">Asha Parlour</p>
              <p className="sub">customer app · concept</p>
            </div>
          </div>
          <div className="chat-body">
            <p className="announce">
              <span className="who">announcement · 2h ago</span>
              Festive offer: 20% off all facials this week. Walk-ins welcome.
            </p>
            <p className="bubble user">What are your hours tomorrow?</p>
            <p className="bubble bot">
              Open <strong>10 am – 7 pm</strong>, all days. Want me to book a
              haircut for tomorrow?
            </p>
            <div className="booking-card">
              <div>
                <p className="svc">Haircut</p>
                <p className="slot">Tue · 4:30 pm · 30 min</p>
              </div>
              <span className="tap">1-tap book</span>
            </div>
            <p className="bubble user">Yes, book it.</p>
            <p className="bubble bot">
              Done — <strong>Tue 4:30 pm</strong> is yours. A reminder will
              reach you an hour before.
            </p>
          </div>
        </div>
      </div>
      <p className="mockup-caption">
        Concept preview — interface direction, not a shipped product. Platform
        status: in development.
      </p>
    </div>
  );
}
