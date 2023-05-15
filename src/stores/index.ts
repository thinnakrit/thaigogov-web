import { configureStore } from '@reduxjs/toolkit';
//
const logger = (store: any) => (next: any) => (action: any) => {
  try {
    if (action.type) {
      const splitType: Array<string> = action.type.split('_');
      const type = splitType[splitType.length - 1];
      if (type === 'FAIL') {
        throw new Error(action.payload.errorMessage);
      }
    }
    let result = next(action);
    return result;
  } catch (err) {
    // action for manage error
  }
};
//
const store = configureStore({
  reducer: {
    // add all reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'production' ? false : true
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
