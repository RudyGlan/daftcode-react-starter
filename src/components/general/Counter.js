import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {

    static propTypes = {
      date: PropTypes.object.isRequired,
    }

    state = {
      timeDisplay: {s: 0, m: 0, h:0, d:0}, 
      nowDate: new Date(),
      seconds: 0, 
      timer: '', 
      timerEnded: false,
      toNum: 0,
      word: '',
    }

    componentDidMount() {
      this.setState({
        nowDate: Date.now(),
      })
      window.addEventListener('load', this._runTimer());
    }

    componentWillUnmount() {
      clearInterval(this.state.timer);
      this.setState({
        timerEnded: true,
      })
    }

    _secondsToTime(sec){
      let days = Math.floor(sec / (60 * 60 * 24));
      let hours =  this._minTwoDigits(Math.floor((sec%(60 * 60 * 24))/ (60 * 60)))
      let minutes = this._minTwoDigits(Math.floor((sec%(60 * 60))/ 60));
      let seconds = this._minTwoDigits(sec%60);
      let obj = {
        "d": days,
        "h": hours,
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
      let {nowDate} = self.state;
      const {date} = self.props;
      let diff = Math.floor((date - nowDate)/1000);
      this.setState({
        seconds: diff
      });
      let timerId = setInterval(() => {
        if(diff>0){
          let seconds = self.state.seconds - 1;
          self.setState({
            timeDisplay: self._secondsToTime(seconds),
            seconds: seconds,
            word: 'to'
          });  
        } else {
          let seconds = Math.abs(self.state.seconds - 1);
          self.setState({
            timeDisplay: self._secondsToTime(seconds),
            seconds: seconds,
            word: 'from'
          })
        }
        // } else {
				//   self._handleTimerEnd();
        // } 
      }, 1000);
      self.setState({
        timer: timerId
      });  
    }

    // _handleTimerEnd(){
    //   console.log('Timer Ended');
    //   clearInterval(this.state.timer);
    //   this.setState({
    //     timerEnded: true,
    //   })
    // }

    render() {
      const {d, h, m, s} = this.state.timeDisplay;
      const {word} = this.state;
      return (
        <div className="flight__highlight-countdown">{`${d} days ${h} hrs ${m} mins ${s} sec ${word} start`}</div>
      );
    }
  }
  
  export default Counter;