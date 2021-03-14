import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: 16px;
    cursor: pointer;
    outline: inherit;
    border: none;
    border-radius: 10px;
    color:${({ textColor }) => textColor};
    background-color: ${({ bgColor }) => bgColor};
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
`;
