import './Card.css'

import React from 'react'

class Card extends React.Component {
	displayEnergy = (val) => {
		let arr = []
		if (val == 0){
			arr.push()
		}
		for (let i = 0; i < val; i++){
			arr.push(<i class="fa-regular fa-circle"></i>)
		}
		return arr
	}
	swapTypeIcon = (type) => {
		// type = effect type on card
		let icon
		console.log(type)
		switch (type){
			case 'damage':
				icon = <i className={`fa-sharp fa-solid fa-hand-fist fist-icon`}></i>
				break
			case 'defense':
				icon = <i className="fa-solid fa-shield-halved"></i>
				break
			case 'atkboost':
				icon = <><i className="fa-solid fa-angles-up"></i><i className={`fa-sharp fa-solid fa-hand-fist fist-icon`}></i></>
				break
			case 'heal':
				icon = <i className="fa-solid fa-heart"></i>
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
						<h3 className="card-title text-center">{this.props.selectedCard.title}</h3>

						<h3 className="card-text text-center atributes">
							{this.props.selectedCard.effects.length == 1 ? <><div>{this.props.selectedCard.effects[0].textValue}
								{this.swapTypeIcon(this.props.selectedCard.effects[0].type)}</div><div style={{height: "100%"}}></div></>: 
								this.props.selectedCard.effects.map((effect, i)=> <div>{effect.textValue} {this.swapTypeIcon(effect.type)}</div>)}
						</h3>
						<div className="card-energy">
						{this.displayEnergy(this.props.selectedCard.energy).map(el => el)}
						</div>
					</div>
				</div>

		)

	}

}

export default Card
