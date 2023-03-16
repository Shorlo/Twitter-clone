import React from 'react';
import "./Sidebar.css";

import {Twitter} from "@mui/icons-material";

const Sidebar = () =>
{
    return(
        <div className="sidebar">
            <Twitter className="sidebar__twitter-icon" />
        </div>
    );
};

export default Sidebar;
