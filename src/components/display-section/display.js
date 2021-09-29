import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Holder from "./Holder";
import classes from "./display.module.css";



const Display = () => {
 
  let Show=useSelector((state)=>state.cart.show)

  let cart = useSelector((state) => state.cart.bla);

  let content = cart.map((item) => (
    <Holder
      name={item.name}
      price={item.price}
      img={item.img}
      rate={item.rate}
      id={item.id}
      key={item.key}
      color={item.color}

    />
  ));
  

  return (
    <Container fluid className={`${Show ? classes.main : classes.main2}`}>
      <Row>{content}</Row>
    </Container>
  );
};
export default Display;
