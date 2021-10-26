import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/index";


ReactDOM.render(
  <Provider store={Store}>
 
  
    <App />
  
  
  </Provider>
  ,
  document.getElementById("root")
);
