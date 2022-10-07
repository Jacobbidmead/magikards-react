import './Card.css'

import React from 'react'

class Card extends React.Component {




	render() {
		return(
				
				<div className={`card ${this.props.selectedCard.archetype}`}>
					<div
						className="img"
						style={{backgroundImage: "url(" +this.props.selectedCard.image+ ")"}}
					></div>
					<div className={`card-body ${this.props.selectedCard.archetype}`}>
						<h3 className="card-title text-center">{this.props.selectedCard.title}</h3>

						<h3 className="card-text text-center atributes">
							{this.props.selectedCard.effects.map((effect, i)=> <div>{effect.textValue}<span className="fist-icon"
								><i className={`fa-sharp fa-solid fa-hand-fist fist-icon`}></i></span></div>)}
						</h3>
					</div>
				</div>

		)

	}

}

export default Card
