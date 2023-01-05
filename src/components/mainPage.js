import * as M from "./mainPageStyle";
import { useRef, useState, useEffect } from "react";

function MainPage() {
  //예시 응답 변수

  const navBar = useRef();
  const curEffect = useRef();
  const input = useRef();
  const textBox = useRef();
  const edit = useRef([]);
  const [inputText, setInputText] = useState("");
  const [chatList, setChatList] = useState([]);

  document.addEventListener("mousemove", function (e) {
    if (e.clientY >= 40) {
      navBar.current.style.top = "-80";
    }
    if (e.clientY <= 40) {
      navBar.current.style.top = "0";
    }

    curEffect.current.style.top = `${e.clientY - 7}px`;
    curEffect.current.style.left = `${e.clientX - 7}px`;
    curEffect.current.style.opacity = "1";
  });

  //클릭이펙트 함수
  const click = () => {
    curEffect.current.style.transitionTimingFunction = "ease-out";
    curEffect.current.style.transitionDuration = "0.05s";
    for (let i = 0; i < chatList.length; i++) {
      edit.current[i].style.opacity = "0";
    }

    for (let i = 110; i >= 10; i--) {
      setTimeout(() => {
        curEffect.current.style.transform = `scale(${(100 - i) * 0.03})`;
      }, 1.5 * i);
    }

    console.log(edit);
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

  const showEdit = (e) => {
    edit.current[e.chatid].style.opacity = "1";
  };

  const sendMessage = () => {
    if (inputText !== "") {
      setChatList(
        chatList.concat(
          <M.chatting>
            {inputText}
            <M.editDiv onClick={showEdit}>
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
      <M.curEffect ref={curEffect}></M.curEffect>
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
