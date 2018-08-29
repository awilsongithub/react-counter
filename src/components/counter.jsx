// need React for React.createElement
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning": "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // destructuring
    const jsxExpression = <span>Zero</span>;
    return count === 0 ? jsxExpression : count;
  }
}

export default Counter;
