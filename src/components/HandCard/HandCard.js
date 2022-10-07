
import React from 'react'

class HandCard extends React.Component {
	render() {
		return (
			<div className="hand" onClick={e => this.props.submitCard(this.props.player, this.props.card)}>
          <div>
            <img className="hand-img" src={this.props.card.image} />
          </div>
          <div className={`hand-body ${this.props.card.archetype}`}>
            {this.props.card.effects[0].textValue}<i className="fa-sharp fa-solid fa-hand-fist fist-icon"></i>
          </div>
        </div>

		)
	}
}

export default HandCard
