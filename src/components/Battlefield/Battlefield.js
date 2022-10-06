import React from 'react'
import Card from '../Card/Card.js'
import HandCard from '../HandCard/HandCard.js'
import Health from '../Health/Health.js'

class Battlefield extends React.Component {
	state = {
		hand: this.props.hand,
		player1: this.props.player1,
		player2: this.props.player2,
		turn: 'player1', /*Player One goes first by default, this is changed once player selects a card*/
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
						<a href="#" className="button" onClick={e => this.props.return()}>Quit Game</a>
					</div>
				</nav>
			<div className="layout">
					<Health player={this.state.player1}/>
					<div className="card-table">
						<Card archetype="ice"/>
						<Card archetype="fire"/>
					</div>
					<Health player={this.state.player2}/>
			</div>
			<footer className="hand-section">
				{this.state.turn === 'player1' && this.state.player1.setDeck()}
				{this.state.turn === 'player1' && this.state.player1.getRandomCards()}
					{this.state.player1.hand.map(card => {
						return (
							<HandCard card={card}/>
						)
					})}
				
				{/* {this.state.hand.map(card => {
						return (
							<HandCard card={card}/>
						)
					})} */}
			</footer>
			</div>
			</>
		)
	}
}

export default Battlefield
