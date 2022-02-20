import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import "./Home.css";
import ReplyComment from "./ReplyComment";
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



  const makeComment = (postId,content,setCommentValue) => {
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
          <div className="card home-card" key={item._id}>
            <div className="card-user-details">
              <Link
                to={
                  item.postedBy._id !== state._id
                    ? "/profile/" + item.postedBy._id
                    : "/profile"
                }
              >
                <img className="card-user-pic" src={item.postedBy.pic} />
              </Link>
              <h5>
                <Link
                  to={
                    item.postedBy._id !== state._id
                      ? "/profile/" + item.postedBy._id
                      : "/profile"
                  }
                >
                  {item.postedBy.name}
                </Link>
                {item.postedBy._id == state._id && (
                  <span>
                    {" "}
                    <i
                      className="material-icons delete-post"
                      onClick={() => deletePost(item._id)}
                    >
                      delete
                    </i>
                  </span>
                )}
              </h5>
            </div>
            <div className="card-image">
              <img src={item.photo} />
            </div>
            <div className="card-content">
              <i className="material-icons favorite">favorite</i>
              {item.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => {
                    unlikePost(item._id);
                  }}
                >
                  thumb_down
                </i>
              ) : (
                <i
                  className="material-icons user-select-none"
                  onClick={() => {
                    likePost(item._id);
                  }}
                >
                  thumb_up
                </i>
              )}

              <h6 className="like-count">{item.likes.length} likes</h6>
              <h6 className="post-title">{item.title}</h6>
              <p className="post-body">{item.body}</p>
{/* 
              {item.comments.map((record) => {
                console.log(record);
                // return (
                //   <React.Fragment>

                //     <h6 key={record._id}>
                //     <span className="posted-by">{record.postedBy.name}</span>{" "}
                //     {record.text}
                //     {record.postedBy._id == state._id && (
                //       <i
                //         className="material-icons delete-comment"
                //         onClick={() => deleteComment(item._id, record._id)}
                //       >
                //         delete
                //       </i>
                //     )}
                //   </h6>

                //  <ReplyComment commentLists={item.comments} postId={item._id} parentCommentId={record._id}/>

                //   </React.Fragment>
                // );
              })} */}

              <Comments
               CommentLists={item.comments}
                postId={item._id} makeComment={makeComment} disableInput={disableInput} data={data} setData={setData} deleteComment={deleteComment}/>

              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
