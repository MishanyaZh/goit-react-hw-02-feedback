import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  background: ${props =>
    props.eventType >= '50'
      ? 'rgb(157 255 157 / 53%)'
      : 'rgb(240 140 122 / 54%)'};
  box-shadow: 1px 1px 11px 1px #797a7c;
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
    transition: 0.5s;
  }
`;
