import React, { Component } from "react";

class Digit extends Component {
  eventTrigger = () => {
    this.props.eventHandler(this.props.digit);
  };
  handleKeyPress = event => {
    let numbers = [
      "-",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "+",
      "0",
      "."
    ];
    for (let i in numbers) {
      if (numbers[i] === event.key) {
        this.props.eventHandler(event.key);
      }
    }
    if (event.key === "Enter") {
      this.props.eventHandler("=");
    }
  };
  render() {
    let digit = this.props.digit;
    let backgroundColor = this.props.color;
    let widthH = "22%";
    if (this.props.style != undefined) {
      widthH = "47%";
    }

    return (
      <input
        onClick={this.eventTrigger}
        onKeyPress={event => {
          event.preventDefault();
          this.handleKeyPress(event);
        }}
        type="button"
        value={digit}
        style={{ backgroundColor: `${backgroundColor}`, width: widthH }}
        className="digit"
      />
    );
  }
}

export default Digit;
