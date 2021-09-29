import Classes from "./filter.module.css";
import Color from "./color";
import RangeSlider from "./price";
import BasicRating from "./rating";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import {  FaStarOfLife, FaThList } from "react-icons/fa";
import { FilterData } from "../../store/cart-actions";

const Filter = () => {
 let Show=useSelector((state)=>state.cart.show);
   const dispatch = useDispatch();
function clickhandler(){
  dispatch(cartActions.bar())
};
function filter() {
  dispatch(FilterData())
}
  return (
    <div className={` ${Show ? Classes.hide : Classes.mainholder} `}>
      <div className={Classes.filterholder}>
        <div>
          <RangeSlider />
        </div>
        <div>
          <Color />
        </div>
        <div className={Classes.rateholder}>
          <BasicRating />
        </div>
        <button className={Classes.filter} onClick={filter}>
          filter
        </button>
       
      </div>
      <div className={Classes.action}>
        {Show && <FaStarOfLife onClick={clickhandler} />}
        {!Show && <FaThList onClick={clickhandler} />}
      </div>
    </div>
  );
};
export default Filter;
