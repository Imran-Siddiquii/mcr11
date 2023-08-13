import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishlist, removeWishlist } from "../Reducer/movieSlice";
const MoviesList = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToWishlist = (e, movieId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addWishlist(movieId));
  };
  const removeToWishlist = (e, movieId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeWishlist(movieId));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent={"center"}
          display={"flex"}
        >
          {list?.map((item, index) => {
            const { id, title, summary, imageURL } = item;
            return (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                display={"flex"}
                justifyContent={"center"}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`movie/${id}`)}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`${imageURL}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {item?.isWishlist ? (
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
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default MoviesList;
