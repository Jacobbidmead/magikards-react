import {cardsData} from './cardsData'
class Player {
    constructor(obj){
      // values that are commented out are for if we expand it into a multiplayer game
      this.name = obj.name
      //this.sessions = obj.sessions|| []  // lists all games they've played as well as all the xp gained, who won, date/time
      //this.messages = obj.messages || []  // Battle Requests or System Notifications (such as level up)
      // A message is an obj containing 'Type’ variable (System or Battle), 'Message’ variable (String of the message)
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
      // boost is a float number and is converted to a percentage (1.35 is 35%, for example, to be multiplied to damage)
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
    setDeck(){
      // if player is fire, cards are all fire. if player is ice, cards should all be ice.
      let cards = this.playerArchetype === 'fire' ? cardsData.filter(card => card.archetype === 'fire') : cardsData.filter(card => card.archetype === 'ice')
      // filter by energy (rank)
      let rank_0 = {arr: cards.filter(card => card.energy === 0), max: 8}
      let rank_1 = {arr: cards.filter(card => card.energy === 1), max: 8}
      let rank_2 = {arr: cards.filter(card => card.energy === 2), max: 7}
      let rank_3 = {arr: cards.filter(card => card.energy === 3), max: 5}
      // Players deck becomes: rank 0 max 6 cards, rank 1 max 6 cards, rank 2 max 5 cards, rank 3 max 4 cards, rank 4 max 3)
      // Select random cards from each rank obj's arr until they have the max
      cards = [rank_0, rank_1, rank_2, rank_3]
      cards.forEach(rank => {
        for (let i = 0; i < rank.max; i++){
          let randomCard = Math.floor(Math.random() * rank.arr.length)
          this.deck.push(rank.arr[randomCard])
        }
      })
      
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
      if (this.hand.length === 0){
        this.hand = cardHand
      } else {
        return null
      }
      
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
        if (boost.type =='damage') {
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

  export default Player