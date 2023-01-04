import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: gray;
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

  transition-timing-function: ease-out;
  transition-duration: 0.75s;

  :hover {
    background-color: gray;
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
  background-color: #555555;
  transform: scale(0.4);
  opacity: 0;
  z-index: 3;
`;

export const chatBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 5px solid white;
  border-radius: 10px;
  margin-top: 5%;
  width: 35%;
  height: 70%;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  box-shadow: 40px 20px 2px #000000;
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

export const chatting = styled.div`
  position: relative;
  display: flex;
  width: max-content;
  max-width: 40%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  box-shadow: 8px 4px 1px #666666;
  border-radius: 10px;
  font-weight: 600;
`;

export const editDiv = styled.div`
  display: flex;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  left: 110%;
  top: 20%;
`;

export const inputbox = styled.div`
  display: flex;
  width: 100%;
  height: 7%;
  border: 5px solid white;
  border-radius: 0px 0px 10px 10px;
  background-color: black;
`;

export const input = styled.input`
  width: 91%;
  height: 95%;
  border: none;
  border-radius: 0px 0px 0px 10px;
  background-color: black;
  color: white;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  :hover {
    cursor: none;
  }
  ::placeholder {
    opacity: 0.5;
    font-size: 12px;
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
  background-color: black;
  color: white;
  border-radius: 10px 0px 5px 10px;
  transition-timing-function: ease-out;
  transition-duration: 0.75s;

  :hover {
    background-color: white;
    transition-duration: 0.15s;
    color: black;
  }
`;
