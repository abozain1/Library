import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const BasicRating = () => {
  
  const [value, setValue] = useState(0);
const dispatch=useDispatch()
const rate = (event, newValue) => {
  setValue(newValue);



  dispatch(cartActions.rate({rate:newValue}))
};

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Average Rating</Typography>
      <Rating name="simple-controlled" value={value} onChange={rate} />
    </Box>
  );
};
export default BasicRating;
