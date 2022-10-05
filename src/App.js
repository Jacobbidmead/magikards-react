import React from 'react'
import Card from './components/Card/Card.js'
import HandCard from './components/HandCard/HandCard.js'
import Health from './components/Health/Health.js'
let cardsData = [
    {
    title: 'Burn',
    image: '/images/fireball.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50
        },
        {
          type: 'boost',
          value: 1.35
        }
                ]
  },
  {
    title: 'Frostbite',
    image: 'images/iceshield.png',
    archetype: 'ice',
    description: 'An brisk cold damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50
        },
        {
          type: 'boost',
          value: 1.35
        }
                ]
  }]
let burn = cardsData[0]
let fb = cardsData[1]

class App extends React.Component {
    state = {
			hand:[burn, fb, burn, fb, burn, fb, burn]
		}




  	render() {
			return (
				<div className="background">
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
			)
		}




}

export default App
