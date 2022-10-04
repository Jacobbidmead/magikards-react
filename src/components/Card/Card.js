import './Card.css'

import React from 'react'

class Card extends React.Component {




	render() {
		return(
				<div className={`card ${this.props.archetype}`}>
					<div
						className="img"
						style={{backgroundImage: "url('images/iceknight.png')"}}
					></div>
					<div className={`card-body ${this.props.archetype}`}>
						<h5 className="card-title text-center">Frost Warrior</h5>
						<p className="card-text text-center">
							<em>
								A cold wind sweeps over the battle field and damages whoever
								it touches
							</em>
						</p>
						<p className="card-text text-center atributes">
							Damage 80<span class="fist-icon"
								><i className={`fa-sharp fa-solid fa-hand-fist ${this.props.archetype}`}></i
							></span>
						</p>
					</div>
				</div>
		)

	}

}

export default Card
