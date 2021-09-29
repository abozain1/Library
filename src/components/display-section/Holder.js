import { Col } from "react-bootstrap";
import classes from "./Holder.module.css";

import Rating from "@mui/material/Rating";

const Holder = (props) => {
  return (
    <Col className={classes.holder}>
      <div
        className={classes.img}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <p className={classes.name}>{props.name}</p>
      <div>
        <Rating size='small' name="simple-controlled" value={props.rate} readOnly />
      </div>
      <div
        className={classes.color}
        style={{ backgroundColor: `${props.color}` }}
      />
      <p>Price:{props.price}$</p>
    </Col>
  );
};
export default Holder;
