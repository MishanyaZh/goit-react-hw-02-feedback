import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled.jsx';

const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
