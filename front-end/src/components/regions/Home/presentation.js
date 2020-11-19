import React, { Component } from "react";
import Home from "./index";
import Survey from "../Survey/index";
import Results from "../Results/index";

class HomeValidation extends Component {
  constructor(props) {
    super(props);
    this.state = { isEmptyState: true };
  }

  triggerCheckSurvey = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isCheckSurveyState: true
    });
  };

  triggerCheckResults = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isCheckResultState: true
    });
  };

  render() {
    return (
      <div>
        {this.state.isEmptyState && (
          <Home
            checkSurvey={this.triggerCheckSurvey}
            checkResults={this.triggerCheckResults}
          />
        )}

        {this.state.isCheckResultState && <Results />}
        {this.state.isCheckSurveyState && <Survey />}

        <br></br>
      </div>
    );
  }
}

export default HomeValidation;
