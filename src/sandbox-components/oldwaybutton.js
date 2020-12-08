import React, { Component } from 'react';  

export default class OldButton extends Component {
    constructor() {
      super();
      this.state = { buttonText: "Click me, please" };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(() => {
        return { buttonText: "Thanks, been clicked!" };
      });
    }
  
    render() {
      const { buttonText } = this.state;
      return <button className="btn btn-lg btn-primary" onClick={this.handleClick}>{buttonText}</button>;
    }
}
