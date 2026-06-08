import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

// fallback API (safe)
const fetchAPI = (date) => {
  if (window.fetchAPI) return window.fetchAPI(date);

  return ["17:00", "18:00", "19:00", "20:00"];
};

const submitAPI = (data) => {
  if (window.submitAPI) return window.submitAPI(data);
  return true;
};

// INIT TIMES
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// UPDATE TIMES
const updateTimes = (state, action) => {
  if (!action.date) return state;
  return fetchAPI(action.date);
};

function reducer(state, action) {
  switch (action.type) {
    case "DATE_CHANGE":
      return updateTimes(state, action);
    default:
      return state;
  }
}

export default function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    reducer,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />

      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}