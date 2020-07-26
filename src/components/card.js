import React from "react";
import "../style/card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardWrapper">
        <p className="card__p">{this.props.title}</p>
      </div>
    );
  }
}

export default Card;
