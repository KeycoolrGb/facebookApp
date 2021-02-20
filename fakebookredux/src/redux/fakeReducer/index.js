const defaultState = [(c = { a: "1", b: "2" })];

const fakeReducer = (state = defaultState, action) => {
  return state;
};
export default fakeReducer;
