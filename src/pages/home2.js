import classes from "./home2.module.css";
import Content from "../components/main-category/Content";
import Filter from "../components/filters/Filter";
import Display from "../components/display-section/display";
import { FaUserCircle } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";




const Homepage2 = () => {
 

  return (
    <div className={classes.body}>
      <div className={classes.headline}>
        <div className={classes.hello}>
          <div>
            {" "}
            <FaUserCircle /> User
          </div>
        </div>
        <div className={classes.headlineP}>
          <b>Our e-Commerce store</b>
          <p>choose one of our categories from below</p>
        </div>
        <div className={classes.logout}>
        
            <BiLogIn  />
         
        </div>
      </div>

      <Content />
      <div className={classes.bodyHolder}>
        <Filter />
        <Display />
      </div>
    </div>
  );
};
export default Homepage2;
