import React from 'react';
import "./SidebarOption.css";

const SidebarOption = (props) =>
{
    const {text, Icon, active} = props;
    return(
        <div className={`sidebar-option ${active $$ "sidebar-option__active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
