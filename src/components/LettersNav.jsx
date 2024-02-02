import React, { useState } from "react";
import styled from "styled-components";
import { fakeData } from "shared/DummyData";
import LetterForm from "components/LetterForm";
import { Link } from "react-router-dom";

const StNav = styled.div`
  height: 150px;
  width: 800px;
  background: yellow;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const StUl = styled.ul`
  justify-content: space-around;
  width: 500px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`;

const StButton = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  /* ${(props) => props.$hoverItem}:hover {
    border-radius: 10px;
    color: white;
    background-color: red;
  } */
`;
//이름을 배열에 담는다.
const celebrityList = ["지젤", "카리나", "윈터", "닝닝"];

//이름을 넣으면 체크 후 누군지 리턴한다
const celebrityJob = (who) => {
  switch (who) {
    case "지젤":
      return "지젤";
    case "카리나":
      return "카리나";
    case "윈터":
      return "윈터";
    case "닝닝":
      return "닝닝";
    default:
      return "연예인이 아닙니다";
  }
};

/*item style*/

const StItemUl = styled.ul`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  gap: 20px;
`;

const StItemLi = styled.li`
  width: 560px;
  height: 200px;
  text-align: center;
  border: 2px solid red;
  border-radius: 15px;
`;

const LetterItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileImg = styled.div`
  width: 30%;
`;

const LetterItem = styled.div`
  width: 70%;
`;

//말줄임 표시 처리방법
const LengthLimit = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function LettersNav() {
  const [name, setName] = useState("카리나");

  const onclickHandler = (who) => {
    setName(who);
  };

  const [letters, setLetters] = useState([...fakeData]);

  const filteredLetters = letters.filter((data) => {
    return data.writedTo === name;
  });

  const onSubmitLetter = (nextLetter) => {
    setLetters((prevLetter) => [nextLetter, ...prevLetter]);
  };

  return (
    <>
      <StNav>
        <StUl>
          {celebrityList.map((who) => {
            return (
              <StButton
                key={who}
                $hoverItem={who}
                onClick={() => onclickHandler(who)}
                style={{
                  backgroundColor: name === who ? "red" : "initial",
                }}
              >
                {celebrityJob(who)}
              </StButton>
            );
          })}
        </StUl>
      </StNav>
      <LetterForm onSubmitLetter={onSubmitLetter} />

      {/* Item 컴포넌트부분 */}
      <div style={{ border: "1px solid black" }}>
        <StItemUl>
          {filteredLetters.map((data) => {
            return (
              <StItemLi key={data.id}>
                <Link
                  to={`/navi/${data.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <LetterItems>
                    <ProfileImg>이미지</ProfileImg>
                    <LetterItem>
                      <p> {data.nickname}</p>
                      <br />
                      <p>{data.createdAt}</p>
                      <br />
                      <LengthLimit>{data.content}</LengthLimit>
                      <br />
                    </LetterItem>
                  </LetterItems>
                </Link>
              </StItemLi>
            );
          })}
        </StItemUl>
      </div>
    </>
  );
}

export default LettersNav;