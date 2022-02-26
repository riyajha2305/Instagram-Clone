import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import M from "materialize-css";
import { validEmail, validPassword } from "./Regex.jsx";
// import "./FontStyles.css";
import "./SignIn.css";
import { AiFillFacebook } from "react-icons/ai";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [email, setEmail] = useState("");
  //  const checkValidation=(e)=>{
  //     setConfirmPassword(e.target.value);
  //     if (password != confirmPassword) {
  //       setIsError("confirm password should matched with password");
  //     } else {
  //       setIsError("");
  //     }
  //   }
  const PostData = () => {
    // var ptrn=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    // if (
    //   !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //     email
    //   )
    // ) {
    //   M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
    //   return;
    // }
    // var inp_value = document.forms[0].inp_val;
    // var pass_value = document.forms[0].pass_val;
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "signedin success",
            classes: "#43a047 green darken-1",
          });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signin">
      <div className="signin__left">
        <img src="images/signin.png" alt="signin" />
      </div>
      <div className="signin__right">
        <div className="signin__fields">
          <h1 className="title">Insta Clone</h1>

          <form className="signin__form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="inp_val"
              className="inputFiled"
              placeholder="Phone number, username, or email"
            />

            <input
              type="password"
              className="inputFiled"
              placeholder="Password"
              value={password}
              name="pass_val"
              onChange={(e) => setPasword(e.target.value)}
            />

            <button
              type="button"
              className="submitBtn"
              onClick={() => PostData()}
            >
              Log In
            </button>
          </form>

          <div className="division">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="loginFacebook">
            <AiFillFacebook />
            <Link to="/reset">Log in with Facebook</Link>
          </div>

          {emailErr && (
            <p className="inputError">
              Your email is invalid
            </p>
          )}
          {pwdError && (
            <p className="inputError">
              Your password is invalid
            </p>
          )}

          <Link to="/reset" className="forgotPass">
            Forgot Password?
          </Link>
        </div>

        <div className="signupField">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>

        <div className="getApp">
          <p>Get the app.</p>

          <div className="appsLinks">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="AppStore"
              width="130"
              height="40"
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="GooglePlay"
              width="130"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
