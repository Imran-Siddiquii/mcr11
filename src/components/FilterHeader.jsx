import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../Reducer/movieSlice";
import { useNavigate } from "react-router-dom";

const FilterHeader = () => {
  const { data } = useSelector((state) => state.dataList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let localProduct = JSON.parse(localStorage?.getItem("movieList"));

  const uniqueGenres = [
    ...new Set(localProduct?.flatMap((movie) => movie?.genre)),
  ];
  const uniqueRatings = [
    ...new Set(localProduct?.map((movie) => movie?.rating)),
  ];

  const [department, setDepartment] = useState({
    rating: "",
    genre: "",
    year: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setDepartment((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    dispatch(filterMovies({ name, value }));
  };
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }} mt={5} mb={4} ml={8}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={2} md={2}>
            <Typography component="div" variant="h5">
              Movies
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
              <InputLabel id="demo-select-small-label">Genre</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={department.genre}
                label="Department"
                name="genre"
                onChange={handleChange}
              >
                <MenuItem value="all">All Genre</MenuItem>
                {uniqueGenres.map((depart) => (
                  <MenuItem key={depart} value={depart}>
                    {depart}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography component="div" variant="h5">
              <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Release Year
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={department.year}
                  label="Release Year"
                  name="year"
                  onChange={handleChange}
                >
                  <MenuItem value="all">All Years</MenuItem>
                  {Array.from(
                    { length: 2023 - 1999 + 1 },
                    (_, index) => 1999 + index
                  ).map((depart) => (
                    <MenuItem key={depart} value={depart}>
                      {depart}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography component="div" variant="h5">
              <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
                <InputLabel id="demo-select-small-label">Rating</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={department.rating}
                  label="Rating"
                  name="rating"
                  onChange={handleChange}
                >
                  <MenuItem value="all">All Rating</MenuItem>
                  {uniqueRatings.map((depart) => (
                    <MenuItem key={depart} value={depart}>
                      {depart}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} justifyContent={"end"}>
            <Typography component="div">
              <Button
                variant="contained"
                onClick={() => navigate("/add-movie")}
              >
                {" "}
                Add New movie
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FilterHeader;
