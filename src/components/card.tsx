import React from "react"
import "../style/card.css"

interface Props {
  todo: string
}

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="cardWrapper">
        <p className="card__p">{this.props.todo}</p>
      </div>
    )
  }
}

export default Card
