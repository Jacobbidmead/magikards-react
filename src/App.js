import React from 'react'

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
          <div className="card">
            <div
              className="card-img-top ice-img ice"
              style={{backgroundImage: "url('images/iceknight.png')"}}
            ></div>
            <div className="card-body ice">
              <h5 className="card-title text-center">Frost Warrior</h5>
              <p className="card-text text-center">
                <em>
                  A cold wind sweeps over the battle field and damages whoever
                  it touches
                </em>
              </p>
              <p className="card-text text-center atributes">
                Damage 80<span class="fist-icon"
                  ><i className="fa-sharp fa-solid fa-hand-fist ice"></i
                ></span>
              </p>
            </div>
          </div>

          <div className="card">
            <div
              className="card-img-top fire-img fire"
              style={{backgroundImage: "url('images/iceknight.png')"}}
            ></div>
            <div className="card-body fire">
              <h5 className="card-title text-center">Fire Mage</h5>
              <p className="card-text text-center">
                <em>
                  Fire Mage burns his enemys in the fire of eternal suffering
                </em>
              </p>
              <p className="card-text text-center atributes">
                Damage 80<span className="fist-icon"
                  ><i className="fa-sharp fa-solid fa-hand-fist fire"></i
                ></span>
              </p>
            </div>
          </div>
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


      <section className="hand-section">
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
        <div className="hand">
          <img className="card-img-top" src="" />
        </div>
      </section>
    </div>

	)
 }
}

export default App
