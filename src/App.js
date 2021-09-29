import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage2 from "./pages/home2";

import { FetchCartData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path="/home">
          <Homepage2 />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
