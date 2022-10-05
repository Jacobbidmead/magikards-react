
import React from 'react'

class HandCard extends React.Component {
	render() {
		return (



			<div className="hand">
          <div>
            <img className="hand-img" src={this.props.card.image} />
          </div>
          <div className={`hand-body ${this.props.card.archetype}`}>
            {this.props.card.effects[0].value}<i className="fa-sharp fa-solid fa-hand-fist fist-icon"></i>
          </div>
        </div>

		)
	}
}

export default HandCard
