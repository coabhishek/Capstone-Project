import React, { useState } from "react";
// import "./BookingForm.css";

export default function BookingForm() {
  const [guests, setGuests] = useState("")
  const [time, setTime] = useState("17:00")
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("")

  const [availableTime] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const formSubmit = (e) => {
    e.preventDefault();

    console.log({
      date,
      time,
      guests,
      occasion,
    });

    setGuests("");
    setTime("17:00");
    setOccasion("");
    setDate("");

    alert("Form Submitted");
  };
  return (
    <>
      <div className="booking-header">
        <h1>Table Reservation</h1>
        <p>
          Choose your preferred date, time, and party size to reserve your table.
          We look forward to serving you at Little Lemon.
        </p>
      </div>


      <form className="booking-form" onSubmit={formSubmit}>
        <div className="form-input">
          <label htmlFor="date-res">Date</label>
          <input type="date" id="date-res" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-input">
          <label htmlFor="time-res">Time</label>
          <select id="time-res" value={time} onChange={(e) => setTime(e.target.value)}>
            {availableTime.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-input">
          <label htmlFor="guest-res">Guests</label>
          <input type="number" id="guest-res" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>

        <div className="form-input">
          <label htmlFor="occasion-res">Occasion</label>
          <select id="occasion-res" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="" >Select</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Reserve Table
        </button>
      </form>
    </>
  );
}