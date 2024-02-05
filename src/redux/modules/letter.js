//초기 상태값
import { fakeData } from "shared/DummyData";

export const ADD_LETTER = "fanletter/add";
export const DELETE_LETTER = "fanletter/delete";
export const UPDATE_LETTER = "fanletter/update";

const initialState = {
  letter: [...fakeData],
};

//리듀서
const letter = (state = initialState, action) => {
  switch (action.type) {
    //팬레터 추가
    case ADD_LETTER:
      return {
        letter: [],
      };
    //팬레터 삭제
    case DELETE_LETTER:
      return {
        letter: state.test + 2,
      };
    //팬레터 업데이트
    case UPDATE_LETTER:
      return {
        letter: state.test + 3,
      };
    default:
      return state;
  }
};

export default letter;
