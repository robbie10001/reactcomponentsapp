import React from "react"; 
import Faker from "faker";


const CommentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={Faker.image.avatar()} />
                </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="Metadata">
                    <span className="data">Today at 6.00pm</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};

export default CommentDetail;
//this line of code makes our component accessible to all of our other files.
