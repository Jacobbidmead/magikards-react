
import React from 'react'

class Hand extends React.Component {
	render() {
		return (

			<section className="hand-section ">
			<div className="hand">
          <div>
            <img className="hand-img" src="images/firemage.png" />
          </div>
          <div className="hand-body fire">
            80<i className="fa-sharp fa-solid fa-hand-fist fist-icon"></i>
          </div>
        </div>
			</section>

		)
	}
}

export default Hand
