import { cartActions } from "./cart-slice";

export const FetchCartData = () => {
  const color = [];
  const content = [];
  return async (dispatch) => {
    const FetchData = async () => {
      const response = await fetch("https://test-api.edfa3ly.io/product");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      for (let i = 0; i < 250; i++) {
        content.push({
          key: data[i].id,
          id: data[i].categoryId,
          name: data[i].name,
          img: data[i].image,
          color: data[i].color,
          price: data[i].price,
          rate: data[i].rating,
        });
        color.push({ color: data[i].color });
      }
      return content;
    };

    try {
      await FetchData();
     
      dispatch(
        cartActions.store({
          content: content,
        })
      );
    } catch (error) {
      alert(error);
    }
  };
};

export const FilterData = () => {
  return (dispatch, getState) => {
    const state = getState();

    let filteredcontent1 = [];
    let filteredcontent2 = [];
    let filteredcontent3 = [];
    let black = state.cart.black;
    let lavender = state.cart.lavender;
    let green = state.cart.green;
    let cyan = state.cart.cyan;
    let white = state.cart.white;
    let gold = state.cart.gold;
    let colorisvalid = black || green || lavender || white || gold || cyan;
    let rate = state.cart.rate;
    let minprice = state.cart.minprice;
    let maxprice = state.cart.maxprice;

    let cart = state.cart.filtbla;

    if (maxprice) {
      filteredcontent1 = cart.filter(
        (item) => item.price >= minprice && item.price <= maxprice
      );
    } else {
      filteredcontent1 = cart;
    }

    if (colorisvalid) {
      filteredcontent2 = filteredcontent1.filter(
        (item) =>
          item.color === black ||
          item.color === cyan ||
          item.color === green ||
          item.color === white ||
          item.color === gold ||
          item.color === lavender
      );
    } else {
      filteredcontent2 = filteredcontent1;
    }
    if (rate) {
      filteredcontent3 = filteredcontent2.filter((item) => item.rate === rate);
    } else {
      filteredcontent3 = filteredcontent2;
    }

    dispatch(cartActions.show({ bla: filteredcontent3, filtbla: cart }));
  };
};
