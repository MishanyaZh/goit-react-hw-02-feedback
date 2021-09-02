import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: ${props => (props.eventType >= '50' ? '#63f163' : '#fc7e68')};
  &:hover {
    box-shadow: 1px 1px 11px 1px #062afa;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition-duration: 1s;
  &:hover {
    transform: scale(1.3);
    transition: 1s;
  }
`;
