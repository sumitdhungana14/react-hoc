import React from 'react';

const DifferentComponent = props => {
    
    return (
        <div className="circle">
            {props.hovering ? 'OK': ''}
        </div>
    )
}

export default DifferentComponent;