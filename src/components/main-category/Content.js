import classes from "./content.module.css";
import { IoBookSharp } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import { useSelector } from "react-redux";

const Content = () => {
  let cart = useSelector((state) => state.cart.content);

  const dispatch = useDispatch();
  const Filter = (id) => {
    let filtereddata = cart.filter((item) => item.id === id);

    dispatch(cartActions.show({ bla: filtereddata, filtbla: filtereddata }));
  };

  return (
    <div className={classes.holder}>
      <div onClick={() => Filter(1)} key="1" className={classes.sec}>
        <IoBookSharp />
        <p>Books</p>
      </div>
      <div onClick={() => Filter(2)} key="2" className={classes.sec}>
        <GiHealthNormal />
        <p>Health</p>
      </div>
      <div onClick={() => Filter(3)}  key="3" className={classes.sec}>
        <GiLoincloth />
        <p>Cloths</p>
      </div>
      <div onClick={() => Filter(4)} key="4"  className={classes.sec}>
        <FaSmile />
        <p>Kids</p>
      </div>
      <div onClick={() => Filter(5)}  key="5" className={classes.sec}>
        <AiTwotoneHome />
        <p>Home</p>
      </div>
    </div>
  );
};
export default Content;
