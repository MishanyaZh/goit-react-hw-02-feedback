import PropTypes from 'prop-types';
import { Box, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Box>
    <Title>{title}</Title>
    {children}
  </Box>
);

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
