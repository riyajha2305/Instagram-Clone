import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import SinglePost from "./SinglePost";
import "./Home.css";
import Comments from "./comment";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [CommentLists, setCommentLists] = useState([]);
  const [disableInput, setDisableInput] = useState("");

  let userLikeClick = undefined;
  let userCommentReq = undefined;

  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    // if user click first time then wait for user click response and mean time ignores user other clicks

    if (userLikeClick) clearTimeout(userLikeClick);

    userLikeClick = setTimeout(() => {
      fetch("/like", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          postId: id,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          //   console.log(result)
          const newData = data.map((item) => {
            if (item._id == result._id) {
              return result;
            } else {
              return item;
            }
          });
          setData(newData);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  };
  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (postId, content, setCommentValue) => {
    // if user try to save comment hitting enter multiple times stop user req and only accept one
    if (userCommentReq) clearTimeout(userCommentReq);

    setDisableInput("disabled");

    userCommentReq = setTimeout(() => {
      fetch("/comment", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          postId,
          content,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const newData = data.map((item) => {
            if (item._id == result._id) {
              return result;
            } else {
              return item;
            }
          });
          setCommentValue("");
          setData(newData);
          setDisableInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  };

  const deletePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (postId, commentId) => {
    //console.log("deleted");
    //console.log(postId,commentId);

    fetch("/comment", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        commentId: commentId,
        postId: postId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        //console.log(newData);
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="home">
      {data.map((item) => {
        return (
          <SinglePost
            item={item}
            disableInput={disableInput}
            setComment={setComment}
            likePost={likePost}
            comment={comment}
            unlikePost={unlikePost}
            makeComment={makeComment}
            deletePost={deletePost}
            deleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
};

export default Home;
