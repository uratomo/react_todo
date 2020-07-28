import React from "react";
import "../style/cardInput.scss";
import { connect } from "react-redux";
import { createTodo, hiddenTodoInput } from "../actions";

class CardInput extends React.Component {
  createTodo = (e) => {
    this.props.createTodo(e.target.value);
    this.props.hiddenTodoInput();
  };
  handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      this.createTodo(e);
    }
  };

  render() {
    if (this.props.visibleTodoInput) {
      return (
        <div className="cardInput__wrapper">
          <input
            className="cardInput"
            type="textarea"
            size="25"
            placeholder="ここに文字を入力してください"
            onBlur={(e) => this.createTodo(e)}
            onKeyPress={(e) => this.handleKeyEnter(e)}
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  visibleTodoInput: state.visibleTodoInput,
});

export default connect(mapStateToProps, { createTodo, hiddenTodoInput })(
  CardInput
);
