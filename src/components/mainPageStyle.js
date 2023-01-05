import styled from "styled-components";
import { keyframes } from "styled-components";

const popChat = keyframes`
  from {
    max-width: 0;
    height: 5;
    opacity: 0;
    padding: 0px;
  }

  to {
    max-width: 40%;
    padding: 10px;
    width: max-content;
    opacity: 1;
    }
`;

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgb(151, 151, 240),
    rgb(118, 118, 215),
    rgb(100, 100, 218),
    rgb(81, 81, 210),
    rgb(50, 50, 207)
  );
  justify-content: center;
  align-items: center;
  cursor: none;
`;

export const navBar = styled.div`
  position: fixed;
  top: -80px;
  display: flex;
  background-color: white;
  width: 100%;
  height: 80px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  transition-timing-function: ease-in-out;
  transition-duration: 0.25s;
`;

export const navElement = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  transition-timing-function: ease-out;
  transition-duration: 0.75s;
  background-image: none;

  :hover {
    background-image: linear-gradient(
      to right,
      rgb(151, 151, 240),
      rgb(118, 118, 215),
      rgb(100, 100, 218)
    );
    transition-duration: 0.15s;
    color: white;
  }
`;

export const curEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  pointer-events: none;
  background-color: black;
  transform: scale(0.4);
  opacity: 0;
  z-index: 3;
`;

export const chatBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-top: 5%;
  width: 35%;
  height: 70%;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  box-shadow: 7px 10px 2px #182847;
`;

export const textBox = styled.div`
  display: flex;
  width: 92%;
  height: 85%;
  padding: 4%;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  flex-direction: column;
  overflow: scroll;
  gap: 3%;
  scroll-behavior: smooth;
`;

export const editDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  flex-wrap: wrap;
  width: 7px;
  height: 24px;
  right: -15px;
  bottom: 0;
  overflow: hidden;
  justify-content: right;
  opacity: 0;
  transition-timing-function: ease-out;
  transition-duration: 0.25s;
`;

export const showEdit = styled.div`
  width: 4px;
  height: 4px;
  background-color: gray;
  border-radius: 50%;
`;

export const edit = styled.div`
  position: absolute;
  display: flex;
  right: -40px;
  opacity: 1;
  bottom: 0;
  width: 35px;
  height: 40px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 10px;
`;

export const editBtn = styled.div`
  height: 33.333333333333333333333333333%;
  width: 90%;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgb(151, 151, 240),
    rgb(118, 118, 215),
    rgb(100, 100, 218)
  );
  :hover {
    background-image: linear-gradient(
      to right,
      rgb(81, 81, 210),
      rgb(50, 50, 207)
    );
  }
`;

export const chatting = styled.div`
  position: relative;
  display: flex;
  width: max-content;
  max-width: 40%;
  padding: 10px;
  opacity: 0;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgb(81, 81, 210),
    rgb(50, 50, 207)
  );
  color: white;
  box-shadow: 3px 2px 3px gray;
  border-radius: 10px;
  font-weight: 600;

  animation: ${popChat} 0.05s ease-out;
  animation-fill-mode: forwards;

  :hover {
    ${editDiv} {
      opacity: 1;
    }
  }
`;

export const inputbox = styled.div`
  display: flex;
  width: 100%;
  height: 7%;
  border: 5px solid white;
  border-radius: 0px 0px 10px 10px;
  background-color: white;
`;

export const input = styled.input`
  width: 91%;
  height: 95%;
  border: none;
  border-radius: 0px 0px 0px 7px;
  background-image: linear-gradient(
    to right,
    rgb(151, 151, 240),
    rgb(118, 118, 215),
    rgb(100, 100, 218)
  );
  padding-left: 2%;
  color: white;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  font-family: "맑은 고딕";
  :hover {
    cursor: none;
  }
  ::placeholder {
    font-size: 12px;
    color: white;
    font-family: "맑은 고딕";
  }
`;

export const submitBtn = styled.div`
  display: flex;
  width: 12%;
  height: 101%;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgb(100, 100, 218),
    rgb(81, 81, 210),
    rgb(50, 50, 207)
  );
  color: white;
  border-radius: 0px 0px 7px 0px;
  transition-timing-function: ease-out;
  transition-duration: 0.75s;

  :hover {
    background-color: #d3d3d3;
    transition-duration: 0.15s;
    color: black;
  }
`;
