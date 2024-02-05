import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LETTER } from "redux/modules/letter";

function LetterForm({ onSubmitLetter }) {
  const { letter: reduxletter } = useSelector((state) => {
    return state.letter;
  });
  const dispatch = useDispatch();

  console.log("Form", reduxletter);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const writedTo = e.target.writedTo.value;
    const nickname = e.target.nickname.value;
    const content = e.target.content.value;

    if (!nickname || !content) {
      alert("빈칸없이 내용을 입력해주세요!");
      return;
    }

    if (nickname.length >= 20) {
      alert("20글자를 초과할 수 없습니다");
      nickname.current.focus();
      return;
    }

    if (content.length >= 100) {
      alert("100글자를 초과할 수 없습니다");
      return;
    }

    onSubmitLetter({
      createdAt: dateString,
      nickname,
      id: crypto.randomUUID(),
      content,
      writedTo,
    });

    dispatch({
      type: ADD_LETTER,
    });

    e.target.reset();
  };

  return (
    <>
      <StForm>
        Form 영역입니다.
        <br />
        <form onSubmit={handleSubmit}>
          <label>닉네임 :</label>
          <input
            name="nickname"
            type="content"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            style={{
              width: "250px",
              height: "20px",
            }}
          />
          <br />
          <br />
          <label>내용 :</label>
          <textarea
            name="content"
            type="text"
            placeholder="최대 100자까지 작성할 수 있습니다."
            style={{
              width: "300px",
              height: "150px",
            }}
          />
          <br />
          <br />
          누구에게 보내실건가요? <br />
          <select name="writedTo">
            <option value="카리나">카리나</option>
            <option value="지젤">지젤</option>

            <option value="닝닝">닝닝</option>
            <option value="윈터">윈터</option>
          </select>
          <button>팬래터 등록</button>
        </form>
      </StForm>
    </>
  );
}

export default LetterForm;

const StForm = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid black;
`;
