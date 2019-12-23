import React from "react"; 



const CommentDetail = props  => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="Metadata">
                    <span className="data">{props.timeAgo}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
//this line of code makes our component accessible to all of our other files.
