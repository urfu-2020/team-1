import React from "react";
import './Contact.css'

export function Contact(props: ContactInterface) {
    return (
        <li className={'contact '+ props.type}>
            <img src={props.photo} alt={'User avatars'} className={'user-avatar'}/>
            <div className={'name-message-container'}>
                <h3 className={'name ' + props.type}>{props.name}</h3>
                <p className={'message ' + props.type}>{props.message}</p>
            </div>
        </li>
    );
}

export interface ContactInterface {
    name: string,
    photo: string,
    message: string,
    type?: string
}
