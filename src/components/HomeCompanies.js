import React, { useState } from 'react';
import decoration from '../assets/Decoration.svg';
import { List } from './List';

const HomeCompanies = () => {
    const containers = {
        fundations: {
            header: 'Fundacjom',
            desc: 'Opis dla fundacji',
            items: [
                {title: 'Fundacja “Dbam o Zdrowie”', purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.', what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'}
            ]
        },
        organizations: {
            header: 'Organizacjom pozarządowym',
            desc: 'Opis dla organizacji',
            items: []
        },
        local: {
            header: 'Lokalnym zbiórkom',
            desc: 'Opis dla lokalnych zbiorek',
            items: []
        }
    };
    const keys = Object.keys(containers);
    const buttons = keys.map(key => ({key, value: containers[key].header}))
    const [container, setContainer] = useState(containers.fundations);

    const handleClick = key => setContainer(containers[key]);

    return (
        <div>
            <div>
                <p>Komu pomagamy</p>
                <img src={decoration}></img>
            </div>
            <div>
                {buttons.map(button => <button key={button.key} onClick={() => handleClick(button.key)}>{button.value}</button>)}
            </div>
            <div>{container.desc}</div>
            <List items={container.items} />
        </div>
    )
}
export default HomeCompanies;