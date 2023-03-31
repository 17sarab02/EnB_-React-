import React from 'react';
import '../componentCss/Section.css';

export default function Section(props){
    return (
        <section id={props.id} style={{...(props.backgroundSet && {background: props.background}), color: props.lightDark.primaryText}}>
            {props.children}
        </section>
    );
}