import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  

    static propTypes = {
      fromNum: PropTypes.number.isRequired,
      toNum: PropTypes.number.isRequired,
    }

    constructor(){
      super();
      this.state = {timeDisplay: {s: 0, m: 0}, seconds:10}
    }

    componentDidMount() {
      let timeLeft = this._secondsToTime(this.state.seconds);
      this.setState({ timeDisplay: timeLeft });
    }
    _secondsToTime(sec){
      let minutes = this._minTwoDigits(Math.floor(sec / 60));
      let seconds = this._minTwoDigits(sec%60);
      let obj = {
        "m": minutes,
        "s": seconds
      }
      return obj;

    }

    _minTwoDigits(n) {
      return (n < 10 ? '0' : '') + n;
    };
    _runTimer(){
      const { fromNum, toNum} = this.props;
      let timer = setInterval(() => {
        if(this.state.seconds>toNum){
          let seconds = this.state.seconds - 1;
          this.setState({
            timeDisplay: this._secondsToTime(seconds),
            seconds: seconds,
          });    
          console.log(this.state.timeDisplay);
          console.log(`${this.state.timeDisplay.m}:${this.state.timeDisplay.s}`);
        }
      }, 1000);
    }

    render() {

      this._runTimer();

      return (
        <div>
          <h3>{this.state.timeDisplay.m}:{this.state.timeDisplay.s}</h3>
        </div>
      );
    }

  }
  
  export default Counter;