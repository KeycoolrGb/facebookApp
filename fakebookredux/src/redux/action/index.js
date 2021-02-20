import { ADD_COMMENT } from "../const";

export const addCommentAction = (newState) => ({
  type: ADD_COMMENT,
  newState,
});
