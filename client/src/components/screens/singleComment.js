import React, { useState , useContext } from "react";
import { UserContext } from "../../App";

function SingleComment(props) {

  // console.log("inside SingleComment = ",props.comment);

  const [CommentValue, setCommentValue] = useState("");
  const [disableInput, setDisableInput] = useState("");
  const [OpenReply, setOpenReply] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  let userCommentReq = undefined;

  const handleChange = (e) => {
    setCommentValue(e.currentTarget.value);
  }

  const openReply = () => {
    setOpenReply(!OpenReply);
  }

  const makeComment = (postId, content, responseTo) => {
    // if user try to save comment hitting enter multiple times stop user req and only accept one
    if (userCommentReq) clearTimeout(userCommentReq);

    console.log("inside make comment = ", content);

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
          responseTo
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const newData = props.data.map((item) => {
            if (item._id == result._id) {
              return result;
            } else {
              return item;
            }
          });
          setCommentValue("");
          props.setData(newData);
          setOpenReply(!OpenReply);
          setDisableInput("");
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300);
  };

  return (
    <div>

      <h6 key={props.comment._id}>
                    <span className="posted-by">{props.comment.writer.name}</span>{" "}
                    {props.comment.content}
                    <br/>
                    <br/>
                    <span style={{color: 'grey' ,fontSize: '15px'}} onClick={openReply} key="comment-basic-reply-to">Reply to</span>
                    {props.comment.writer._id == state._id && (
                      <i
                        className="material-icons delete-comment"
                        onClick={() => props.deleteComment(props.postId, props.comment._id)}
                      >
                        delete
                      </i>
                    )}
      </h6>

      {OpenReply &&
        <form style={{ display: 'flex' }}
          onSubmit={(e) => {
            e.preventDefault();
            makeComment(props.postId, CommentValue, props.comment._id,setCommentValue);
          }}
        >
          <input
            type="text"
              disabled={disableInput}
            value={CommentValue}
            onChange={handleChange}
            placeholder="Add a comment..."
          />
        </form>}

    </div >
  )
}

export default SingleComment;