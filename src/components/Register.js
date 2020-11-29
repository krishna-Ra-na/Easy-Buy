import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("password do not match");
    }
    console.log(email, password);
    try {
      setError("");
      setLoading(true);
      await register(email, password);
      history.push("/");
    } catch {
      setError("Failed to create an account");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
    setLoading(false);
  }

  return (
    <section className="login_box_area section-margin">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login_box_img">
              <div className="hover">
                <h4>Already have an account?</h4>
                <p>
                  There are advances being made in science and technology
                  everyday, and a good example of this is the
                </p>

                <Link to="/login" className="button button-account">
                  Login Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login_form_inner register_form_inner">
              <h3>Create an account</h3>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form
                className="row login_form"
                onSubmit={handleRegisterSubmit}
                id="register_form"
              >
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
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
                    autoComplete="current-password"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="current-password"
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
                    className="button button-register w-100"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
