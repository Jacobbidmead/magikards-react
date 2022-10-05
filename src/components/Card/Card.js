import './Card.css'

import React from 'react'

class Card extends React.Component {




	render() {
		return(

				<div className={`card ${this.props.archetype}`}>
					<div
						className="img"
						style={{backgroundImage: "url('images/fireball.png')"}}
					></div>
					<div className={`card-body ${this.props.archetype}`}>
						<h3 className="card-title text-center">Frost Warrior</h3>

						<h3 className="card-text text-center atributes">
							80<span className="fist-icon"
								><i className={`fa-sharp fa-solid fa-hand-fist ${this.props.archetype}`}></i
							></span>
						</h3>
					</div>
				</div>

		)

	}

}

export default Card
