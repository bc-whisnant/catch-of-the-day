import React, { Component } from 'react';

// this is using a stateless functional component with implicit return
// you can use this if there is no dynamic data being passed to the component
const Header = (props) => (
    <header className="top">
          <h1>
            Catch 
              <span className="ofThe">
                <span className="of">of</span> 
                <span className="the">the</span> 
              </span> 
            Day
          </h1>
          <h3 className="tagline">
            <span>{props.tagline}</span>
          </h3>
    </header>
    
);

// this is using a class
// class Header extends Component {
//   render() {
//     return (
//         <header className="top">
//           <h1>
//             Catch 
//               <span className="ofThe">
//                 <span className="of">of</span> 
//                 <span className="the">the</span> 
//               </span> 
//             Day
//           </h1>
//           <h3 className="tagline">
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//     );
//   }
// }

export default Header;