import React from 'react'
import Card from '../Card/Card.js'
import HandCard from '../HandCard/HandCard.js'
import Health from '../Health/Health.js'
const d = new Date().toLocaleTimeString('en-US', { hour12: false, 
	hour: "numeric", 
	minute: "numeric"})

class Battlefield extends React.Component {
	state = {
		hand: this.props.hand,
		player1: this.props.player1,
		player2: this.props.player2,
		turn: 'player1', /*Player One goes first by default, this is changed once player selects a card*/

		selectedCard: {
			title: '',
			image: 'https://assets.codepen.io/13471/sparkles.gif',
			archetype: '',
			description: '',
			energy: null,
			effects: [
				{
					type: '',
					value: 0,
					textValue: 'Choose a card to use'
				},
						]
		  },
		  selectedCard2: {
			title: '',
			image: 'https://assets.codepen.io/13471/sparkles.gif',
			archetype: '',
			description: '',
			energy: null,
			effects: [
				{
					type: '',
					value: 0,
					textValue: 'Choose a card to use'
				},
						]
		  },
	}
	submitCard = (playerTurn, card, idx, player) =>{
		// idx is the index of the card that was selected so we can remove it from hand of player
		console.log(`Player energy: ${player.energy}`)
		if (player.energy < card.energy) {
			console.log('You do not have enough energy to use this card')
		} else {
		if (playerTurn == 'player1'){
			this.state.player1.hand.splice(idx, 1)
			this.setState({
				selectedCard: card,
				turn: 'player2'
			})
		} else if (playerTurn == 'player2'){
			this.state.player2.hand.splice(idx, 1)
			this.setState({
				selectedCard2: card
			})
			
		}
	}
	}
	resetCards = () => {
		this.setState({
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
			  selectedCard2: {
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
			  }
		})
	}
	toPercentage = (val, maxVal) => {
		// This function is for health of players, returns a string of the percent of health remaining.
		let value = (val/maxVal)
		return (String(Math.floor(value*100)))+'%'
		}

	render () {
		return (
			
			<div className="background">
				
				<nav className="layout">
					<div>
							<a href='#' className="button">Username</a>
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
						<li>How</li>
					</ul>
				</div>
			<div className="layout">
					<Health player={this.state.player1} toPercentage={this.toPercentage}/>
					<div className="card-table">
						<Card selectedCard={this.state.selectedCard}/>
						<Card selectedCard={this.state.selectedCard2}/>
					</div>
					<Health player={this.state.player2} toPercentage={this.toPercentage}/>
			</div>
			<footer className="hand-section">
				{this.state.turn === 'player1' && this.state.player1.setDeck()}
				{this.state.turn === 'player1' && this.state.player1.getRandomCards()}
				{this.state.turn === 'player1' && this.state.player1.hand.map((card, idx) => {
						return (
							<HandCard card={card} id={idx} submitCard={this.submitCard} playerTurn='player1' player={this.state.player1}/>
						)
					})}
				{this.state.turn === 'player2' && this.state.player2.setDeck()}
				{this.state.turn === 'player2' && this.state.player2.getRandomCards()}
				{this.state.turn === 'player2' && this.state.player2.hand.map((card, idx) => {
						return (
							<HandCard card={card} id={idx} submitCard={this.submitCard} playerTurn='player2' player={this.state.player2}/>
						)
					})}


			</footer>
			</div>
			
		)
	}
}

export default Battlefield
