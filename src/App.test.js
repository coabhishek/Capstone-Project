import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./utils/times";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTime={["17:00", "18:00"]}
      dispatch={() => {}}
    />
  );

  expect(
    screen.getByText("Table Reservation")
  ).toBeInTheDocument();
});

test("initializeTimes returns expected times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns same state", () => {
  const state = ["17:00", "18:00"];

  expect(
    updateTimes(state, {
      type: "DATE_CHANGE",
      date: "2026-06-08",
    })
  ).toEqual(state);
});