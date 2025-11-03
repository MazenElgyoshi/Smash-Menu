import React, { useEffect, useState } from "react";

function OffersList() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/1059h5vD-hQzuBVE5ZHffr_2HfKtlafP2ewhu1x4s9eA/Sheet1"
        );
        const data = await res.json();
        const formatted = Array.isArray(data) ? data : Object.values(data);
        setOffers(formatted);
      } catch (err) {
        console.error("Error fetching offers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();

    // تحديث البيانات من الشيت كل 30 ثانية
    const interval = setInterval(fetchOffers, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>جارٍ تحميل العروض...</p>;

  return (
    <div className="offers-wrapper" style={{ padding: "20px" }}>
      {offers.map((offer, index) => (
        <div
          key={index}
          className="offer-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            marginBottom: "20px",
            overflow: "hidden",
            padding: "15px",
          }}
        >
          <img
            src={offer.image}
            alt={offer.name}
            style={{
              width: "180px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px", fontSize: "1.4rem" }}>
              {offer.name}
            </h3>

            <p style={{ margin: "0 0 8px", color: "#555" }}>
              {offer.description}
            </p>

            <p
              style={{
                fontWeight: "bold",
                color: "#008000",
                margin: "0 0 8px",
              }}
            >
              السعر: {offer.price} جنيه
            </p>

            <p style={{ margin: "0 0 4px", color: "#1d3557" }}>
              📅 تاريخ البدء: <strong>{offer.startDate}</strong>
            </p>

            <p style={{ margin: 0, color: "#e63946" }}>
              ⏰ تاريخ الانتهاء: <strong>{offer.endDate}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OffersList;
