import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {initValue: 25}

  increase = () => {
    this.setState(prevState => ({initValue: prevState.initValue + 1}))
  }

  decrease = () => {
    this.setState(prevState => ({initValue: prevState.initValue - 1}))
  }

  render() {
    const {initValue} = this.state
    return (
      <div className="mainContainer">
        <h1>Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="timer-display-container">
            <div className="timer">
              <h1>{initValue}: 00</h1>
              <p>Running</p>
            </div>
          </div>
          <div className="allController">
            <div className="pannelController">
              <div className="startPause">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                  className="imageIcon"
                />
                <p className="para">Start</p>
              </div>
              <div className="startPause">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="play icon"
                  className="imageIcon"
                />
                <p className="para">Reset</p>
              </div>
            </div>
            <div className="timeParentContainer">
              <p>Set Timer Limit</p>
              <div className="timerLimitContainer">
                <button onClick={this.decrease} type="button">
                  -
                </button>
                <div className="increase">
                  <p>{initValue}</p>
                </div>
                <button onClick={this.increase} type="button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
