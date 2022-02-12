import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import "./Profile.css";
import "./FontStyles.css"

const Profile = () => {
  const [mypics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPics(result.mypost);
      });
  }, []);

  // "https://api.cloudinary.com/v1_1/dqjgjdewi/image/upload"
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone");
      data.append("cloud_name", "dqjgjdewi");
      fetch("https://api.cloudinary.com/v1_1/dqjgjdewi/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: result.pic })
              );
              dispatch({ type: "UPDATEPIC", payload: result.pic });
              //window.location.reload()
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updatePhoto = (file) => {
    setImage(file);
  };
  return (
    <div className="profile">
      <div className="main">
        <div className="top-container">
          <div>
            <img className="profile-pic" src={state ? state.pic : "loading"} />
          </div>
          <div className="info">
            <div className="profile-name">
              <h4 className="top-line">{state ? state.name : "loading"} </h4>
              <div className="file-field input-field">
                <div className="btn button">
                  <span>Update pic</span>
                  <input
                    type="file"
                    onChange={(e) => updatePhoto(e.target.files[0])}
                  />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div className="profile-stats">
              <h6>
                <span>{mypics.length}</span> posts
              </h6>
              <h6>
                <span>{state ? state.followers.length : "0"}</span> followers
              </h6>
              <h6>
                <span>{state ? state.following.length : "0"}</span> following
              </h6>
            </div>
            <h6 className="email">{state ? state.email : "loading"}</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {mypics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
