import React from 'react'
import HandCard from '../HandCard/HandCard'

class HandSection extends React.Component {
    state = {
        displayCards: false
    }

    showCards = (player) => {

        if (player === 'player1'){
            if (this.props.player1.hand.length < 1){
                console.log('getting cards')
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
                    <HandCard card={card} key={key} submitCard={this.props.submitCard} playerTurn='player2' player={this.props.player2} switch={this.switch}/>
                )
            })
        }
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
    render(){
        return(
            <>
                <footer className="hand-section">
                    {(this.props.turn === 'player1' && this.state.displayCards == true) ? this.showCards('player1'):
                    (this.props.turn === 'player1' && this.state.displayCards === false) ? 
                    <div className='new-choice'>
                        <div>{this.props.player1.name}</div>
                        <div>Your turn!</div>
                        <div className='button' onClick={e => this.switch()}>Ready</div>
                    </div> : null}
                    {(this.props.turn === 'player2' && this.state.displayCards == true) ? this.showCards('player2'): 
                    (this.props.turn === 'player2' && this.state.displayCards == false) ?
                    <div className='new-choice'>
                        <div>{this.props.player2.name}</div>
                        <div>Your turn!</div>
                        <div className='button' onClick={e => this.switch()}>Ready</div>
                    </div> : null}
                    
                </footer>
            </>
        )
    }
}

export default HandSection