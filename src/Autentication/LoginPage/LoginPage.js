import React, { useState } from "react";
import "../LoginPage/loginpage.css";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";


const LoginPage = () => {
  const [error, setError] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  

  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => setError("Email or password invalid"));
  };

  const SignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const RestPassword = (e) => {
    e.preventDefault(e);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset link sent to your registrated mail successfully ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  
 



 

  return (
    <section className="bg-img vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="card1 col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <center>
              {error && <div className="alert alert-danger">{error}</div>}
              <h3>Log in to your Account</h3>
              <p>Welcome back! Please enter your details</p>
            </center>

            <form>
              <div className="form-outline mb-4">
                <label className="form-label" for="form1Example13">
                  Email
                </label>
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={email}
                  name="email"
                  onChange={changeHandler}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" for="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  value={password}
                  name="password"
                  onChange={changeHandler}
                />
              </div>

              <div className="d-flex justify-content-right align-items-right mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" for="form1Example3">
                    Remember for 30 days{" "}
                  </label>
                </div>{" "}
                <a href="" className="Forgot" onClick={RestPassword}>
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-lg signin"
                onClick={Login}
              >
                Sign in
              </button>
              <br />
              <br />
              <button className="btn gsignin btn-lg " onClick={SignIn}>
                <FcGoogle /> &nbsp; Sign in with Google
              </button>
             

            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
