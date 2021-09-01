import css from './FeedbackOptions.module.css';

function FeedbackOptions({
  onHandleGood,
  onHandleNeutral,
  onHandleBad,
  title,
}) {
  return (
    <div className={css.containerF}>
      {/* <span className={css.titleF}>{title}</span> */}
      <ul className={css.listF}>
        <li>
          <button type="button" onClick={onHandleGood}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={onHandleNeutral}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={onHandleBad}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FeedbackOptions;
