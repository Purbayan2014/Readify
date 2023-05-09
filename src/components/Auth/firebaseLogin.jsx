import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../styles/login.css";
import { SpinnerLoading } from "../utils/spinnerLoading";

function FireBaseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useHistory();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      <SpinnerLoading />;
      return;
    }
    if (user) navigate.push("/home");
  }, [user, loading, navigate]);
  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 pt-4">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Login
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Your Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center p-4">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body ml-4 mr-2"
                        onClick={() =>
                          logInWithEmailAndPassword(email, password)
                        }
                      >
                        Login
                      </button>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={signInWithGoogle}
                      >
                        Login with Google
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Forgot Password?{" "}
                      <Link to="/reset" className="fw-bold text-body">
                        <u>Reset here</u>
                      </Link>
                    </p>

                    <p className="text-center text-muted mt-5 mb-0">
                      Dont Have an Account ?{" "}
                      <Link to="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FireBaseLogin;
