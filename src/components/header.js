import React from "react";
import "../style/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h2 className="title">Menu</h2>
      </div>
    );
  }
}

export default Header;
