import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./price.module.css";

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  let from = null;
  let to = null;
  const [value, setValue] = useState([0, 0]);
  const [start, setstart] = useState("");
  const [finish, setfinish] = useState("");
  const [clear, setclear] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setstart(value[0]);
    setfinish(value[1]);
  };

  const inputhandler = () => {
    if (start) {
      from = JSON.parse(start);
    }
    if (finish) {
      to = JSON.parse(finish);
    }
    if (from < to && from !== null) {
      setValue([from, to]);
    } else if (from > to && to !== null) {
      setValue([to, from]);
    }
    if (from == null) {
      setValue([0, to]);
    }
    if (to == null) {
      setValue([0, from]);
    }
    if (!from && !to) {
      setValue([0, 0]);
    }
  };

  const clearfilter = () => {
    setValue([0, 0]);
    setstart("");
    setfinish("");
    setclear(true);
  };
  useEffect(() => {
    
    if (clear) {
      dispatch(cartActions.price({ minprice: null, maxprice: null }));
    } else if (value[1] !== 0) {
      dispatch(cartActions.price({ minprice: value[0], maxprice: value[1] }));
    }
    
    
  }, [clear, value, dispatch]);

  return (
    <div className={classes.mainholder}>
      <p className={classes.p}>Price Range</p>
      <div className={classes.inputholder}>
        <input
          className={classes.input}
          onChange={(e) => setstart(e.target.value)}
          onKeyUp={inputhandler}
          type="number"
          placeholder="from"
          value={start}
        />
        <input
          className={classes.input}
          onChange={(e) => setfinish(e.target.value)}
          onKeyUp={inputhandler}
          type="number"
          placeholder="to"
          value={finish}
        />
      </div>
      <Box className={classes.slider} sx={{ width: 110 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={1000}
        />
      </Box>
      <button className={classes.btn} onClick={clearfilter}>
        clear
      </button>
    </div>
  );
};
export default RangeSlider;
