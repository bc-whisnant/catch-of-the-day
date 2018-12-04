import React  from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  // method that update state and state live in same component
  addFish = fish => {
    // 1. take copy of existing state - never want to reach into state and modify it directly
    // using object spread
    const fishes = {...this.state.fishes}
    // 2. add new fish
    fishes[`fish${Date.now}`] = fish;
    // 3. set new fishes object to state
    this.setState({
      // property and value are the same so you only need one fishes
      fishes
    });
    
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
          {/* how to get the object from state and then use props to pass to fish.js - the details attr is the prop*/}
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        {/* passing state to inventory component using props */}
        <Inventory addFish={this.addFish} loadSampleFishes = {this.loadSampleFishes} />
        
      </div>
    )
  }
}


export default App;