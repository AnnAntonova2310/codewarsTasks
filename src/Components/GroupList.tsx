import React, {FC} from 'react';

type GroupListType = {
    items: Promise<any> | undefined
    onItemSelect: () => void
}

export const GroupList:FC<GroupListType> = ({items}) => {
    return (
        <ul className={'list-group'}>
            <li className={'list-group-item'}>An item</li>
            <li className={'list-group-item'}>A second item</li>
            <li className={'list-group-item'}>A third item</li>
            <li className={'list-group-item'}>A fourth item</li>
            <li className={'list-group-item'}>A fifth one</li>
        </ul>
    );
};
