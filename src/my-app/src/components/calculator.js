// import reactJS
import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';
import Style from '../css/style.css';

// Create a Calculator component
class Calculator extends React.Component {
  constructor() {
    super();
    // set out default state
    this.state = {
      question: '',
      result: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {

    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.question !== '') {
          var ans = '';
          try
          {
            ans = eval(this.state.question);
          }
          catch (err)
          {
            this.setState({result: "Math Error"});
          }

          if (ans===undefined)
          {
            this.setState({result: "Math Error"});
          }
          else
          {
            this.setState({ result: ans, question: ''});
          }
          // console.log("result=" + this.state.result);
          // console.log("ans=" + ans);
          break;
        }
      }

      case 'Clear': {
        this.setState({result: '', question: ''});
        console.log("question=" + this.state.question);
        break;
      }

      // delete --> remove the last input if the input length is larger than 0
      case 'Delete': {
        var qStr = this.state.question;
        if (qStr.length > 0) {
          qStr = qStr.substr(0, qStr.length - 1);
          this.setState({question: qStr, result: ''});
          break;
        }
      }

      // Default case
      default: {
          // for every other command, update the answer in the state
          this.setState({ question: this.state.question += value})
          console.log('question=' + this.state.question);
          break;
      }
    }
  }

    render()
    {
      return (
        <div className='frame'>
          <CalculatorTitle value="Siang's Calculator"/>
          <div className="mainCalc">
            <OutputScreen question={this.state.question} result={this.state.result}/>
              <div className="button-row">
                <Button label={'Clear'} handleClick = {this.handleClick}/>
                <Button label={'Delete'} handleClick = {this.handleClick}/>
                <Button label={'.'} handleClick = {this.handleClick}/>
                <Button label={'/'} handleClick = {this.handleClick}/>
              </div>
              <div className="button-row">
                <Button label={'7'} handleClick = {this.handleClick}/>
                <Button label={'8'} handleClick = {this.handleClick}/>
                <Button label={'9'} handleClick = {this.handleClick}/>
                <Button label={'*'} handleClick = {this.handleClick}/>
              </div>
              <div className="button-row">
                <Button label={'4'} handleClick = {this.handleClick}/>
                <Button label={'5'} handleClick = {this.handleClick}/>
                <Button label={'6'} handleClick = {this.handleClick}/>
                <Button label={'-'} handleClick = {this.handleClick}/>
              </div>
              <div>
                <Button label={'1'} handleClick = {this.handleClick}/>
                <Button label={'2'} handleClick = {this.handleClick}/>
                <Button label={'3'} handleClick = {this.handleClick}/>
                <Button label={'+'} handleClick = {this.handleClick}/>
              </div>
              <div>
                <Button className='wider' label={'0'} handleClick = {this.handleClick}/>
                <Button label={'='} handleClick = {this.handleClick}/>
              </div>

          </div>
        </div>
      );
    }

}

export default Calculator;
