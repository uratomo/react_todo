import React from "react";
import "../style/card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="cardWrapper">
        <p className="card__p">{this.props.todo}</p>
      </div>
    );
  }
}

export default Card;
