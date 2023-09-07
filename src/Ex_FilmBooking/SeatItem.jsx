import React from "react";
import { useDispatch } from "react-redux";

export default function SeatItem({ line, seat, index, isSelected }) {
  const dispatch = useDispatch();

  // Seat color - start
  let classes = "seat m-2 btn";
  if (line.hang === "") {
    classes = "btn m-2 text-light";
  }
  if (seat.daDat) {
    classes = "seat m-2 btn btn-danger";
  }
  if (isSelected) {
    classes = "seat m-2 btn btn-success";
  }
  //Seat Color - End

  //Hàm xử lý khi click vào button seat
  const handleSeatSelection = () => {
    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  //render các seat trong rạp ra giao diện
  return (
    <>
      <button
        className={classes}
        disabled={seat.daDat}
        onClick={handleSeatSelection}
      >
        {index + 1}
      </button>
    </>
  );
}
