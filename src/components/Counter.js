import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {

    static propTypes = {
      fromNum: PropTypes.number.isRequired,
      toNum: PropTypes.number.isRequired,
    }

    state = {
      timeDisplay: {s: 0, m: 0}, 
      seconds: 0, 
      timer: '', 
      timerEnded: false,
      timerStopped: false,
      timerStarted: true
    }

    componentDidMount() {
      this.state.seconds = this.props.fromNum;
      window.addEventListener('load', this._runTimer());
      //let timeLeft = this._secondsToTime(this.state.seconds);
      //this.setState({ timeDisplay: timeLeft });
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
      let self = this;
      const {toNum} = self.props;
      let timerId = setInterval(() => {
        console.log(self.state.seconds);
        if(self.state.seconds>toNum){
          let seconds = self.state.seconds - 1;
          self.setState({
            timeDisplay: self._secondsToTime(seconds),
            seconds: seconds,
          });  
        }
        else{
				  self._handleTimerEnd();
        } 
      }, 1000);
      self.setState({
        timer: timerId
      });  
    }

    _handleTimerEnd(){
      console.log('Timer Ended');
      clearInterval(this.state.timer);
      this.setState({
        timerEnded: true,
        timerStarted: false,
        timerStopped: false
      })
    }

    _handleTimerStopStart = event => {
      if(this.state.timerStopped){
        console.log('Timer Started');
        this.setState({
          timerEnded: false,
          timerStarted: true,
          timerStopped: false
        })
        this._runTimer();
      }
      else if(this.state.timerStarted){
        console.log('Timer Stopped');
        this.setState({
          timerEnded: false,
          timerStarted: false,
          timerStopped: true
        })
        clearInterval(this.state.timer);
      }
    }

    render() {
      const {m, s} = this.state.timeDisplay;
      return (
        <div>
          <h3 >{this.state.timeDisplay.m}:{this.state.timeDisplay.s}</h3>
          <button onClick={this._handleTimerStopStart}>Stop/Start</button>
        </div>
      );
    }
  }
  
  export default Counter;