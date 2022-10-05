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
    title: 'Basic',
    image: '/images/sword.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50
        },

                ]
  },
       {
    title: 'Explosion',
    image: '/images/sword.png',
    archetype: 'fire',
    description: 'An intense heat damages',
    energy: 1,
    effects: [
        {
            type: 'damage',
            value: 100
        },

                ]
  }, {
    title: 'Fire Dragon',
    image: '/images/firedragon.png',
    archetype: 'fire',
    description: 'Fire Dragon',
    energy: 3,
    effects: [
        {
            type: 'damage',
            value: 300
        },

                ]
  }, {
    title: 'Basic Defend',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire blocked the attack',
    energy: 0,
    effects: [
        {
            type: 'defend',
            value: 0.85
        },

                ]
  }, {
    title: 'Shield',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire blocked with a shield',
    energy: 1,
    effects: [
        {
            type: 'defend',
            value: 0.75
        },

                ]
  },{
    title: 'Evade',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire dodged the attack',
    energy: 2,
    effects: [
        {
            type: 'defend',
            value: 0.65
        },

                ]
  },
    {
    title: 'Cloak',
    image: '/images/fireshield.png',
    archetype: 'fire',
    description: 'Fire evaded the attack',
    energy: 3,
    effects: [
        {
            type: 'defend',
            value: 0.50
        },

                ]
  },{
    title: 'Basic boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire blocked with a shield',
    energy: 0,
    effects: [
        {
            type: 'damage',
            value: 50
        },
        {
          type: 'boost',
          value: 1.25
        }
                ]
  },
    {
    title: 'Burn boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire gained strength!',
    energy: 1,
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
    title: 'Attack boost',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire gained strength!',
    energy: 2,
    effects: [
        {
            type: 'damage',
            value: 200
        },
        {
          type: 'boost',
          value: 1.25
        }
                ]
  },
                       {
    title: 'Fire Mage',
    image: '/images/firemage.png',
    archetype: 'fire',
    description: 'Fire Mage calls fourth his legions',
    energy: 3,
    effects: [
        {
            type: 'damage',
            value: 250
        },
        {
          type: 'boost',
          value: 1.25
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
            value: 80
        },
        {
          type: 'boost',
          value: 1.35
        }
                ]
  }]
let burn = cardsData[0]
let basic = cardsData[1]
let explosion = cardsData[2]
let dragon = cardsData[3]
let firemage = cardsData[10]


class App extends React.Component {
    state = {
			hand:[burn, basic, burn, dragon, burn, burn, firemage]
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
