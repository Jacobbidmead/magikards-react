import React from 'react'
import Card from './components/Card/Card.js'
import Hand from './components/Hand/Hand.js'

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
        <div>
          <span>Player Name</span>
          <div className="health-bar" data-total="1000" data-value="900">
            <div className="bar">
              <div className="hit"></div>
            </div>
          </div>
        </div>

        <div className="card-table">
				<Card />



{/*
	<Card backgroundImage={} title={} description={} />
// */}
          <Card />
        </div>

        <div>
          <span>Player Name</span>
          <div className="health-bar" data-total="1000" data-value="900">
            <div className="bar">
              <div className="hit"></div>
            </div>
          </div>
        </div>
      </div>


      <Hand />
    </div>

	)
 }
}

export default App
