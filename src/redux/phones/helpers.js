export const getPhones = (state, {payload}) => {
    state.items = payload;
  }
  export const newPhones = (state, {payload}) => {
    state.items.push(payload);
  }
  export const delPhones = (state, {payload}) => {
    state.items = state.items.filter(
      item => item.id !== payload.id
    );}