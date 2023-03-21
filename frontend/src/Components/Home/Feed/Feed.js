import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";

const Feed = () =>
{
    return(
        <div className="feed">
            <header className="feed__header">
                <h2>Home</h2>
            </header>
            <TweetBox />
        </div>
    );
};

export default Feed;
