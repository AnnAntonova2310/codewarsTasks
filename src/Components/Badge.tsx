import React, {FC} from 'react';

type PropsType = {
    length: number
}

export const Badge:FC<PropsType> = ({length}) => {
    let badge;
    if (length === 0) {
        badge = <span className={'zero '}>Никто не тусанёт с тобой сегодня</span>
    } else if (length > 1 && length < 5) {
        badge = `${length} человека тусанёт с тобой сегодня`
    } else {
        badge  = `${length} человек тусанет с тобой сегодня`
    }
    return (
        <h1 className={'h'}>{badge}</h1>
    );
};

