import {Component} from 'react'
import './index.css'

const initialState = {
  isTimerStarted: false,
  timeElapsedInSeconds: 0,
}

class StopWatch extends Component {
  state = initialState

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({
      timeElapsedInSeconds: 0,
    })
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)

    this.setState({
      isTimerStarted: true,
    })
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)

    return minutes > 9 ? minutes : `0${minutes}`
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state

    const seconds = Math.floor(timeElapsedInSeconds % 60)

    return seconds > 9 ? seconds : `0${seconds}`
  }

  render() {
    const {isTimerStarted} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stop Watch </h1>
          <div className="timer-logo-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopWatch"
                className="timer-logo"
              />
              <h1>Timer</h1>
            </div>
            <h1>{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className=" button start-button"
                onClick={this.onClickStart}
                disabled={isTimerStarted}
              >
                Start
              </button>
              <button
                type="button"
                className=" button stop-button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className=" button reset-button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
