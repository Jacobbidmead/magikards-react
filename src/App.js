import React from 'react'
import Card from './components/Card/Card.js'
import HandCard from './components/HandCard/HandCard.js'
import Health from './components/Health/Health.js'
import {cardsData} from './cardsData'
import Player from './player'
import NewGame from './components/NewGame/NewGame.js'

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
			p1.health = 500
		} else if (p1.playerArchetype === 'ice'){
			p1.health = 700
		}
		if (p2.playerArchetype === 'fire'){
			p2.health = 500
		} else if (p2.playerArchetype === 'ice'){
			p2.health = 700
		}

		this.setState({
			player1: new Player(p1),
			player2: new Player(p2),
			status: 'battle'

		})


	}
	returnToMenu = () => {
		// this.state.player1.setDeck()
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
				{this.state.status === 'new' && <div><NewGame /><button onClick={e => this.initializePlayers({name: 'Josh', playerArchetype: 'fire'}, {name: 'Mohammed', playerArchetype: 'ice'})}>click</button>Hello World</div>}
				{this.state.status === 'battle' && <div className="background">
				<nav className="layout">
					<div>
							<a href='#' className="button"> <img src="" />Username</a>
					</div>
					<div>
						<div className="title">MagiKards</div>
					</div>

					<div>
							<a href="#" className="button" onClick={ e => this.returnToMenu()}>Quit Game</a>
					</div>
				</nav>


				<div className="layout">
						<Health />
						<div className="card-table">
							<Card archetype="ice"/>
							<Card archetype="fire"/>
						</div>
						<Health />
			  </div>

				<footer className="hand-section">
					{this.state.hand.map(card => {
							return (
								<HandCard card={card}/>
							)
						})}
				</footer>
			</div>
		}
				</>)
		}


}

export default App
