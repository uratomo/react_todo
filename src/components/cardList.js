import React from "react";
import Card from "./card";
import { connect } from "react-redux";

class CardList extends React.Component {
  render() {
    const todos = this.props.todos;
    return todos.map((item, i) => <Card key={i} title={item} />);
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });

export default connect(mapStateToProps)(CardList);
