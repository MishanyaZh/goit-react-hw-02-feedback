import css from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div className={css.containerS}>
      {/* <span className={css.titleS}>Statistics</span> */}
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
    </div>
  );
}

export default Statistics;
