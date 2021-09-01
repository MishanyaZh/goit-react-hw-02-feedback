import css from './FeedbackOptions.module.css';

function FeedbackOptions() {
  return (
    <div className={css.container}>
      <span className={css.title}>Please leave feedback</span>
      <ul className={css.list}>
        <li>
          <button type="button">Good</button>
        </li>
        <li>
          <button type="button">Neutral</button>
        </li>
        <li>
          <button type="button">Bad</button>
        </li>
      </ul>
    </div>
  );
}

export default FeedbackOptions;
