import React from "react";
import LineItem from "./LineItem";

export default function SeatList({ seats }) {
  return (
    <>
      {seats.map((line) => {
        return (
          <div
            key={line.hang}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="col-sm-1 text-light">{line.hang}</div>
            <div className="row col-sm-10">
              <LineItem line={line} />
            </div>
          </div>
        );
      })}
    </>
  );
}
