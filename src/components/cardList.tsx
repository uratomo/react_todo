import React from "react"
import Card from "./card"
import { connect } from "react-redux"

interface cardListProps {
  todos: string[]
}

class CardList extends React.Component<cardListProps> {
  render() {
    const todos = this.props.todos
    return todos.map((todo: string, i: number) => <Card key={i} todo={todo} />)
  }
}

const mapStateToProps = (state: any) => ({ todos: state.todos })

export default connect(mapStateToProps)(CardList)
