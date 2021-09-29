import { Fragment, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./colorcart.module.css";
const Colorcart = (props) => {
  const [checked1, setchecked1] = useState({ state: false, black: null });
  const [checked2, setchecked2] = useState({ state: false, gold: null });
  const [checked3, setchecked3] = useState({ state: false, white: null });
  const [checked4, setchecked4] = useState({ state: false, lavender: null });
  const [checked5, setchecked5] = useState({ state: false, green: null });
  const [checked6, setchecked6] = useState({ state: false, cyan: null });

  const dispatch = useDispatch();
  function togglehandler1(id) {
    if (!checked1.state) {
      setchecked1({ state: true, black: id });
    } else {
      setchecked1({ state: false, black: null });
    }
  }
  const togglehandler2 = (id) => {
    if (!checked2.state) {
      setchecked2({ state: true, gold: id });
    } else {
      setchecked2({ state: false, gold: null });
    }
  };
  const togglehandler3 = (id) => {
    if (!checked3.state) {
      setchecked3({ state: true, white: id });
    } else {
      setchecked3({ state: false, white: null });
    }
  };
  const togglehandler4 = (id) => {
    if (!checked4.state) {
      setchecked4({ state: true, lavender: id });
    } else {
      setchecked4({ state: false, lavender: null });
    }
  };
  const togglehandler5 = (id) => {
    if (!checked5.state) {
      setchecked5({ state: true, green: id });
    } else {
      setchecked5({ state: false, green: null });
    }
  };
  const togglehandler6 = (id) => {
    if (!checked6.state) {
      setchecked6({ state: true, cyan: id });
    } else {
      setchecked6({ state: false, cyan: null });
    }
  };

  const clear = () => {
    dispatch(cartActions.clear());
    setchecked1({ state: false, color: null });
    setchecked2({ state: false, color: null });
    setchecked3({ state: false, color: null });
    setchecked4({ state: false, color: null });
    setchecked5({ state: false, color: null });
    setchecked6({ state: false, color: null });
  };

  useEffect(() => {
    dispatch(
      cartActions.color({
        black: checked1.black,
        gold: checked2.gold,
        white: checked3.white,
        lavender: checked4.lavender,
        green: checked5.green,
        cyan: checked6.cyan,
      })
    );
  }, [
    checked1.black,
    checked5.green,
    checked3.white,
    checked2.gold,
    checked6.cyan,
    checked4.lavender,
    dispatch,
  ]);

  return (
    <Fragment>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler1("black")}
          className={`${classes.checkmark} ${
            checked1.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>black</label>
      </Col>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler2("gold")}
          className={`${classes.checkmark} ${
            checked2.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>gold</label>
      </Col>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler3("white")}
          className={`${classes.checkmark} ${
            checked3.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>white</label>
      </Col>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler4("lavender")}
          className={`${classes.checkmark} ${
            checked4.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>lavender</label>
      </Col>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler5("green")}
          className={`${classes.checkmark} ${
            checked5.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>green</label>
      </Col>
      <Col className={classes.holder}>
        <div
          onClick={() => togglehandler6("cyan")}
          className={`${classes.checkmark} ${
            checked6.state ? classes.checked : ""
          }`}
        />
        <label className={classes.check}>cyan</label>
      </Col>
      <button onClick={clear} className={classes.btn}>
        clear
      </button>
    </Fragment>
  );
};
export default Colorcart;
