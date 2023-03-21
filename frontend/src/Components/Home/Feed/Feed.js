import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";

const Feed = () =>
{
    return(
        <div className="feed">
            <header className="feed__header">
                <h2>Home</h2>
            </header>
            <TweetBox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;
