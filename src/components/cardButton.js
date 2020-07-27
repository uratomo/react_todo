import React from "react";
import "../style/cardButton.scss";
import { connect } from "react-redux";
import { newTodo } from "../actions";

class cardButton extends React.Component {
  render() {
    return (
      <div className="cardButton__wrapper">
        <button
          className="cardButton__button"
          onClick={() => this.props.newTodo()}
        >
          カードを追加
        </button>
      </div>
    );
  }
}

export default connect(null, { newTodo })(cardButton);
