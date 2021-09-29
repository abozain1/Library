import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    content: [],
    bla: [],
    filtbla: [],
    minprice: null,
    maxprice: null,
    black: null,
    white: null,
    cyan: null,
    gold: null,
    lavender: null,
    green: null,
    rate: null,
    show: false,
  },
  reducers: {
    store(state, action) {
      state.content = action.payload.content;
    },
    show(state, action) {
      state.bla = action.payload.bla;
      state.filtbla = action.payload.filtbla;
    },
    price(state, action) {
      state.minprice = action.payload.minprice;
      state.maxprice = action.payload.maxprice;
    },
    color(state, action) {
      state.black = action.payload.black;
      state.lavender = action.payload.lavender;
      state.gold = action.payload.gold;
      state.green = action.payload.green;
      state.cyan = action.payload.cyan;
      state.white = action.payload.white;
    },

    clear(state) {
      state.black = null;
      state.white = null;
      state.lavender = null;
      state.gold = null;
      state.cyan = null;
      state.green = null;
    },

    rate(state, action) {
      state.rate = action.payload.rate;
    },
    bar(state, action) {
      state.show = !state.show;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
