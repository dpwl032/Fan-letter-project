import { fakeData } from "shared/DummyData";

//팬레터 추가
const ADD_LETTER = "letters/ADD_LETTER";
//팬레터 삭제
const DELETE_LETTER = "letters/DELETE_LETTER";
//팬레터 수정
const EDIT_LETTER = "letters/EDIT_LETTER";

//action creator
export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};
export const deleteLetter = (payload) => {
  return { type: DELETE_LETTER, payload };
};
export const editLetter = (payload) => {
  return { type: EDIT_LETTER, payload };
};

const initialState = fakeData;

const letters = (state = initialState, action) => {};

export default letters;
