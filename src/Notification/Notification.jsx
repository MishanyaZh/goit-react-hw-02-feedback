import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={css.messageNotification}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
