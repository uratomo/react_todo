import React from "react";
import Card from "./card";
import { render } from "@testing-library/react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.title.map((item, i) => <Card key={i} title={item} />);
  }
}

export default CardList;
