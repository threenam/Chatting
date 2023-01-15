import * as C from "./ChatPageStyle.js";
import { useRef, useState, useEffect } from "react";

function ChatPage() {
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
          <C.chatting>
            {inputText}
            <C.editDiv onClick={showEdit()}>
              <C.showEdit></C.showEdit>
              <C.showEdit></C.showEdit>
              <C.showEdit></C.showEdit>
            </C.editDiv>
            <C.edit ref={(el) => (edit.current[chatList.length] = el)}>
              <C.editBtn>삭제</C.editBtn>
              <C.editBtn>보기</C.editBtn>
              <C.editBtn>신고</C.editBtn>
            </C.edit>
          </C.chatting>
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
    <C.container>
      <C.navBar ref={navBar}>
        <C.navElement>About</C.navElement>
        <C.navElement>Donate</C.navElement>
      </C.navBar>
      <C.chatBox>
        <C.textBox ref={textBox}>{chatList}</C.textBox>
        <C.inputbox>
          <C.input
            ref={input}
            onChange={onChange}
            placeholder={"대화내용을 입력해주세요!"}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (e.target.value !== "") sendMessage();
              }
            }}
          ></C.input>
          <C.submitBtn onClick={sendMessage}>보내기!</C.submitBtn>
        </C.inputbox>
      </C.chatBox>
    </C.container>
  );
}

export default ChatPage;
