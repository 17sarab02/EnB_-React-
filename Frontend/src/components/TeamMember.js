import React from 'react';
import '../componentCss/TeamMember.css'

export default function TeamMember(props){
    return (
        <div className="teamMember">
            <div className="memberContainer">
                <div className="memberDetails">
                    <h4>{props.details.name}</h4>
                    {(props.details.email != null)?<p><i className="fa fa-envelope" style={{marginRight: "7px"}}></i>{props.details.email}</p>:""}
                    {(props.details.phone != null)?<p><i className="fa fa-phone" style={{marginRight: "7px"}}></i>{props.details.phone}</p>:""}
                </div>
                <img src={props.member} alt="someMember"></img>
            </div>
            
        </div>
    )
}