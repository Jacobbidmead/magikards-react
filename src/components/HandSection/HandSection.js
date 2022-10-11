import React from 'react'
import HandCard from '../HandCard/HandCard'

class HandSection extends React.Component {
    state = {
        displayCards: false,
        messages: [],
        messagesToDisplay: []
    }

    switch = () => {
        if (this.state.displayCards == false){
            this.setState({
                displayCards: true
            })
        } else {
            this.setState({
                displayCards: false
            })
        }
    }
    resetMessages = () => {
        this.setState({
            messages: undefined
        })
    }

    displayResults = () => {
        // this function displays the results of each card while taking/restoring health of each player if applicable.
        // first, display the results of player 1's card (use the methods of player to display)
        this.resetMessages()
        let newMessages = []
        newMessages.push(`${this.props.player1.name} used ${this.props.selectedCard.title}`)
        this.props.selectedCard.effects.forEach(effect => {
            // 3 different types are damage, atkboost, and defense
            if (effect.type === 'damage'){
                let self = this.props.player1.increaseDamage(effect.value)
                self.forEach(msg => {
                    newMessages.push(msg)
                })
            } else if (effect.type === 'atkboost'){
                this.props.player1.addBoost(effect)
                newMessages.push('Adding attack boost')
            }
        })
        this.setState({
            messages: newMessages
        })
    }
    showCards = (player) => {
        if (player === 'player1'){
            if (this.props.player1.hand.length < 1){
                this.props.player1.getRandomCards()
            }
            return this.props.turn === 'player1' && this.props.player1.hand.map((card, key) => {
                return (
                    <HandCard card={card} key={key} submitCard={this.props.submitCard} playerTurn='player1' player={this.props.player1} switch={this.switch}/>
                )
            })
        
        } else if (player == 'player2'){
            if (this.props.player2.hand.length < 1){
                this.props.player2.getRandomCards()
            }
            return this.props.turn === 'player2' && this.props.player2.hand.map((card, key) => {
                return (
                    <HandCard displayResults={this.displayResults} card={card} key={key} submitCard={this.props.submitCard} playerTurn='player2' player={this.props.player2} switch={this.switch}/>
                )
            })
        }
    }
    switchAndSubmit = () => {
		this.props.submitCard('new-round')
		this.switch()
	}
    render(){
        return(
            <>
                {this.state.displayCards == true && 
                    <div className='options-for-hand new-choice'>
                        <div>Round {this.props.round}</div>
                        <div className='button'>Pass</div>
                    </div>}
                <footer className="hand-section">
                    {(this.props.turn === 'player1' && this.state.displayCards == true) ? this.showCards('player1'):
                    (this.props.turn === 'player1' && this.state.displayCards === false) ? 
                    <div className='new-choice'>
                        <div>{this.props.player1.name}</div>
                        <div>Your turn!</div>
                        <div className='button' onClick={e => this.switch()}>Ready</div>
                    </div> : null}
                    {(this.props.turn === 'player2' && this.state.displayCards === true) ? this.showCards('player2'): 
                    (this.props.turn === 'player2' && this.state.displayCards === false) ?
                    <div className='new-choice'>
                        <div>{this.props.player2.name}</div>
                        <div>Your turn!</div>
                        <div className='button' onClick={e => this.switch()}>Ready</div>
                    </div> : null}
                    {(this.props.turn === 'new-round') && <div className='new-choice'>{this.state.messages.map(m => <div>{m}</div>)}<div className='button' onClick={e => this.switchAndSubmit()}>Next Round</div></div>}
                </footer>
            </>
        )
    }
}

export default HandSection