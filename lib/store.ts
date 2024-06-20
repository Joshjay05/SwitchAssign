import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/cartSlice';

export const makeStore = () => configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
