import { ADD_COMMENT } from "../const";

const defaultState = {
  comments: [
    // {
    //   name: "yasuo",
    //   content: "2 yahoo",
    //   avatar: `https://i.pravatar.cc/150?u=bbbb`,
    // },
    // {
    //   name: "yone",
    //   content: "3 yaho",
    //   avatar: `https://i.pravatar.cc/150?u=yone`,
    // },
    // {
    //   name: "yasuo1",
    //   content: "2 yahoo1",
    //   avatar: `https://i.pravatar.cc/150?u=bbbb`,
    // },
  ],
};

const fakeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.newState],
      };
  }
  return { ...state };
};
export default fakeReducer;
