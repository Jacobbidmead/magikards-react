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
    image: 'images/sword.png',
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
  },
	{
	    title: 'Basic',
	    image: '/images/sword.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'damage',
	            value: 30
	        }
	                ]
	  },
	{
	    title: 'Cold Burn',
	    image: '/images/iceknight.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 160
	        }
	                ]
	  },
	{
	    title: 'ICE Dragon',
	    image: '/images/icedragon.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 200
	        }
	                ]
	  },
	{
	    title: 'Basic Defence',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.75
	        }
	                ]
	  },
	{
	    title: 'Shield',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 2,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.65
	        }
	                ]
	  },
	{
	    title: 'Evade',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.5
	        }
	                ]
	  },
	{
	    title: 'Invisibility',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.3
	        }
	                ]
	  },
	{
	    title: 'Basic boost',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.75
	        },
	        {
	          type: 'boost',
	          value: 1.25
	        }
	                ]
	  },
	{
	    title: 'Frost boost',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 1,
	    effects: [
	        {
	            type: 'defend',
	            value: 0.65
	        },
	        {
	          type: 'boost',
	          value: 1.25
	        }
	                ]
	  },
	                 {
	    title: 'Attack & defend',
	    image: '/images/iceknight.png',
	    archetype: 'ice',
	    description: '',
	    energy: 3,
	    effects: [
	        {
	            type: 'damage',
	            value: 150
	        },
	        {
	          type: 'defend',
	          value: 0.85
	        }
	                ]
	  },
	                 {
	    title: 'Attack & defend',
	    image: '/images/iceshield.png',
	    archetype: 'ice',
	    description: '',
	    energy: 2,
	    effects: [
	        {
	            type: 'damage',
	            value: 30
	        },
	        {
	          type: 'defend',
	          value: 0.75
	        }
	                ]
	  }
	]

let burn = cardsData[0]
let basic = cardsData[1]
let explosion = cardsData[2]
let dragon = cardsData[3]
let firemage = cardsData[14]


class Player {
constructor(obj){
	this.name = obj.name
	//this.sessions = obj.sessions|| []  // lists all games they've played as well as all the xp gained, who won, date/time
	//this.messages = obj.messages || []  // Battle Requests or System Notifications (such as level up)
	// A message is an obj containing 'Type' variable (System or Battle), 'Message' variable (String of the message) 
	// Messages are checked at a set interval while the user is viewing the dashboard.
	this.playerArchetype = obj.playerArchetype || '' // current build == Fire or Ice

	this.deck = obj.deck || [] // retrieving from db, will be filled once player chooses Archetype
	this.availableCards = [] // populated once a new battle is started
	this.hand = [] // updated with getRandomCards using this.deck

	//this.xp = obj.xp || 0  // amount of experience total the player has (need to create login thresholds)
	//this.maxXP = obj.maxXP || 100  // max amount of xp you can obtain. When xp exceeds, you level up
	//this.level = obj.level|| 1  // current level of player

	this.health = obj.health || 500 // this is only modified in the battlefield. Resets to max once battle is over
	this.maxHealth = obj.maxHealth|| 500 
	this.strength = obj.strength || 1.0   // as you level, strength increases to add damage to a card. Must be 1.X no greater than 2
	this.resistance = obj.resistance || 0  // everyone starts with 0% resist, but the more you have is a value less than or equal to 1.0
	// (Which would be 100% resistance)
	this.energy = obj.energy || 0 // only changes during the game
	this.maxEnergy = obj.maxEnergy|| 5 

	this.critBoost= obj.critBoost|| 1.5  // amount that is multiplied to the damage of a card (but before boosts are applied)
	this.critChance = obj.critChance|| 0  // percent chance that a critical occurs
	
	this.boosts = [] // only populated during battle to boost spell on top of your strength, 
	// boost is a raw number and is converted to a percentage (35 turns into 1.35, for example, to be multiplied to damage)
	//this.status = 'offline' // 3 different values only: offline, online, busy
	this.xpThreshold = [
	100,// Lvl 1
	300,// 2
	650,// 3
	1000,// 4
	1600,// 5 New spell(s) unlocked?
	2400,// 6
	3450,// 7
	4300,// 8
	5500,// 9
	7000// 10 (MAX) New spell(s) unlocked?
	]  
}
getRandomCards() {
	// 'Deck is the selection of cards available to a player at a certain level'
	// Deck will be retrieved from DB
	let cardHand = []
	// 
	this.deck.forEach(card => this.availableCards.push(card))
	let handLimit = 7
	//find random card from the deck and add it to hand
	for (let i = 0; i < handLimit; i++){
		let randomIndex = Math.floor(Math.random() * this.availableCards.length)
		let randomCard = this.availableCards[randomIndex]
		cardHand.push(randomCard)
		this.availableCards.splice(randomIndex, 1)
	}
	this.hand = cardHand
}
removeHealth(damagePoints) {
	// Removes health based off the incoming damage points.
	window.alert(`Initial damage: ${damagePoints}`)
	if (this.resistance){
	damagePoints *= this.resistance
	window.alert(`${this.name}'s resistance reduced the damage to ${damagePoints}`)
	this.health -= damagePoints
	} else {
	this.health -= damagePoints
	}
}
addHealth(val){
	// adds health based on incoming heal points.
	if (val + this.health > this.maxHealth){ // ensures health doesn't go over max health
	this.health = this.maxHealth
	window.alert(`Health added: ${this.name}'s health is now: ${this.health}`)
	} else {
	this.health += val
	window.alert(`Health added: ${this.name}'s health is now: ${this.health}`)
	}
}
addBoost(type, val){
	// adds object to boosts array that contains the boost type and percentage/val increase(or decrease)
	// val MUST be a float beginning with 1.XX (xx being the % increase)
	this.boosts.push({type, val})
}
increaseDamage(val){
	let add = 0 // amt added to the dmg in the end
	// takes into account all boosts and strength before attacking the enemy
	val *= this.strength 
	window.alert(`${this.name}'s base strength increased damage output to ${val}`)
	this.boosts.forEach(boost => {
	if (boost.type =='damage'){
		add *= boost.val
		window.alert(`+${boost.val}%`)
	}
	})
	return (val+add)
}
xpHandler(val){
	// val = xp being added
	// If you are max level, you do not gain xp.
	if (this.level == this.xpThreshold.length){
		val = 0
		this.xp = 0
		this.messages.push({type: 'max-level', message: 'You are max level!'})
	}
	this.xp += val
	// if xp exceeds max xp for your level, you level up (message object created for popups)
	if (this.xp >= this.maxXP){
		this.xp = this.xp - this.maxXP
		// excess xp is returned to player, and max xp increases
		this.level = this.xpThreshold.indexOf(this.maxXP) + 2
		this.maxXP = this.xpThreshold[this.xpThreshold.indexOf(this.maxXP) + 1]
		if (!this.maxXP){
			this.level = this.xpThreshold.indexOf(this.xpThreshold[this.xpThreshold.length-1]) + 1
			this.maxXP = this.xpThreshold[this.xpThreshold.length-1]
		}
	}
}
}
class App extends React.Component {
	state = {
		player1: {},
		player2: {},
		status: 'new'
	}
	initializePLayers =	(playerOne, playerTwo) => {
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
		this.setState = {
			player1: new Player({name: playerOne.name, playerArchetype: playerOne.playerArchetype, health: playerOne.health}),
			player2: new Player({name: playerTwo.name, playerArchetype: playerTwo.playerArchetype, health: playerTwo.health})
		}
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



				<HandCard />
				</div>

			) }
		}


export default App
