import React from "react";
import MoviesList from "./components/MoviesList";
import { useSelector } from "react-redux";
import FilterHeader from "./components/FilterHeader";

const Home = () => {
  const { data } = useSelector((state) => state.dataList);
  return (
    <div>
    <FilterHeader/>
      <MoviesList list={data} />
    </div>
  );
};

export default Home;
