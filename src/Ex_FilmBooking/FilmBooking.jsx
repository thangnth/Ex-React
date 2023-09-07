import React from "react";
import data from "./data.json";
import SeatList from "./SeatList";
import Ticket from "./Ticket";

export default function FilmBooking() {
  return (
    <div className="film-booking container-fluid text-center">
      <div className="row">
        <div className="seat-selection col-md-7 container-fluid">
          <h3 className="text-light">Đặt Vé Xem Phim Cyberlearn.vn</h3>
          <div className="d-flex justify-content-center">
            <p className="screen">MÀN HÌNH</p>
          </div>
          <SeatList seats={data} />
        </div>
        <div className="ticket container-fluid col-md-4 text-light">
          <Ticket />
        </div>
      </div>
    </div>
  );
}
