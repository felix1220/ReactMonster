export const createReducer = (initialState, fnMp) => {
    return (state = initialState, { type, payload}) => {
    const handler = fnMp[type];

    return handler ? handler(state, payload) : state;
  }
}