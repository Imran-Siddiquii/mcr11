import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Box, Button, CardActions } from "@mui/material";
import { addWishlist, removeWishlist } from "./Reducer/movieSlice";

const MoviesDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.dataList);
  const [details, setDetails] = useState();

  useEffect(() => {
    const productDetail = data.find((ele) => ele.id == id);
    setDetails(productDetail);
  }, [id, data]);
  const addToWishlist = (e, movieId) => {
    dispatch(addWishlist(movieId));
  };
  const removeToWishlist = (e, movieId) => {
    dispatch(removeWishlist(movieId));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "110px",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={`${details?.imageURL}`}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {details?.title}
            </Typography>
            <Typography mt={5} variant="body2" color="text">
              {details?.summary}
            </Typography>
            <Typography mt={2} variant="body2" color="text">
              Year : {details?.year}
            </Typography>
            <Typography mt={2} variant="body2" color="text">
              Rating : {details?.rating}
            </Typography>
            <Typography mt={2} variant="body2" color="text">
              Director : {details?.director}
            </Typography>
            <Typography mt={2} variant="body2" color="text">
              Writer : {details?.writer}
            </Typography>
            <Typography mt={2} variant="body2" color="text">
              Cast :{" "}
              {details?.cast.map((ele) => (
                <span key={ele}>{ele},</span>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            {details?.isWishlist ? (
              <Button
                size="small"
                variant="contained"
                onClick={(e) => removeToWishlist(e, id)}
              >
                 Added to Watchlist
              </Button>
            ) : (
              <Button
                size="small"
                variant="outlined"
                onClick={(e) => addToWishlist(e, id)}
              >
               Add to Watchlist
              </Button>
            )}
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Box>
      </Card>
    </div>
  );
};

export default MoviesDetails;
