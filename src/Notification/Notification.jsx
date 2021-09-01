import css from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={css.messageNotification}>{message}</p>
);

export default Notification;
