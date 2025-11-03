import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 2;
  const isOpen = hour >= openHour || hour <= closeHour;

  const openInstagram = () => {
    window.open("https://www.instagram.com/_ma2en_/", "_blank");
  };

  return (
    <footer className="footer">
      <div className="location">
        العنوان: مدينة السرو - كورنيش النيل - مكان فرع وي📍
      </div>

      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p className="closed">
          😴 المطعم مغلق الآن
          <br />
          هنكون جاهزين نستقبلك من الساعه {openHour}:00 مساءً لحد الساعه{" "}
          {closeHour}:00 صباحًا
          <br />
          🔥 استنانا وهنجهزلك أحلى وجبة
        </p>
      )}

      <p className="creator" onClick={openInstagram}>
        Created By <span>@MazenElgyoshi</span>
      </p>
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  const whatsappNumber = "201005490225"; // رقم واتس بدون + أو 00
  const phoneNumber = "01005490225";

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=مرحبا%20Smash%20Grill!`;
    window.open(url, "_blank");
  };

  return (
    <div className="order">
      <p className="open-text">
        🕓 حالياً المطعم <strong>مفتوح</strong> من الساعة {openHour}:00 مساءً
        إلى الساعة {closeHour}:00 صباحاً
        <br />
        <span className="highlight">
          Smash اطلب دلوقتي واستمتع بأحلى وجبة من
        </span>
      </p>

      <div className="buttons">
        <button id="whats-app" className="btn" onClick={openWhatsAppChat}>
          WhatsApp
        </button>
        <button
          id="call"
          className="btn"
          onClick={() => (window.location.href = `tel:${phoneNumber}`)}
        >
          Call
        </button>
      </div>
    </div>
  );
}

export default Footer;
