import React from 'react'
import Card from './components/Card/Card.js'
import HandCard from './components/HandCard/HandCard.js'
import Health from './components/Health/Health.js'
import {cardsData} from './cardsData'
import Player from './player'

let cards = cardsData


class App extends React.Component {
    state = {
		hand: [cards[0], cards[4], cards[0], cards[11], cards[1], cards[8], cards[9]],
		player1: {},
		player2: {},
		status: 'new'
	
	}
	initializePlayers = () => {
		// player1 and player2 above are objects that contain name and player archetype.
		// console.log(playerOne.playerArchetype == 'fire')
		// if (playerOne.playerArchetype === 'fire'){
		// 	playerOne.health = 500
		// } else if (playerOne.playerArchetype === 'ice'){
		// 	playerOne.health = 700
		// }
		// if (playerTwo.playerArchetype === 'fire'){
		// 	playerTwo.health = 500
		// } else if (playerTwo.playerArchetype === 'ice'){
		// 	playerTwo.health = 700
		// }
		this.setState({
			// player1: new Player(playerOne),
			// player2: new Player(playerTwo),
			status: 'battle'
		})
		
	}
  	render() {
			return (
				<>
				{this.state.status == 'new' && <div><button onClick={e => this.initializePlayers()}>click</button>Hello World</div>}
				{this.state.status == 'battle' && <div className="background">
				<nav className="layout">
					<div>
							<a href="#" className="button"> <img src="" />Username</a>
							<a href="/" onClick={ e => this.initializePlayers()} className="button">Back</a>
					</div>
					<div>
						<div className="title">MagiKards</div>
					</div>

					<div>
							<a href="#" className="button">Quit Game</a>
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