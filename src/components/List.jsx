import React from 'react';

export const List = ({items}) => {
    return (
        <div className="List">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.purpose}</p>
                        <small>{item.what}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};
