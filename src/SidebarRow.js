import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

//Props - receive props inside of react, we can pretty much pass in different
//attributes so here if i passed in a title, for example: this one could be
//Instead of saying row what we could do is we could say props.title
//The "title" where it's passed in it's rendering those and it shows that this
//has passed through as a prop

//If you want to pass a component in a prop, it must always be capital letter
function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src =  {src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
