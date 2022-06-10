import { Reducer } from 'redux';

export const initialState = {
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export { reducer as LocalReducer };
