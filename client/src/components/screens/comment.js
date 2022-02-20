import React, { useState } from 'react';
import ReplyComment from './ReplyComment';
import SingleComment from './singleComment';

function Comments(props) {
    
    const [Comment, setComment] = useState("");
   

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }


    

        
        
    return (
        <div>
            <br />
            <p>Replies</p>
            <br />
            {props.CommentLists && props.CommentLists.map((comment,index) => (
                 (!comment.responseTo &&  
                    <React.Fragment>
                    <SingleComment comment={comment} postId={props.postId} data={props.data} setData={props.setData} deleteComment={props.deleteComment}/>
                    <ReplyComment CommentLists={props.CommentLists} postId={props.postId} data={props.data} setData={props.setData} parentCommentId={comment._id}/>
                </React.Fragment>
                    )
            ))}



            {/* Root Comment Form */}

            <form style={{ display: 'flex' }}
                 onSubmit={(e) => {
                    e.preventDefault();
                    props.makeComment(props.postId,Comment);
                  }}
            >
                <input
                    type="text"
                    disabled={props.disableInput}
                    value={Comment}
                    onChange={handleChange}
                    placeholder="Add a comment..."
                />
            </form>

        </div>
    )
}

export default Comments;