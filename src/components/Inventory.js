import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* passing state to add fish from inventory now using props */}
        <AddFishForm addFish={this.props.addFish}/>
        {/* passing down this function via props */}
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
        
      </div>
    );
  }
}

export default Inventory;