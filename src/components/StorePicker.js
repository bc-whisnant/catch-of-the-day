import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  // this will allow us to bind the value of this correctly
  // if you need to access this in custom method you must do this or use constructor
  goToStore = (event) => {
    // stops form from submitting
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.value.value;
    // change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);

    
  }
  
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
          type="text"
          ref={this.myInput}
          required placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
