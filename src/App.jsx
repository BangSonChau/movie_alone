import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/home';
import MovieDatail from "./page/movie-detail";
import Search from "./page/search";
import ExploreMovie from "./page/explore";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home /></div>,
    },
    {
      path: "/movie/:movieId",
      element: <div><MovieDatail /></div>,
    },
    {
      path: "/search/:keyWord",
      element: <div><Search /></div>,
    },
    {
      path: "/explore/movie",
      element: <div><ExploreMovie /></div>,
    },
  ]);

  return ( <RouterProvider router={router} /> )
}

export default App