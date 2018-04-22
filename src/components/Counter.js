import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  
    constructor(){
      super();
      this.state = {timeDisplay: {seconds: 0, minutes: 0}}
    }

    static propTypes = {
      fromNum: PropTypes.number.isRequired,
      toNum: PropTypes.number.isRequired,
    }
  
    getInitialState() {
      return {
        timeDisplay: {
          minutes: 0,
          seconds: 0
        }
      }
    }


    _minTwoDigits(n) {
      return (n < 10 ? '0' : '') + n;
    };
    _runTimer(){
      const { fromNum, toNum} = this.props;
      let actualNum = fromNum;
      let timer = setInterval(() => {
        if(actualNum>toNum){
          actualNum--;
          let minutes = this._minTwoDigits(Math.floor(actualNum / 60));
          let seconds = this._minTwoDigits(actualNum%60);
          console.log(timeDisplay);
          this.setState({
            timeDisplay: {
              minutes: minutes,
              seconds: seconds
            }
          });
          console.log(`${this.timeDisplay.minutes}:${this.timeDisplay.seconds}`);
        }
      }, 1000);
    }

    render() {
      this.getInitialState();

      this._runTimer();

      return (
        <div>
          <h3>{this.state.timeDisplay.minutes}:{this.state.timeDisplay.seconds}</h3>
        </div>
      );
    }

  }
  
  export default Counter;