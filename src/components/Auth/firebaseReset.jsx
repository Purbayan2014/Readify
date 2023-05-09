import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { SpinnerLoading } from "../../components/utils/spinnerLoading";
import { auth, sendPasswordReset } from "./firebase";
import "../../styles/reset.css";

function FirebaseReset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useHistory();
  useEffect(() => {
    if (loading) return () => {};
    if (user) navigate.push("/reset");
  }, [user, loading, navigate]);
  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 pt-5">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Reset Password
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

                    <div className="d-flex justify-content-center p-4">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body ml-4 mr-2"
                        onClick={() => sendPasswordReset(email)}
                      >
                        Reset Password
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Login ?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login</u>
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
export default FirebaseReset;
