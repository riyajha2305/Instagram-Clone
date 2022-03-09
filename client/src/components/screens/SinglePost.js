import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

function SinglePost({
  item,
  disableInput,
  comment,
  setComment,
  likePost,
  makeComment,
  unlikePost,
  deleteComment,
  deletePost,
}) {
  const { state, dispatch } = useContext(UserContext);
  const [showmore, setShowMore] = useState(undefined);

  const [commentNum, setCommentNum] = useState(6);
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

        {item.comments.map((record, index) => {
          console.log(index);
          if (index < commentNum) {
            return (
              <h6 key={record._id}>
                <span className="posted-by">{record.postedBy.name}</span>{" "}
                {record.text}
                {record.postedBy._id == state._id && (
                  <i
                    className="material-icons delete-comment"
                    onClick={() => deleteComment(item._id, record._id)}
                  >
                    delete
                  </i>
                )}
              </h6>
            );
          }
        })}
        {showmore ? (
          <button
            className="show-btn"
            onClick={() => {
              setShowMore(false);
              setCommentNum(6);
            }}
          >
            View less
          </button>
        ) : (
          <button
            className="show-btn"
            onClick={() => {
              setShowMore(true);
              setCommentNum(item.comments.length);
            }}
          >
            View more
          </button>
        )}
        <hr className="divider" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            makeComment(item._id);
          }}
        >
          <input
            type="text"
            className="comment-inp"
            disabled={disableInput}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Add a comment..."
          />
        </form>
      </div>
    </div>
  );
}

export default SinglePost;
