import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  list-style: none;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 5px;
  transition-duration: 0.1s;
  box-shadow: inset 1px 1px 11px 1px #797a7c;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
    background: #aafcea;
    color: #062afa;
    box-shadow: 1px 1px 11px 1px #062afa;
    transition-duration: 0.1s;
  }
`;
