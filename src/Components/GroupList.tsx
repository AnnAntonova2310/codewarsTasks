import React, {FC} from 'react';
import {it} from "node:test";

type GroupListType = {
    items: any
    onItemSelect: () => void
    valueProperty: string
    contentProperty: string
}

export const GroupList:FC<GroupListType> = ({items, valueProperty, contentProperty, onItemSelect}) => {
    return (
        <ul className={'list-group'}>
            {Object.keys(items).map(item=>
                <li key={items[item][valueProperty]} className={'list-group-item'}>{items[item][contentProperty]}</li>)
            }
        </ul>
    );
};
