import classes from "./color.module.css";
import {  Fragment} from "react";

import Colorcart from "./colorcart";
import { Container, Row } from "react-bootstrap";

const Color = () => {
 
  
  return (
    <Fragment>
      <div className={classes.form}>
        <p className={classes.headline}> color</p>
       
        <Container className={classes.main}>
          <Row>
            
       <Colorcart/>

         </Row>
        </Container>

     
      </div>
    </Fragment>
  );
};
export default Color;
