import React from 'react'
import HandCard from '../HandCard/HandCard'

class HandSection extends React.Component {
    state = {
        player1: this.props.player1,
        player2: this.props.player2,
        p1chose: false,
        p2chose: false
    }
    render(){
        return(
            <>
                <footer className="hand-section">
                    {this.props.turn === 'player1' && this.props.player1.getRandomCards()}
                    {this.props.turn === 'player1' && this.props.player1.hand.map((card, key) => {
                            return (
                                <HandCard card={card} id={key} submitCard={this.props.submitCard} playerTurn='player1' player={this.props.player1}/>
                            )
                        })}
                    {this.props.turn === 'player2' && this.props.player2.getRandomCards()}
                    {this.props.turn === 'player2' && this.props.player2.hand.map((card, key) => {
                            return (
                                <HandCard card={card} id={key} submitCard={this.props.submitCard} playerTurn='player2' player={this.props.player2}/>
                            )
                        })}
                </footer>
            </>
        )
    }
}

export default HandSection