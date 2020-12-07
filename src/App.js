import "./App.css";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
// import PasswordReset from "./components/PasswordReset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import MyModal from "./components/MyModal";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Productdetails" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          {/* 
            <Route path="/passwordReset">
              <PasswordReset />
            </Route> */}
        </Switch>
        <MyModal />
      </div>
    </Router>
  );
}

export default App;
