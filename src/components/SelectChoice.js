import React from "react";

let divStyle = imgUrl => {
  return { backgroundImage: `url(${imgUrl})` };
};

function SelectChoice(props) {
  return (
    <div
      className="select-choice"
      id={props.id}
      style={divStyle(props.image)}
      onClick={() => props.handleChoiceSelect(props.id)}
    ></div>
  );
}

export default SelectChoice;
