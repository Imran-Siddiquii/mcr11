import { configureStore } from "@reduxjs/toolkit";
import Movies from "./movieSlice";
const store = configureStore({
  reducer: {
    dataList: Movies,
  },
});
export default store;
