import styled from "styled-components";

export const Radio = styled.div`
  width: 18.4%;
  height: 50px;

  border: none;

  box-sizing: border-box;

  position: relative;

  float: left;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  label {
    border-radius: 10px;
    background: #fff no-repeat center center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;

    span {
      z-index: 1;

      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: #111;

      text-transform: uppercase;
    }

    input[type="radio"] {
      all: unset;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 10px;
      transition: background 0.3s ease-in-out;
    }

    input[type="radio"]:checked {
      background: #fad424;
      border-radius: 10px;
    }
  }
`;
