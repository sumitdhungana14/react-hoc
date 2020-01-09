import React from 'react';

const Header = props => {
    return (
        <div className="header"> 
            Header
            {props.hovering ? 'Hovering' : '' }
        </div>
    )
}

export default Header;
