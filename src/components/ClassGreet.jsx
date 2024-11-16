import React, { Component } from 'react';

class ClassGreet extends Component {
  constructor() {
    super();
    this.state = { message: "Hello" };
  }

  toggleMessage = () => {
    this.setState({ message: this.state.message === "Hello" ? "Goodbye" : "Hello" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message} from a Class-Based Component!</h1>
        <button onClick={this.toggleMessage}>Toggle Message</button>
      </div>
    );
  }
}

export default ClassGreet;
