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
		selectedCard: {
			title: '',
			image: 'https://assets.codepen.io/13471/sparkles.gif',
			archetype: 'fire',
			description: '',
			energy: 0,
			effects: [
				{
					type: '',
					value: 0,
					textValue: 'Choose a card to use'
				},
						]
		  },
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
						<a href="#" className="button quit" onClick={e => this.props.return()}>Quit Game</a>
					</div>
				</nav>
				<div className="battleLog">
				<ul>
				<li>battle log</li>
				</ul>
				</div>
			<div className="layout">
					<Health player={this.state.player1}/>
					<div className="card-table">
						<Card selectedCard={this.state.selectedCard}/>
						<Card selectedCard={this.state.selectedCard}/>
					</div>
					<Health player={this.state.player2}/>
			</div>
			<footer className="hand-section">
				{this.state.turn === 'player1' && this.state.player1.setDeck()}
				{this.state.turn === 'player1' && this.state.player1.getRandomCards()}
				{this.state.turn === 'player1' && this.state.player1.hand.map((card, idx) => {
						return (
							<HandCard card={card} key={idx}/>
						)
					})}
				{this.state.turn === 'player2' && this.state.player2.setDeck()}
				{this.state.turn === 'player2' && this.state.player2.getRandomCards()}
				{this.state.turn === 'player2' && this.state.player2.hand.map((card, idx) => {
						return (
							<HandCard card={card} key={idx}/>
						)
					})}


			</footer>
			</div>
			</>
		)
	}
}

export default Battlefield
