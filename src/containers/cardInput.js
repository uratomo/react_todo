import React from "react";
import "../style/cardInput.scss";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class CardInput extends React.Component {
  render() {
    return (
      <div className="cardInput__wrapper">
        <input
          className="cardInput"
          type="textarea"
          size="25"
          placeholder="ここに文字を入力してください"
          onChange={(e) => this.props.addTodo(e.target.value)}
        />
      </div>
    );
  }
}

export default connect(null, { addTodo })(CardInput);
