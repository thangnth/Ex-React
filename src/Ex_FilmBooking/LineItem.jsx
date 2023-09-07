import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function LineItem({ line }) {
  const seatsInLine = line.danhSachGhe;

  const { selectedSeats } = useSelector((state) => {
    return state.selectedSeats;
  });

  return (
    <>
      {seatsInLine.map((seat, index) => {
        const isSelected = selectedSeats.find((selectedSeat) => {
          return seat.soGhe === selectedSeat.soGhe;
        });

        return (
          <div className="col-sm-1 text-center" key={seat.soGhe}>
            <SeatItem
              line={line}
              seat={seat}
              index={index}
              isSelected={!!isSelected}
            />
          </div>
        );
      })}
    </>
  );
}
