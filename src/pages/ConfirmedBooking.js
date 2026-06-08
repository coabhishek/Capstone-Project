import React from "react";
// import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  return (
    <div className="confirm-container">
      <div className="confirm-card">
        <div className="check-icon">✔</div>

        <h1>Booking Confirmed!</h1>
        <p>
          Your table has been successfully reserved at <b>Little Lemon</b>.
        </p>

        <div className="info-box">
          <p>🍽 We are excited to serve you</p>
          <p>📅 See you soon!</p>
        </div>

        <button onClick={() => window.location.href = "/booking"}>
          Book Another Table
        </button>
      </div>
    </div>
  );
}