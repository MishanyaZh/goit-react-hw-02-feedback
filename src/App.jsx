// import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
// import Statistics from './Statistics/Statistics.jsx';
import Feedback from './Feedback/Feedback';

import css from './App.module.css';

function App() {
  return (
    <div className={css.appContainer}>
      <Feedback />
      {/* <div><FeedbackOptions /></div> */}
      {/* <div><Statistics /></div> */}
    </div>
  );
}

export default App;
