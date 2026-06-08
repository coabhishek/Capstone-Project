import React, { useState } from "react";

export default function BookingForm({
  availableTimes = [],
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [touched, setTouched] = useState(false);

  // ---------------- VALIDATION ----------------
  const isDateValid = date !== "";
  const isTimeValid = time !== "";
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion !== "";

  const isFormValid =
    isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isFormValid) return;

    submitForm({ date, time, guests, occasion });

    setDate("");
    setTime("17:00");
    setGuests(1);
    setOccasion("");
    setTouched(false);
  };

  return (
    <main className="booking-container">
      <form
        className="booking-card"
        onSubmit={handleSubmit}
        aria-label="Booking Form"
      >
        <h2 id="booking-title">Book Table</h2>

        {/* DATE */}
        <label htmlFor="res-date">Date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          required
          aria-label="Reservation Date"
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "DATE_CHANGE", date: e.target.value });
          }}
        />
        {!isDateValid && touched && (
          <small className="error">Date is required</small>
        )}

        {/* TIME */}
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          value={time}
          required
          aria-label="Select Time"
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))
          ) : (
            <option>No times available</option>
          )}
        </select>

        {/* GUESTS */}
        <label htmlFor="guests">Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          required
          aria-label="Number of guests"
          onChange={(e) => setGuests(Number(e.target.value))}
        />
        {!isGuestsValid && touched && (
          <small className="error">Guests must be 1 to 10</small>
        )}

        {/* OCCASION */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          aria-label="Select Occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {!isFormValid && touched && (
          <small className="error">
            Please fill all fields correctly
          </small>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={!isFormValid}
          aria-label="On Click"
        >
          Reserve Table
        </button>
      </form>
    </main>
  );
}