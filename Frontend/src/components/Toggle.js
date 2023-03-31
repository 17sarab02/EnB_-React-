import React from 'react';
import '../componentCss/Toggle.css'

export default function Toggle(props){
    return(
        <label className="switch">
            <input type="checkbox" onChange={props.onSwitch} />
            <span className="slider round"></span>
        </label>
    );
}