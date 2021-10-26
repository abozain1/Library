import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Homepage2 from "./pages/home2";

import { FetchCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch]);

  return (
    
     
          <Homepage2 />
        

       
          
        
    
  );
}

export default App;
