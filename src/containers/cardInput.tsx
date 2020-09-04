import React from "react"
import "../style/cardInput.css"
import { connect } from "react-redux"
import { createTodo, hiddenTodoInput, displayTodoInput } from "../actions"

interface CardInputProps {
  createTodo: any
  hiddenTodoInput: any
  visibleTodoInput: any
  displayTodoInput: any
}

class CardInput extends React.Component<CardInputProps> {
  componentDidMount() {
    //  ここにfocusさせるためには？
    // document.getElementsByClassName("cardInput").focus();
    console.log(this.props)
    // this.props.textInput.current.focus();
  }

  createTodo = (e: any) => {
    if (e.target.value === "") {
      return this.props.hiddenTodoInput();
    }

    this.props.createTodo(e.target.value)
    e.target.value = "";
  }
  handleKeyEnter = (e: any) => {
    if (e.key === "Enter") {
      this.createTodo(e)
    }
  }

  render() {
    if (this.props.visibleTodoInput) {
      return (
        <div className="cardInput__wrapper">
          <textarea
            className="cardInput"
            ref={this.props.textInput}
            placeholder="ここに文字を入力してください"
            onBlur={(e) => this.createTodo(e)}
            onKeyPress={(e) => this.handleKeyEnter(e)}
          />
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = (state: any) => ({
  visibleTodoInput: state.visibleTodoInput,
})

export default connect(mapStateToProps, { createTodo, hiddenTodoInput, displayTodoInput })(
  CardInput,
)
