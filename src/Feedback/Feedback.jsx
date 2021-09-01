import { Component } from 'react';

import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      const { good } = prevState;
      return {
        good: good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const curstate = this.state.bad + this.state.good + this.state.neutral;
    return curstate;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    const curstate = this.state.bad + this.state.good + this.state.neutral;

    const proc = (positive / curstate) * 100;

    console.log(proc);
    return proc;
  };

  render() {
    return (
      <div>
        <div className={css.containerF}>
          <span className={css.titleF}>Please leave feedback</span>
          <ul className={css.listF}>
            <li>
              <button type="button" onClick={this.handleGood}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.handleNeutral}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.handleBad}>
                Bad
              </button>
            </li>
          </ul>
        </div>
        <div className={css.containerS}>
          <span className={css.titleS}>Statistics</span>
          <ul>
            <li>
              <span>Good: {this.state.good}</span>
            </li>
            <li>
              <span>Neutral: {this.state.neutral}</span>
            </li>
            <li>
              <span>Bad: {this.state.bad}</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Total: {this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;
