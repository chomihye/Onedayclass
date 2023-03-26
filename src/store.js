import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

//등록해야 사용가능
export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export let { addItem } = cart.actions;
