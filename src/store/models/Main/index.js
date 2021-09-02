import { action, thunk } from 'easy-peasy';

const MainStore = {
  loadingExample: false,
  
  setLoadingExample: action((state, payload) => {
    state.loading = payload;
  }),

  actionExample: action((state, { type, payload }) => {
    state[type] = payload;
  }),

  thunkExample: thunk(async (actions, payload, { getState, getStoreState, getStoreActions }) => {
    actions.setData({ type: 'loading', payload: true });
    // YOUR CODE HERE
    actions.setData({ type: 'loading', payload: false });
  }),
};

export default MainStore;
