import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { UserContext } from "../../App";
import M from "materialize-css";
import "./FontStyles.css";
const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
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

  const GoogleSignInFaliure = () => {
    M.toast({
      html: <h1>Unable to login</h1>,
      classes: "#c62828 red darken-3",
    });
  };

  const GoogleSignInSuccess = (res) => {
    fetch("/googleSignin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenId: res.tokenId,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
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
      .catch((e) => console.log(e));
  };

  const facebookSignIn = (res) => {
    fetch("/facebookSignin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: res.userID,
        accessToken: res.accessToken,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
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
      .catch((e) => console.log(e));
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <form className="formstyle">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form className="formstyle">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
        </form>
        <button className="btn" onClick={() => PostData()}>
          Log in
        </button>
        <h6 className="orline">--------------- OR ---------------</h6>
        <div>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            callback={facebookSignIn}
            fields="name,email,picture"
          />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with google"
            cookiePolicy={"single_host_origin"}
            onSuccess={GoogleSignInSuccess}
            onFailure={GoogleSignInFaliure}
          />

          <Link to="/reset">
            <h6 className="textcolor2">Forgot password?</h6>
          </Link>
        </div>
      </div>
      <div className="card2">
        <div className="rowcard2">
          <div className="columncard2">
            <h6>
              <Link to="/signup">Don't have an account ?</Link>
            </h6>
          </div>
          <div className="columncard2">
            <h6>
              <Link to="/signup">
                <h6 className="signbtn">Sign Up</h6>
              </Link>
            </h6>
          </div>
        </div>
      </div>
      <div className="getapp">
        <h6>Get the app</h6>
        <div className="rowgetapp">
          <div className="columngetapp">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="AppStore"
              width="150"
              height="40"
            />
          </div>
          <div className="columngetapp">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="GooglePlay"
              width="150"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
