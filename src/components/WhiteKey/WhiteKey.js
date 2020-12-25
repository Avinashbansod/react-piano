import React from 'react'
import './WhiteKey.css'

const whitekey = (props) => {
    return <div className={props.node} onClick={() => props.nodePlay(props.node)}>
            </div>;
}

export default whitekey;
