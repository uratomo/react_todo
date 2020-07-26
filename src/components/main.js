import React from "react";
import List from "./list";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: props.title };
  }

  render() {
    return (
      <div>
        <List title={this.state.title} />
      </div>
    );
  }
}

export default Main;
