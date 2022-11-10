// import React, { Component } from "react";

// export default class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       // return <Error />
//       return <h1>Something wrong!!!</h1>;
//     }

//     return this.props.children;
//   }
// }

import React from "react";

const ErrorBoundary = () => {
    return (
        <div>
            <h1>Something wrong!!!</h1>
        </div>
    );
};

export default ErrorBoundary;
