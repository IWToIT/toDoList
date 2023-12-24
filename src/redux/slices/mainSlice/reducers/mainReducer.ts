export const setItemsReducer = (state: any, action: any) => {
  state.data = action.payload;
};