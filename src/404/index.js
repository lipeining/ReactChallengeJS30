import React, { Component } from "react";
import * as R from "ramda";

class NotFound extends Component {
  constructor() {
    super();
  }
  render() {
    const arr = R.map(R.identity, [1, 2, 3]);
    console.log(arr);
    return (
      <div>
        <h3>
          No match for <code>{this.props.location.pathname}</code>
        </h3>
        <p>{arr.toString()}</p>
      </div>
    );
  }
}
// const NotFound = ({ location }) => (
//     <div>
//       <h3>
//         No match for <code>{location.pathname}</code>
//       </h3>
//     </div>
//   );

export default NotFound;
