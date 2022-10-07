import React from 'react'


class Health extends React.Component {
	state = {
		health: this.props.toPercentage(this.props.player.health, this.props.player.maxHealth)
	}
	render() {

		return (

			<div>
				<span>{this.props.player.name}</span>
				<div className="health-bar">
					<div className="bar" style={{width:this.state.health}}>
						<div className="hit"></div>
					</div>
				</div>
			</div>

		)
	}
}

export default Health
