import React from 'react'
import Card from '/Card.js'
import {cardsData} from '../cardsData'

let cards = cardsData


class CardPopUp extends React.Component {
	state = {
		showAllCards: false

	}

	showCards = (e) => {
		this.setState({
			showAllCards: true
		})
	}


	render() {
		return (
<>

{this.state.showAllCards ? <div><Card/></div> : null}
	<div><button onlick={e => showCards(e)}>Show All Cards</button></div>
</>
		)
	}
}

export CardPopUp
