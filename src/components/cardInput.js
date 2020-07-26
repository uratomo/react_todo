import React from "react";
import "../style/cardInput.scss";

class cardInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cardInput__wrapper">
        <input
          className="cardInput"
          type="textarea"
          size="25"
          placeholder="ここに文字を入力してください"
        />
      </div>
    );
  }
}

export default cardInput;
