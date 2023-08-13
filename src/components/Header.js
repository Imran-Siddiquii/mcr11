import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Nav";
import { useSelector } from "react-redux";
export const Header = () => {
  const [searchToggle, setSearchToggle] = useState("");
  const { data } = useSelector((state) => state.dataList);
  const [filterValue, setFilterValue] = useState([]);
  const filterData = (event) => {
    const { value } = event.target;
    const filter = data?.filter(
      (ele) =>
        ele?.title?.includes(value) ||
        ele?.cast?.includes(value) ||
        ele?.director?.includes(value)
    );
    setFilterValue(filter);
    setSearchToggle(value);
    // setSearchToggle("");
  };

  return (
    <MainHeader>
      <NavLink to="/">
        <h2>
          <strong>IMBP</strong>
        </h2>
      </NavLink>
      <div id="input_group">
        <label id="label" htmlFor="input"></label>
        <input
          id="input"
          type="text"
          name="text"
          value={searchToggle}
          autoComplete="off"
          className="input-search"
          placeholder="Search movies"
          onChange={filterData}
        />
        {searchToggle ? (
          <div className="search-item">
            {filterValue?.length ? (
              filterValue?.map((ele) => (
                <NavLink
                  to={`/movie/${ele?.id}`}
                  onClick={() => setSearchToggle("")}
                >
                  <div className="list-item">
                    <div className="d-flex">
                      <img
                        src={ele?.imageURL}
                        alt={ele?.id}
                        width="90px"
                        height="50px"
                      />
                    </div>
                    <div className="list-item-text">
                      <li style={{ listStyleType: "none", fontSize: "1.5rem" }}>
                        {ele?.title}
                      </li>
                    </div>
                  </div>
                </NavLink>
              ))
            ) : (
              <div
                className="list-item-text"
                style={{ listStyleType: "none", fontSize: "1.5rem" }}
              >
                <li>No data found</li>
              </div>
            )}
          </div>
        ) : null}
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 2rem;
  background-color: "${({ theme }) => theme.colors.bg}";
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  logo {
    height: 1rem;
  }
  .search-item {
    position: absolute;
    width: 32.5vw;
    height: fit-content;
    z-index: 999;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 1px 0px 5px 1px rgba(186, 164, 241, 0.759);
  }
  .list-item {
    display: flex;
    margin: 2rem 0rem;
  }
  .list-item-text {
    display: flex;
    font-size: 1rem;
    align-items: center;
    padding: 0rem 3rem;
  }
`;
