//detail

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LettersContext } from "context/LettersContext";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetterItem } from "../redux/modules/letters";

function Detail() {
  const [click, setClick] = useState(false);
  //수정내용 state
  const [changeContent, setChangeContent] = useState(foundLetter.content);
  const params = useParams();
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const letter = useSelector((state) => state.letters);

  //그 값들 중에서 넘겨오는 id와  일치한 것만 보여주기
  const foundLetter = letter.find((letter) => {
    return letter.id === params.id;
  });

  const { nickname, createdAt, content, id } = foundLetter;

  const onChangeLetter = (e) => {
    let { content, id } = foundLetter;

    if (changeContent === content) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const resultLetter = JSON.parse(localStorage.getItem("letters"));
    const searchData = resultLetter.id;
    const searchIndex = resultLetter.findIndex((e) => e.id === id);
    resultLetter[searchIndex].content = changeContent;

    setClick(false);

    navigate("/");
  };

  // 삭제버튼
  const deleteLetter = (id) => {
    alert("삭제하시겠습니까?");
    dispatch(deleteLetterItem(id));
    navigate("/");
  };

  const modifyLetter = (e) => {
    setClick(!click);
  };

  return (
    <>
      {" "}
      <StHeader>
        <Link to="/">
          <HeaderBtn>YJ's made</HeaderBtn>
        </Link>
        <HeaderBtn>SIGN UP</HeaderBtn>
      </StHeader>
      <StDetail>
        <DetailOneLetter>
          <div>{nickname}</div>
          <div>{createdAt}</div>
          <div>
            {" "}
            {click ? (
              <TextArea
                type="text"
                name="content"
                defaultValue={content}
                onChange={(e) => setChangeContent(e.target.value)}
              ></TextArea>
            ) : (
              <p>{foundLetter.content}</p>
            )}
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {click ? (
                ""
              ) : (
                <DetailBtn onClick={() => deleteLetter(id)}>삭제하기</DetailBtn>
              )}
              {click ? (
                ""
              ) : (
                <DetailBtn onClick={() => modifyLetter(id)}>수정하기</DetailBtn>
              )}
              {click ? (
                <DetailBtn
                  name="changeButton"
                  onClick={(e) => onChangeLetter({ foundLetter })}
                >
                  수정완료
                </DetailBtn>
              ) : (
                ""
              )}
              <Link to="/">
                <DetailBtn>홈으로가기</DetailBtn>
              </Link>
            </div>
          </div>
        </DetailOneLetter>
      </StDetail>
    </>
  );
}
export default Detail;

const StHeader = styled.div`
  background-color: white;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

const HeaderBtn = styled.button`
  background-color: #6accc5;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  color: white;
  border: none;
  font-weight: bolder;
`;

const StDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
  background-color: #ede6e69f;
`;

const DetailOneLetter = styled.div`
  border: 1px solid #b9aeae9f;
  border-radius: 20px;
  width: 600px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
`;

const DetailBtn = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: #6accc5;
  color: white;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 350px;
  height: 170px;
`;
