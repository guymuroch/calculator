import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: ["AC", "+/-", "%", "/"],
      numbers1: ["7", "8", "9", "*"],
      numbers2: ["4", "5", "6", "-"],
      numbers3: ["1", "2", "3", "+"],
      numbers4: ["0", ".", "="],
      calculator: { value: "", temporaryValue: "", operator: "" }
    };
  }
  changeScore = e => {
    let digit = e.target.value;
    let change = this.state.calculator;
    if (digit === "AC") {
      change.operator = "";
      change.temporaryValue = "";
      change.value = "";
      this.setState({
        calculator: change
      });
    }
    if (digit === "=") {
      if (change.temporaryValue === "") {
        change.temporaryValue = change.value;
      }
      change.temporaryValue = `${eval(
        `${change.value}${change.operator}${change.temporaryValue}`
      )}`;
      change.value = "";
      change.operator = "";
      this.setState({
        calculator: change
      });
    }
    if (
      digit === "*" ||
      digit === "+" ||
      digit === "-" ||
      digit === "/" ||
      digit === "%"
    ) {
      change.operator = digit;
      change.value = change.temporaryValue;
      change.temporaryValue = "";
      this.setState({
        calculator: change
      });
    }
    let numbersArray = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let answer = numbersArray.indexOf(digit);
    if (answer != -1) {
      change.temporaryValue += digit;
      this.setState({
        calculator: change
      });
    }
    if (digit === "+/-") {
      if (change.temporaryValue[0] === "-") {
        console.log("works");
        change.temporaryValue = change.temporaryValue.replace("-", "");
      } else {
        change.temporaryValue = "-" + change.temporaryValue;
      }
      this.setState({
        calculator: change
      });
    }
  };
  render() {
    console.log(this.state.calculator);
    return (
      <div className="App">
        <div className="calculator">
          <div className="screen">
            <h2>{this.state.calculator.temporaryValue}</h2>
          </div>
          <div className="digits">
            {this.state.numbers.map((digit, index) => {
              if (digit === "/") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "orange" }}
                    className="digit"
                    key={index}
                  />
                );
              } else {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "rgb(196, 182, 182)" }}
                    className="digit"
                    key={index}
                  />
                );
              }
            })}
            {this.state.numbers1.map((digit, index) => {
              if (digit === "*") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "orange" }}
                    className="digit"
                    key={index}
                  />
                );
              } else {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    className="digit"
                    key={index}
                  />
                );
              }
            })}
            {this.state.numbers2.map((digit, index) => {
              if (digit === "-") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "orange" }}
                    className="digit"
                    key={index}
                  />
                );
              } else {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    className="digit"
                    key={index}
                  />
                );
              }
            })}
            {this.state.numbers3.map((digit, index) => {
              if (digit === "+") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "orange" }}
                    className="digit"
                    key={index}
                  />
                );
              } else {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    className="digit"
                    key={index}
                  />
                );
              }
            })}
            {this.state.numbers4.map((digit, index) => {
              if (digit === "0") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ width: "47%", borderRadius: "40px" }}
                    className="digit"
                    key={index}
                  />
                );
              }
              if (digit === "=") {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    style={{ backgroundColor: "orange" }}
                    className="digit"
                    key={index}
                  />
                );
              } else {
                return (
                  <input
                    onClick={e => {
                      this.changeScore(e);
                    }}
                    type="button"
                    value={digit}
                    className="digit"
                    key={index}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
