import React, {FC} from 'react';

type PaginationType = {
    itemsCount: number
    pageSize: number
    handlerPageChange: (pageIndex: number)=> void
}

export const Pagination:FC<PaginationType> = ({itemsCount, pageSize}) => {
    return (
        <div>{itemsCount}</div>
    )
};
