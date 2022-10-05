import React from 'react'
import Card from './components/Card/Card.js'
import HandCard from './components/HandCard/HandCard.js'
import Health from './components/Health/Health.js'
import {cardsData} from './cardsData'
import Player from './player'

let cards = cardsData


class App extends React.Component {
    state = {
		hand: [cards[0], cards[0], cards[0], cards[11], cards[1], cards[8], cards[9]],
		status: 'battle'
	
	}
	initializePLayers = (playerOne, playerTwo) => {
		// player1 and player2 above are objects that contain name and player archetype.
		if (playerOne.playerArchetype == 'fire'){
			playerOne.health = 500
		} else if (playerOne.playerArchetype == 'ice'){
			playerOne.health = 700
		}
		if (playerTwo.playerArchetype == 'fire'){
			playerTwo.health = 500
		} else if (playerTwo.playerArchetype == 'ice'){
			playerTwo.health = 700
		}
	}
  	render() {
			return (
				<>
				{this.state.status == 'new' && <div>Hello World</div>}
				{this.state.status == 'battle' && <div className="background">
				<nav className="layout">
					<div>
							<a href="#" className="button"> <img src="" />Username</a>
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