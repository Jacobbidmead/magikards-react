import React from 'react'
import InfoCard from './InfoCard.js'
import {cardsData} from '../../cardsData'
import './info-card.css'


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

{this.state.showAllCards ? <div><InfoCard /></div> : null}
	<div><button onClick={e => this.showCards(e)}>Info</button></div>

</>
		)
	}
}

export default CardPopUp
