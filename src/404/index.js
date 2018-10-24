import React, { Component } from 'react';


class NotFound extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h3>
                    No match for <code>{this.props.location.pathname}</code>
                </h3>
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