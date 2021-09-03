import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  list-style: none;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 11px 1px #797a7c;

  &:active {
    transform: scale(1.1);
    background: #aafcea;
    color: #062afa;
    box-shadow: 1px 1px 11px 1px #062afa;
    transition-duration: 0.1s;
  }
`;
