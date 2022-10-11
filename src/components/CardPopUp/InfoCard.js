import React from 'react'
import './info-card.css'


class InfoCard extends React.Component {

render() {
	return (
		<div className="info-card">
      <div className="info-card-body">
        <h1 className="info-card-title text head">
          Welcome to MagiKards! The battling fantasy card game
        </h1>

        <h3 className="text choose">Choose from Fire and Ice, and defeat youre enemy</h3>

        <div className="text text-font">
          Receive seven random cards in your hand and choose the correctly to
          deal the most damage, or recieve the least damage possible.
        </div>
        <div className="text text-font">
          Once youve used up all the cards in youre hand, you will be dealt a
          fresh hand.
        </div>
        <div className="text text-font">
          But beware! energy points with a cost of between one and three are
          needed to play a card - if you use up all youre energy early you may
          not be able to play and you'll miss a round, giving youre enemy the
          advantage.
        </div>
        <div className="text">
          <ul className="info-card-list text-font">
            <li className="text-font">
              Fire cards deal more damage, Ice cards have a greater defence
            </li>
            <li className="text-font">There are three card types, damage, defence and boost</li>
            <li className="text-font">
              Boost cards add an extra percentage to damage or defence, or
              sometimes both
            </li>
          </ul>
          <h3 className="text head">
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
