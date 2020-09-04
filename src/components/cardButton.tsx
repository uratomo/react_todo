import React from "react"
import "../style/cardButton.css"
import { connect } from "react-redux"
import { displayTodoInput } from "../actions"

interface cardButtonProps {
  displayTodoInput(): { type: string }
}

class cardButton extends React.Component<cardButtonProps> {
  render() {
    return (
      <div className="cardButton__wrapper">
        <button
          className="cardButton__button"
          onClick={() => this.props.displayTodoInput()}
        >
          カードを追加
        </button>
      </div>
    )
  }
}

export default connect(null, { displayTodoInput })(cardButton)
