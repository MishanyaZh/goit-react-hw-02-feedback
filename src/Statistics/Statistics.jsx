import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Container, List } from './Statistics.styled';

function Statistics(props) {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = props;
  return (
    <Container eventType={countPositiveFeedbackPercentage}>
      {!countTotalFeedback && <Notification message="No feedback given" />}

      {countTotalFeedback > 0 && (
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
          <li>
            <span>Total: {countTotalFeedback}</span>
          </li>
          <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
        </List>
      )}
    </Container>
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
