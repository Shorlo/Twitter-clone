import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import {BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter} from "@mui/icons-material";
import {Button} from "@mui/material";

const Sidebar = () =>
{
    return(
        <div className="sidebar">
            <Twitter className="sidebar__twitter-icon" />

            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

            <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>
                Tweet
            </Button>
        </div>
    );
};

export default Sidebar;
