import React from 'react';
import '../componentCss/Button.css'

export default function Button(props){
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}