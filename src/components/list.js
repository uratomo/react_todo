import React from "react";
import Card from "./card";
import CardList from "./cardList";
import CardInput from "./cardInput";
import CardButton from "./cardButton";
import "../style/list.scss";
import "../style/color.css";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-wrapper list-color">
        <div className="list-header">
          <div className="list-header__left">title(props)</div>
          <div className="list-header__right">option</div>
        </div>
        <CardList title={this.props.title} />
        <CardInput />
        <CardButton />
      </div>
    );
  }
}

export default List;
