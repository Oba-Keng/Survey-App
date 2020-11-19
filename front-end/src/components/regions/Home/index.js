import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Home = props => {
  return (
    <div>
      <Header />
      <button className="button-one" onClick={props.checkSurvey}>
        Fill out Survey
      </button>
      <br></br>
      <button className="button-one" onClick={props.checkResults}>
        View Survey Results
      </button>
      <Footer />
    </div>
  );
};

export default Home;
