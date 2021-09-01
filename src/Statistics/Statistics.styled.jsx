import styled from '@emotion/styled';

export const Container = styled.div`
  background: ${props => (props.eventType >= '50' ? '#63f163' : '#fc7e68')};
`;
