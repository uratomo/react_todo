import React from "react";
import "../style/cardButton.scss";

class cardButton extends React.Component {
  render() {
    return (
      <div className="cardButton__wrapper">
        <button className="cardButton__button">カードを追加</button>
      </div>
    );
  }
}

export default cardButton;