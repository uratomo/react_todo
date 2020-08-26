import React from "react";
import CardList from "./cardList";
import CardInput from "../containers/cardInput";
import CardButton from "./cardButton";
import "../style/list.scss";
import "../style/color.css";

class List extends React.Component {
  render() {
    return (
      <div className="list-wrapper list-color">
        <div className="list-header">
          <div className="list-header__left">title(props)</div>
          <div className="list-header__right">option</div>
        </div>
        <CardList />
        <CardInput />
        <CardButton />
      </div>
    );
  }
}

export default List;
