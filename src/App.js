import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "./Reducer/movieSlice";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import Wishlist from "./Wishlist";
import MoviesDetails from "./MoviesDetails";
import { AddMovie } from "./AddMovie";
const theme = {
  colors: {
    heading: "rgb(24,24,29",
    text: "rgba(29,29,29,0.8)",
    white: "#ffff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98,84,243)",
    border: "rgb(98,84,243,0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg,rgb(132,144,255) 0% , rgb(98 189 252) 100%)",
    shadow:
      "rgba(0,0,0,0.02) 0px 1px 3px 0px ,rgba(27,31,35,0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
};
function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataList);

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/wishlist" exact element={<Wishlist />} />
            <Route path="/movie/:id" exact element={<MoviesDetails />} />
            <Route path="/add-movie" exact element={<AddMovie />} />
            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
