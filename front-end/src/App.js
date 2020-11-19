import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeValidation from "./components/regions/Home/presentation";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <HomeValidation />;
};

export default App;
