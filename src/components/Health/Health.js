import React from 'react'


class Health extends React.Component {
	render() {
		return (

			<div>
				<span>Player Name</span>
				<div className="health-bar" data-total="1000" data-value="900">
					<div className="bar">
						<div className="hit"></div>
					</div>
				</div>
			</div>

		)
	}
}

export default Health
