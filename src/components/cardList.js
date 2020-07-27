import React from "react";
import Card from "./card";
import { connect } from "react-redux";

class CardList extends React.Component {
  render() {
    const todos = this.props.todos;
    return todos.map((todo, i) => <Card key={i} todo={todo} />);
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(CardList);
