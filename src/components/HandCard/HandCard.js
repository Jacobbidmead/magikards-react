
import React from 'react'

class HandCard extends React.Component {
  swapTypeIcon = (type) => {
		// type = effect type on card
		let icon
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
  displayEnergy = (val) => {
		let arr = []
		for (let i = 0; i < val; i++){
			arr.push(<i class="fa-regular fa-circle card-energy"></i>)
		}
		return arr
	}
	render() {
		return (
			<div className="hand" onDoubleClick={e => this.props.submitCard(this.props.playerTurn, this.props.card, this.props.id, this.props.player)}>
        		<div>
            		<img className="hand-img" src={this.props.card.image}alt=''/>
        		</div>
            	<div className={`hand-body ${this.props.card.archetype}`}>
              		<div>
              			{this.props.card.effects.map(effect => <div>{effect.textValue} {this.swapTypeIcon(effect.type)}</div>)}
              		</div>
              		<div className="card-energy">
						{this.displayEnergy(this.props.card.energy).map(el => el)}
					</div>
            	</div>
      		</div>

		)
	}
}

export default HandCard
