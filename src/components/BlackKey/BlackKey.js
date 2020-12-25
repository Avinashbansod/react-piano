import React from 'react'
import './BlackKey.css'


const blackkey = (props) => {
    return <div className={props.node} onClick={() => props.nodePlay(props.node)} />;
}

export default blackkey;