import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/index";


ReactDOM.render(
  <Provider store={Store}>
 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  </Provider>
  ,
  document.getElementById("root")
);
