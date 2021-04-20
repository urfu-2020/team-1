import './Panel.css'
import React from 'react';
import {ContactInterface} from '../../dumb/Contact/Contact';
import kettlebell from '../../../pic/kettlebell.svg'
import search from '../../../pic/search.svg'
import {Contact} from "../../dumb/Contact/Contact";

export interface PanelProps {
    contacts: Array<ContactInterface>
    children?: React.ReactNode
}

export function Panel(props: PanelProps) {
    return (
        <div className={'panel-container'}>
            <div className={'panel-head-container'}>
                <input type={'search'} className={'search-bar'}
                       id={'search-bar'} placeholder={'Search'} />
                <img src={kettlebell} alt={'Logo'} className={'App-logo'}/>
            </div>
            <ul className={'panel'}>
                {props.contacts.map(contact =>
                    <Contact name={contact.name} photo={contact.photo}
                             message={contact.message} type={'short'} />
                )}
            </ul>
            <div className={'navigation-block'}>
                <button className={'panel__button_left'} />
                <button className={'panel__button_right'} />
            </div>
        </div>
    );
}