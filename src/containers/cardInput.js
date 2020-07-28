import React from "react";
import "../style/cardInput.scss";
import { connect } from "react-redux";
import { addTodo, closeNewTodo } from "../actions";

class CardInput extends React.Component {
  createTodo = (e) => {
    this.props.addTodo(e.target.value);
    this.props.closeNewTodo();
  };
  handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      this.createTodo(e);
    }
  };

  render() {
    if (this.props.newTodo) {
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
  newTodo: state.newTodo,
});

export default connect(mapStateToProps, { addTodo, closeNewTodo })(CardInput);
