import React from 'react'
import Card from './components/Card/Card.js'
import Hand from './components/Hand/Hand.js'
import Health from './components/Health/Health.js'

class App extends React.Component {




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



{/*
	<Card backgroundImage={} title={} description={} />
// */}
          <Card archetype="fire"/>
        </div>

        <Health />
      </div>


      <Hand />
    </div>

	)
 }
}

export default App
