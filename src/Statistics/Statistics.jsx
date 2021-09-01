import Notification from '../Notification/Notification';
import { Container } from './Statistics.styled';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return countTotalFeedback !== 0 ? (
    <Container>
      <ul>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
      </ul>

      <ul>
        <li>
          <span>Total: {countTotalFeedback}</span>
        </li>
        <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
      </ul>
    </Container>
  ) : (
    <Notification message="No feedback given" />
  );
}

export default Statistics;
