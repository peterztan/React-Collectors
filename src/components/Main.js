import React from "react";
import SelectChoice from "./SelectChoice";
import choices from "./choices.json";

choices.forEach(choice => {
  choice.image = require("../assets/images/" + choice.image);
})

function randomize(array) {
  console.log(array);
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

class Main extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click any alphabet to begin.",
    choices,
    notSelected: []
  };

  handleChoiceSelect = (id) => {
    console.log(`clicked id ${id}`);

    if (!this.state.notSelected.includes(id)) {

      this.state.notSelected.push(id);
      this.setState({
        score: this.state.score + 1,
        message: "Keep Guessing!"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 });
      }
    }
    else {
      this.setState({
        score: 0,
        message: "Hmmmm~ I'm pretty sure that one was already picked before. Try again!",
        notSelected: []
      });
    }
  };

  scrambleChoices = () => {
    randomize(this.state.choices);
    return (
      this.state.choices.map(choice => (
        <div className="col text-center">
          <SelectChoice
            key={choice.id}
            id={choice.id}
            image={choice.image}
            handleChoiceSelect={this.handleChoiceSelect}
          />
        </div>
      )));
  };

  render() {
    return (
      <div>
        <div className="container-fluid scoreboard">
          <div className="container">
            <div className="row">
              <div className="col-4 current-score"><p>Current Score: {this.state.score}</p></div>
              <div className="col-4 instructions"><p>{this.state.message}</p></div>
              <div className="col-4 top-score"><p>Top Score: {this.state.topScore}</p></div>
            </div>
          </div>
        </div>
        <div className="container options">
          <div className="row">
            {this.scrambleChoices()}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;