import React, { Component } from "react";
import "./App.css";
import Digit from "./Digit";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [
        "AC",
        "+/-",
        "%",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "0",
        ".",
        "="
      ],
      calculator: { value: "", temporaryValue: "", operator: "" }
    };
  }
  resetVar = () => {
    let restCalculator = this.state.calculator;
    restCalculator.operator = "";
    restCalculator.temporaryValue = "";
    restCalculator.value = "";
    this.setState({
      calculator: restCalculator
    });
  };
  getResult = () => {
    let calculator = this.state.calculator;
    let number1 = parseInt(calculator.value);
    let number2 = parseInt(calculator.temporaryValue);
    if (Number.isInteger(number1) && Number.isInteger(number2)) {
      calculator.temporaryValue = `${eval(
        `${calculator.value}${calculator.operator}${calculator.temporaryValue}`
      )}`;
      calculator.temporaryValue = calculator.temporaryValue.substring(0, 7);
      calculator.value = "";
      calculator.operator = "";
      this.setState({
        calculator: calculator
      });
    } else {
      calculator.value = "";
      calculator.operator = "";
      calculator.temporaryValue = "error";
      this.setState({
        calculator: calculator
      });
      setTimeout(() => {
        calculator.temporaryValue = "";
        this.setState({ calculator: calculator });
      }, 1000);
    }
  };
  changeOperator = digit => {
    let calculator = this.state.calculator;
    calculator.operator = digit;
    calculator.value = calculator.temporaryValue;
    calculator.temporaryValue = "";
    this.setState({
      calculator: calculator
    });
  };
  changeDigit = digit => {
    let calculator = this.state.calculator;
    calculator.temporaryValue += digit;
    this.setState({
      calculator: calculator
    });
  };

  eventHandler = e => {
    let digit = e;
    let change = this.state.calculator;
    if (digit === "AC") {
      this.resetVar();
    } else if (digit === "=") {
      this.getResult();
    } else if (
      digit === "*" ||
      digit === "+" ||
      digit === "-" ||
      digit === "/"
    ) {
      this.changeOperator(digit);
    } else if (digit === "%") {
      let number = parseInt(change.temporaryValue);
      if (Number.isInteger(number)) {
        change.temporaryValue = (
          parseFloat(change.temporaryValue) / 100
        ).toFixed(4);
        change.value = "";
        this.setState({
          calculator: change
        });
      } else {
        change.operator = "";
        change.temporaryValue = "error";
        this.setState({
          calculator: change
        });
        setTimeout(() => {
          change.temporaryValue = "";
          this.setState({ calculator: change });
        }, 1000);
      }
    } else if (digit === "+/-") {
      if (change.temporaryValue[0] === "-") {
        change.temporaryValue = change.temporaryValue.replace("-", "");
      } else {
        change.temporaryValue = "-" + change.temporaryValue;
      }
      this.setState({
        calculator: change
      });
    } else if (digit === ".") {
      if (change.temporaryValue.indexOf(".") != -1) {
      } else {
        this.changeDigit(digit);
      }
    } else {
      this.changeDigit(digit);
    }
  };
  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <h2>
            {this.state.calculator.temporaryValue.substring(0, 7) ||
              this.state.calculator.operator ||
              0}
          </h2>
        </div>
        <div className="digits">
          {this.state.numbers.map((digit, index) => {
            if (
              digit === "/" ||
              digit === "*" ||
              digit === "-" ||
              digit === "+" ||
              digit === "="
            ) {
              return (
                <Digit
                  color={"orange"}
                  key={index}
                  eventHandler={this.eventHandler}
                  digit={digit}
                />
              );
            } else if (digit === "0") {
              return (
                <Digit
                  key={index}
                  eventHandler={this.eventHandler}
                  digit={digit}
                  style={"47%"}
                />
              );
            } else if (digit === "AC" || digit === "+/-" || digit === "%") {
              return (
                <Digit
                  key={index}
                  eventHandler={this.eventHandler}
                  digit={digit}
                  color={"rgb(190, 182, 182)"}
                />
              );
            } else {
              return (
                <Digit
                  key={index}
                  eventHandler={this.eventHandler}
                  digit={digit}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
