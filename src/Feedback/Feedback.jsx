import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Section from '../Section/Section.jsx';
// import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = ({ option }) => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.bad + this.state.good + this.state.neutral;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const positivePercent = Math.round(
      (positiveFeedback / this.countTotalFeedback()) * 100,
    );
    return positivePercent;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={this.state}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;

// handleGood = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };

// handleNeutral = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };
// handleBad = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };

// onHandleGood={this.handleGood}
// onHandleNeutral={this.handleNeutral}
// onHandleBad={this.handleBad}
