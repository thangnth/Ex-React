import { configureStore } from "@reduxjs/toolkit";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};
const selectedSeatsReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      //Gọi 2 biến selectedSeat và isSelected nhận giá trị 2 thuộc tính của payload được dispatch tới
      const { isSelected, ...selectedSeat } = action.payload;
      //const isSelected = action.payload.isSelected
      //const selectedSeat = action.payload.selectedSeat
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, selectedSeat];
        const totalPrice = state.totalPrice + selectedSeat.gia;

        return { ...state, selectedSeats, totalPrice };
      }

      //Khi click chuột vào button lần nữa thì lọc ra danh sách selectedSeats không bao gồm selectedSeat
      const selectedSeats = state.selectedSeats.filter((item) => {
        return item.soGhe !== selectedSeat.soGhe;
      });
      const totalPrice = state.totalPrice - selectedSeat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case "removeSeat": {
      const selectedSeats = state.selectedSeats.filter((item) => {
        return item.soGhe !== action.payload;
      });
      //Duyệt qua mảng selectedSeats và cộng price của từng item trong mảng
      const totalPrice = selectedSeats.reduce((result, item) => {
        return result + item.gia;
      }, 0);
      return { ...state, selectedSeats, totalPrice };
    }
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    selectedSeats: selectedSeatsReducer,
  },
});
export default store;
