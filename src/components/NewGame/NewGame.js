import React from 'react'

class NewGame extends React.Component {
	render () {
		return (
			<form>

			      <div className="background playerLayout">
			        <div><h2>Character Select</h2></div>
			        <div>
			          <h2>Character Select</h2>
			        </div>

			        <div id="character-container">
			          <div>
			            <input type="text" placeholder="Username" />

			          </div>
			          <div id="character-box"></div>
			          <div className="avatar"><img src="images/fireshield.png" /></div>
			          <div className="avatar"><img src="images/iceshield.png" /></div>
			        </div>
			        <div id="character-container">
			          <div>
			            <input type="text" placeholder="Username" />

			          </div>
			          <div id="character-box"></div>
			          <div className="avatar"><img src="images/fireshield.png" /></div>
			          <div className="avatar"><img src="images/iceshield.png" /></div>
			        </div>
			      </div>
						<button onClick={e => this.props.initializePlayers({name: 'Josh', playerArchetype: 'fire'}, {name: 'Mohammed', playerArchetype: 'ice'})}>click</button>
			    </form>
		)
	}
}

export default NewGame
