import css from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={css.containerF}>
      <ul className={css.listF}>
        {Object.keys(options).map(option => (
          <li key={option}>
            <button type="button" onClick={() => onLeaveFeedback({ option })}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackOptions;

// <li>
//   <button type="button" onClick={onHandleGood}>
//     Good
//   </button>
// </li>
// <li>
//   <button type="button" onClick={onHandleNeutral}>
//     Neutral
//   </button>
// </li>
// <li>
//   <button type="button" onClick={onHandleBad}>
//     Bad
//   </button>
// </li>
// onHandleGood,
// onHandleNeutral,
// onHandleBad,
