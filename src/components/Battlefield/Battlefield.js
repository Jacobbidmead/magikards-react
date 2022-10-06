import React from 'react'
import Card from '../Card/Card.js'
import HandCard from '../HandCard/HandCard.js'
import Health from '../Health/Health.js'
import Player from '../../player'
import NewGame from '../NewGame/NewGame.js'

class Battlefield extends React.Component {
	state = {
		hand: this.props.hand,
		player1: this.props.player1,
		player2: this.props.player2
	}
	render () {
		return (
			<>
			<div className="background">
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
			</>
		)
	}
}

export default Battlefield
