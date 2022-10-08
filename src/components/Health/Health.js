import React from 'react'


class Health extends React.Component {
	state = {
		health: this.props.toPercentage(this.props.player.health, this.props.player.maxHealth),
		atkBoosts: [],
		defBoosts: [],
		energy: 0,
		baseStrength: 0
	}
	displayEnergy = (val) => {
		let arr = []
		for (let i = 0; i < val; i++){
			arr.push(<i class="fa-regular fa-circle card-energy"></i>)
		}
		return arr
	}
	setBaseStrength = (val) => {
		// val will be the player's base strength as a mixed number, which is a value greater than or equal to 1.00.
		// this changes the state so the player's base strength always displays
		let final
		if (val === 1){
			return null
		} else {
			final = (' '+Math.floor((val-1)*100)+'%')
		}
		this.state.atkBoosts.push(final)
	} 
	render() {

		return (

			<div className='player-dashboard'>
				<span>{this.props.player.name}</span>
				<div className="health-bar">
					<div className="bar">
						<div className="hit" style={{width:this.state.health}}></div>
					</div>
				</div>
				<div><h3>{this.props.player.health}</h3></div>
				<div className='player-boosts'>
					<div className='player-boosts-sub-energy'>{this.displayEnergy(this.props.player.energy)} </div>
					Status
					{this.setBaseStrength(this.props.player.strength)}
					<div className='player-boosts-sub'>{this.state.atkBoosts.length > 0 ? <i className={`fa-sharp fa-solid fa-hand-fist`}>{this.state.atkBoosts.map(el => <span>{el}</span>)}</i> : null}</div>
					<div className='player-boosts-sub'>{this.state.defBoosts.length > 0 ? <i className="fa-solid fa-shield-halved">{this.state.defBoosts.map(el => <span>{el}</span>)}</i> : null}</div>

				</div>
			</div>

		)
	}
}

export default Health
