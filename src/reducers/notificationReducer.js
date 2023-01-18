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

export const { setMessage, timeoutNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
