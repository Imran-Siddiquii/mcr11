import React from "react";
import MoviesList from "./components/MoviesList";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { data } = useSelector((state) => state.dataList);
  const wishlistData = data.filter((ele) => ele.isWishlist);

  return (
    <div>
      <MoviesList list={wishlistData} />
    </div>
  );
};

export default Wishlist;
