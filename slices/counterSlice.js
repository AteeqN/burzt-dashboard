import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenState: false,
  tokenUser: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loadDataFromLocalStorage: (state, action) => {
      let cart = localStorage.getItem("cart");
      console.log("counterSlice", cart);
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addToken: (state, action) => {
      state.value = action.payload;
      // state.push([...action.payload]);
      // state.push({ ...action.payload });
      // state.value = action.payload;

      // state.value = localStorage.setItem("t", action);
      // state.push({ ...action.payload });
      // return {
      //   reduxToken: action.payload,
      // };
      // localStorage.setItem("cart", JSON.stringify(state));
      // console.log("tokenSlice", token);
      // state.value = { ...action.payload };
      // state.push({ reduxToken: action.payload });
    },
    setTokenState(state, action) {
      state.tokenState = action.payload;
    },
    setTokenUser(state, action) {
      state.tokenUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  loadDataFromLocalStorage,
  addToken,
  setTokenState,
  setTokenUser,
} = counterSlice.actions;
export const selectTokenState = (state) => state.counter.tokenState;
export const selectTokenUser = (state) => state.counter.tokenUser;

export default counterSlice.reducer;
