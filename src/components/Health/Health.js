import React from 'react'


class Health extends React.Component {
	render() {

		return (

			<div>
				<span>{this.props.player.name}</span>
				<div className="health-bar" data-total={this.props.player.maxHealth} data-value={this.props.player.Health}>
					<div className="bar">
						<div className="hit"></div>
					</div>
				</div>
			</div>

		)
	}
}

export default Health
