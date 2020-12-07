import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to Sign in");
    }
    setLoading(false);
  }

  return (
    <div>
      <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link to="/register" className="button button-account">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Log in to enter</h3>
                {error !== null && (
                  <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                    {error}
                  </div>
                )}
                <form
                  className="row login_form"
                  onSubmit={handleSubmit}
                  id="contactForm"
                >
                  <div className="col-md-12 form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="User email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      {/* <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Keep me logged in</label> */}
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      type="submit"
                      value="submit"
                      className="button button-login w-100"
                    >
                      {loading ? "loging in..." : "Log In"}
                    </button>

                    <Link
                      to="/passwordReset"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
