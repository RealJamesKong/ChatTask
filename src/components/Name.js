import React from 'react';

const Name = ({updateName}) => {
    return <p>
        <span>What's your name</span>
        <input onChange={updateName} type="text" />
    </p>
}

export default Name;