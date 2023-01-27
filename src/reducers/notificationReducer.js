import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      return message;
    },
    timeoutNotification() {
      return null;
    },
  },
});

let timoutId = null;
export const setNotification = (message, timeOut) => {
  return async (dispatch) => {
    dispatch(setMessage(message, timeOut));

    if (timoutId) {
      clearTimeout(timoutId);
    }
    timoutId = setTimeout(() => {
      dispatch(timeoutNotification());
    }, timeOut * 1000);
  };
};

export const { setMessage, timeoutNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
