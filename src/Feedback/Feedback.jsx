import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import Section from '../Section/Section.jsx';
import { MainContainer } from './Feedback.styled.jsx';

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
      <MainContainer>
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
      </MainContainer>
    );
  }
}

export default Feedback;
