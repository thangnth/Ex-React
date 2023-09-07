import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Ticket() {
  //Truy cập vào reducer selectedSeats lấy ra mảng selectedSeats
  const { selectedSeats } = useSelector((state) => {
    return state.selectedSeats;
  });
  //Truy cập vào reducer selectedSeats lấy ra totalPrice : const totalPrice = state.selectedSeats.totalPrice
  const { totalPrice } = useSelector((state) => {
    return state.selectedSeats;
  });

  //Click vào button huỷ thì dispatch 1 action xoá selectedSeat cho store
  const dispatch = useDispatch();
  const handleRemoveSeat = (seatID) => {
    dispatch({ type: "removeSeat", payload: seatID });
  };
  return (
    <>
      <h3 className="m-2">Danh Sách Ghế Bạn Chọn</h3>
      <div className="text-start">
        <p>
          <button className="seat btn btn-danger disabled"></button>Ghế đã đặt
        </p>
        <p>
          <button className="seat btn btn-success disabled"></button>
          Ghế đang chọn
        </p>
        <p>
          <button className="seat btn disabled"></button>Ghế chưa đặt
        </p>
      </div>
      <table className="table table-bordered table-dark text-center">
        <tbody>
          <tr>
            <th className="text-center" width="10%">
              Số Ghế
            </th>
            <th width="10%">Giá</th>
            <th width="10%">Huỷ</th>
          </tr>
          {selectedSeats.map((selectedSeat) => {
            return (
              <tr key={selectedSeat.soGhe}>
                <td>{selectedSeat.soGhe}</td>
                <td>{selectedSeat.gia}</td>
                <td
                  className="text-warning"
                  onClick={() => {
                    handleRemoveSeat(selectedSeat.soGhe);
                  }}
                >
                  X
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Tổng tiền (VND)</td>
            <td>{totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
