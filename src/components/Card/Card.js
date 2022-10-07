import './Card.css'

import React from 'react'

class Card extends React.Component {
	swapEnergyVal = (val) => {
		let icon
		switch(val){
			case 0:
				icon = <i class="fa-solid fa-0"></i>
				break
			case 1:
				icon = <i class="fa-solid fa-1"></i>
				break
			case 2:
				icon = <i class="fa-solid fa-2"></i>
				break
			case 3:
				icon = <i class="fa-solid fa-3"></i>
				break
			case 4:
				icon = <i class="fa-solid fa-4"></i>
				break
			case 5:
				icon = <i class="fa-solid fa-5"></i>
				break
			default:
				return null
		}
		return icon
	}



	render() {
		return(
				
				<div className={`card ${this.props.selectedCard.archetype}`}>
					<div
						className="img"
						style={{backgroundImage: "url(" +this.props.selectedCard.image+ ")"}}
					></div>
					<div className={`card-body ${this.props.selectedCard.archetype}`}>
						<h3 className="card-title text-center">{this.props.selectedCard.title} {this.swapEnergyVal(this.props.selectedCard.energy)}</h3>

						<h3 className="card-text text-center atributes">
							{this.props.selectedCard.effects.length == 1 ? <><div>{this.props.selectedCard.effects[0].textValue}<span className="fist-icon"
								><i className={`fa-sharp fa-solid fa-hand-fist fist-icon`}></i></span></div><div style={{height: "100%"}}></div></>: this.props.selectedCard.effects.map((effect, i)=> <div>{effect.textValue}<span className="fist-icon"
								><i className={`fa-sharp fa-solid fa-hand-fist fist-icon`}></i></span></div>)}
							
						</h3>
					</div>
				</div>

		)

	}

}

export default Card
