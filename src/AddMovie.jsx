import React, { useState } from "react";
import Card from "@mui/material/Card";

import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addData } from "./Reducer/movieSlice";

export const AddMovie = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  const handleArrayInputChange = (event) => {
    const { name, value } = event.target;
    const arrayValues = value.split(",").map((item) => item.trim());
    setPost((prevPost) => ({
      ...prevPost,
      [name]: arrayValues,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(post));
    setPost({
      title: "",
      year: "",
      genre: [],
      rating: "",
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageURL: "",
    });
  };

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ margin: "25px auto", padding: "25px 15px" }}
      >
        <TextField
          id="title"
          label="Title"
          variant="standard"
          name="title"
          fullWidth
          value={post.title}
          onChange={handleInputChange}
        />
        <TextField
          id="year"
          label="Year"
          fullWidth
          variant="standard"
          name="year"
          value={post.year}
          onChange={handleInputChange}
        />
        <TextField
          id="summary"
          label="summary"
          fullWidth
          variant="standard"
          name="summary"
          value={post.summary}
          onChange={handleInputChange}
        />
        <TextField
          id="genre"
          label="Genre"
          fullWidth
          variant="standard"
          name="genre"
            value={post.genre.join(", ")}
          onChange={handleArrayInputChange}
        />
        <TextField
          id="rating"
          label="rating"
          fullWidth
          variant="standard"
          name="rating"
          value={post.rating}
          onChange={handleInputChange}
        />
        <TextField
          id="cast"
          label="Cast"
          fullWidth
          variant="standard"
          name="cast"
          value={post.cast.join(", ")}
          onChange={handleArrayInputChange}
        />
        <TextField
          id="director"
          label="director"
          fullWidth
          variant="standard"
          name="director"
          value={post.director}
          onChange={handleInputChange}
        />
        <TextField
          id="writer"
          label="writer"
          fullWidth
          variant="standard"
          name="writer"
          value={post.writer}
          onChange={handleInputChange}
        />
        <TextField
          id="imageURL"
          label="imageURL"
          fullWidth
          variant="standard"
          name="imageURL"
          value={post.imageURL}
          onChange={handleInputChange}
        />

        <Button
          style={{ margin: "15px", alignItems: "center" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Add Movie
        </Button>
      </Card>
    </div>
  );
};
