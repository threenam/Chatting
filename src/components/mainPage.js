import * as M from "./mainPageStyle";
import { useRef, useState, useEffect } from "react";

function MainPage() {
  //예시 응답 변수

  const navBar = useRef();
  const input = useRef();
  const textBox = useRef();
  const edit = useRef([]);
  const [inputText, setInputText] = useState("");
  const [chatList, setChatList] = useState([]);

  //클릭이펙트 함수
  const click = () => {
    //최적화 안됨. 채팅많아지면 렉 ㅈㄴ걸림.
    for (let i = 0; i < chatList.length; i++) {
      edit.current[i].style.opacity = "0";
    }
  };

  //클릭이펙트 함수 실행
  document.addEventListener("mousedown", function () {
    click();
  });

  //===============채팅 함수================//

  //input값 변경시 input값 저장

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const showEdit = () => {
    for (let i = 0; i < chatList.length; i++) {
      edit.current[i].style.opacity = "1";
    }
  };

  const sendMessage = () => {
    if (inputText !== "") {
      setChatList(
        chatList.concat(
          <M.chatting>
            {inputText}
            <M.editDiv onClick={showEdit()}>
              <M.showEdit></M.showEdit>
              <M.showEdit></M.showEdit>
              <M.showEdit></M.showEdit>
            </M.editDiv>
            <M.edit ref={(el) => (edit.current[chatList.length] = el)}>
              <M.editBtn>삭제</M.editBtn>
              <M.editBtn>보기</M.editBtn>
              <M.editBtn>신고</M.editBtn>
            </M.edit>
          </M.chatting>
        )
      );
      setInputText("");
      input.current.value = "";

      input.current.focus();
    }
  };

  useEffect(() => {
    textBox.current.scrollTop = textBox.current.scrollHeight;
  }, [chatList]);

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <M.container>
      <M.navBar ref={navBar}>
        <M.navElement>About</M.navElement>
        <M.navElement>Donate</M.navElement>
      </M.navBar>
      <M.chatBox>
        <M.textBox ref={textBox}>{chatList}</M.textBox>
        <M.inputbox>
          <M.input
            ref={input}
            onChange={onChange}
            placeholder={"대화내용을 입력해주세요!"}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (e.target.value !== "") sendMessage();
              }
            }}
          ></M.input>
          <M.submitBtn onClick={sendMessage}>보내기!</M.submitBtn>
        </M.inputbox>
      </M.chatBox>
    </M.container>
  );
}

export default MainPage;
