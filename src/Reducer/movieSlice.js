import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../Json";
const getLocalStorage = () => {
  let localProduct = localStorage.getItem("movieList");
  if (!localProduct) {
    localStorage.setItem("movieList", JSON.stringify(movies));
    return movies;
  } else {
    return JSON?.parse(localProduct);
  }
};
const unfilteredData = getLocalStorage();
const Movies = createSlice({
  name: "intentory-data",
  initialState: {
    data: getLocalStorage(),
  },
  reducers: {
    getData: (state, action) => {
      // const LocalData = localStorage.setItem("data", JSON.stringify(movies));
    },
    addWishlist: (state, { payload }) => {
      const products = state?.data?.map((item) => {
        if (item.id == payload) {
          return { ...item, isWishlist: true };
        }
        return item;
      });
      localStorage.setItem("movieList", JSON.stringify(products));
      state.data = products;
    },
    removeWishlist: (state, { payload }) => {
      const products = state?.data?.map((item) => {
        if (item.id == payload) {
          return { ...item, isWishlist: false };
        }
        return item;
      });
      localStorage.setItem("movieList", JSON.stringify(products));
      state.data = products;
    },
    filterMovies: (state, { payload }) => {
      const { name, value } = payload;
      let filterList;
      if (name == "genre" && value != "all") {
        filterList = unfilteredData?.filter((movie) =>
          movie.genre.includes(value)
        );
      } else if (name != "genre" && value != "all") {
        filterList = unfilteredData?.filter((ele) => ele[name] == value);
      } else {
        filterList = unfilteredData;
      }
      state.data = filterList;
    },

    addData: (state, action) => {
      const id = state.data.length;
      state.data = [...unfilteredData, { id: id + 1, ...action.payload }];
      const LocalData = localStorage.setItem(
        "movieList",
        JSON.stringify([...unfilteredData, { id: id + 1, ...action.payload }])
      );
    },
  },
});

export const { getData, addData, addWishlist, removeWishlist, filterMovies } =
  Movies.actions;

export default Movies.reducer;
