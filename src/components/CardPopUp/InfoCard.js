import React from 'react'
import './info-card.css'


class InfoCard extends React.Component {

render() {
	return (
		<div className="info-card">
      <div className="info-card-body">
        <h1 className="info-card-title">
          Welcome to MagiKards! The battling fantasy card game
        </h1>

        <h3>Choose from Fire and Ice, and defeat youre enemy</h3>

        <div className="text">
          Receive seven random cards in your hand and choose the correctly to
          deal the most damage, or recieve the least damage possible.
        </div>
        <div className="text">
          Once youve used up all the cards in youre hand, you will be dealt a
          fresh hand.
        </div>
        <div className="text">
          But beware! energy points with a cost of between one and three are
          needed to play a card - if you use up all youre energy early you may
          not be able to play and you'll miss a round, giving youre enemy the
          advantage.
        </div>
        <div className="text">
          <ul className="info-card-list">
            <li>
              Fire cards deal more damage, Ice cards have a greater defence
            </li>
            <li>There are three card types, damage, defence and boost</li>
            <li>
              Boost cards add an extra percentage to damage or defence, or
              sometimes both
            </li>
          </ul>
          <h3>
            This is a battle to the death, first player to take 100% of their
            opponuts health wins!
          </h3>
        </div>
      </div>
    </div>
	)
}
}

export default InfoCard
