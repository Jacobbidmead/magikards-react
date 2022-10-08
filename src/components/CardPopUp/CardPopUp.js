import React from 'react'
import Card from '../Card/Card.js'
import {cardsData} from '../../cardsData'


let cards = cardsData


class CardPopUp extends React.Component {
	state = {
		showAllCards: false
	}

	showCards = (e) => {
		this.setState({
			showAllCards: this.state.showAllCards ? false : true
		})
	}
    render() {
		return (
<>

{this.state.showAllCards ? <div><Card selectedCard={cards[0]}/></div> : null}
	<div><button onClick={e => this.showCards(e)}>Show All Cards</button></div>

</>
		)
	}
}

export default CardPopUp
