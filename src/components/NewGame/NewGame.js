import React from 'react'
import CardPopUp from '../CardPopUp/CardPopUp.js'


class NewGame extends React.Component {
	state = {
		username:'Player One',
		username2: 'Player Two',
		player1Archetype: '',
		player2Archetype: '',
		showButton: false

	}
	changeUsername = (e) => {

		this.setState({
		 username: !e.target.value ? 'Player One': e.target.value.toLowerCase()
		})
}

	changeUsername2 = (e) => {
		this.setState({
			username2: !e.target.value ? 'Player Two': e.target.value.toLowerCase()
		})
	}




	changeArchetype = (player, type) => {


		if (player == 'player1') {
			this.setState({
				player1Archetype: type
			})
		} else if (player == 'player2') {
			this.setState({
				player2Archetype: type
			})
		}
	}




	render () {
		return (
			<form>

			      <div className="background playerLayout">
			        <div><h2>{this.state.username}</h2></div>
			        <div>
			          <h2>{this.state.username2}</h2>
			        </div>

			        <div id="character-container" >
			          <div>
			            <input  onKeyUp={e => this.changeUsername(e)} type="text" placeholder="Username" />

			          </div>
			          <div className="character-box" style={{ backgroundImage: this.state.player1Archetype == 'fire' ? 'url(images/firedragon.png)' :
					  this.state.player1Archetype == 'ice' ? 'url(images/icedragon.png)' : 'url(https://assets.codepen.io/13471/sparkles.gif)'}}></div>
				          <div className="avatar"><img src="images/firedragon.png" onClick={() => this.changeArchetype('player1', 'fire')} /></div>
				          <div className="avatar"><img src="images/icedragon.png" onClick={() => this.changeArchetype('player1', 'ice')}/></div>
			        </div>
			        <div id="character-container">
			          <div>
			            <input type="text" placeholder="Username" onKeyUp={e => this.changeUsername2(e)}/>

			          </div>
			          <div className="character-box" style={{ backgroundImage: this.state.player2Archetype == 'fire' ? 'url(images/firedragon.png)' :
					  this.state.player2Archetype == 'ice' ? 'url(images/icedragon.png)' : 'url(https://assets.codepen.io/13471/sparkles.gif)'}}></div>

			          <div className="avatar"><img src="images/firedragon.png" onClick={() => this.changeArchetype('player2', 'fire')} /></div>
			          <div className="avatar"><img src="images/icedragon.png" onClick={() => this.changeArchetype('player2', 'ice')}/></div>
			        </div>
								<div>


{this.state.player1Archetype && this.state.player2Archetype ?
								<button className="startButton" onClick={e => this.props.initializePlayers({name: this.state.username, playerArchetype: this.state.player1Archetype},
									{name: this.state.username2, playerArchetype: this.state.player2Archetype})}>Start</button> : null}
									</div>
			      </div>

			    </form>
		)
	}
}

export default NewGame
