import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setMessage(state, action) {
      console.log("thw reducer entered");
      const message = action.payload;
      console.log("message", message);
      return message;
    },
  },
});

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
