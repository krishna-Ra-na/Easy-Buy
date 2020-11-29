import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/passwordReset">
              <PasswordReset />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
