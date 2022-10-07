import React from 'react'
import Card from './components/Card/Card.js'
import HandCard from './components/HandCard/HandCard.js'
import Health from './components/Health/Health.js'
import {cardsData} from './cardsData'
import Player from './player'
import NewGame from './components/NewGame/NewGame.js'
import Battlefield from './components/Battlefield/Battlefield.js'

let cards = cardsData


class App extends React.Component {
    state = {
		hand: [cards[0], cards[4], cards[0], cards[11], cards[1], cards[8], cards[9]],
		player1: undefined,
		player2: undefined,
		status: 'new'

	}
	initializePlayers = (p1, p2) => {
		// p1 and p2 above are objects that contain name and player archetype.
		if (p1.playerArchetype === 'fire'){
			p1.maxHealth = 700
			p1.health = 700
		} else if (p1.playerArchetype === 'ice'){
			p1.maxHealth = 900
			p1.health = 900
		}
		if (p2.playerArchetype === 'fire'){
			p2.maxHealth = 700
			p2.health = 700
		} else if (p2.playerArchetype === 'ice'){
			p2.maxHealth = 900
			p2.health = 900
		}

		this.setState({
			player1: new Player(p1),
			player2: new Player(p2),
			status: 'battle'

		})


	}
	returnToMenu = () => {
		this.setState({
			status: 'new',
			player1: undefined,
			player2: undefined
		})

	}
  	render() {
			return (
				<>
				{/* Players will be populated from the inputs on the 'new game' page */}
				{this.state.status === 'new' && <div><NewGame initializePlayers={this.initializePlayers}/></div>}
				{this.state.status === 'battle' && <div><Battlefield return={this.returnToMenu}player1={this.state.player1} player2={this.state.player2}/></div>}

				</>)
		}


}

export default App
