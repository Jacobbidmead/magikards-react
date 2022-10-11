import React from 'react'
import './info-card.css'


class InfoCard extends React.Component {

render() {
	return (
		<div className="info-card">
      <div className="info-card-body">
        <h1 className="info-card-title text head">
          Welcome to MagiKards!
        </h1>
        <h4 className="info-card-title text head">
          The battling fantasy card game
        </h4>

        <h3 className="text choose">Choose from Fire or Ice, and defeat your enemy</h3>

        <div className="text text-font">
          You receive seven random cards in your hand and choose correctly to
          deal the most damage, or recieve the least damage possible.
        </div>
        <div className="text text-font">
          Once you've used up all the cards in your hand, you will be dealt a
          fresh hand of seven cards. You can discard cards you don't like.
        </div>
        <div className="text text-font">
          But beware! energy points with a cost of between one and three are
          needed to play a card - if you use up all your energy early you may
          not be able to play and you'll miss a round, giving your enemy the
          advantage.
        </div>
        <div className="text">
          <ul className="info-card-list text-font">
            <li className="text-font">
              Fire cards deal more damage, Ice cards have a greater defense
            </li>
            <li className="text-font">There are three card types, damage, defense and boost</li>
            <li className="text-font">
              Boost cards add an extra percentage to damage or defense, or
              sometimes both!
            </li>
          </ul>
          <h3 className="text head">
            This is a battle to the death, first player to take 100% of their
            opponent's health wins!
          </h3>
        </div>
      </div>
    </div>
	)
}
}

export default InfoCard
