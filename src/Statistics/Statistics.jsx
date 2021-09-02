import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Container, List } from './Statistics.styled';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return countTotalFeedback !== 0 ? (
    <Container eventType={countPositiveFeedbackPercentage}>
      <List>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
      </List>

      <List>
        <li>
          <span>Total: {countTotalFeedback}</span>
        </li>
        <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
      </List>
    </Container>
  ) : (
    <Notification message="No feedback given" />
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
