import React from "react";
import "./Post.css";
import {Avatar} from "@mui/material";
import {MoreHoriz, ChatBubbleOutline, Repeat, FavoriteBorderOutlined, PublishOutlined} from "@mui/icons-material";

const Post = () =>
{
    return(
        <div className="post">
            <Avatar src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg" className="post__avatar"/>
            <div className="post__content">
                <div className="post__header">
                    <div className="post__titles">
                        <h3 >John Doe</h3>
                        <h4>@johndoe</h4>      
                    </div>
                    <MoreHoriz className="post_options"/>
                </div>
                <div className="post__description">
                    mi mi mi mi mimimimim imim imi mi mim imimimimim mimimm im im imi mimi im immi im imim im !
                </div>
                <div className="post__media">
                    <img src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg" alt=""></img>
                </div>
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    <FavoriteBorderOutlined fontSize="small"/>
                    <PublishOutlined fontSize="small"/>
                </div>
            </div>
        </div>
    );
};

export default Post;