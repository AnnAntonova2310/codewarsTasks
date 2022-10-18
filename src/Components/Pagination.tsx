import React, {FC} from 'react';
import _ from 'lodash';
type PaginationType = {
    itemsCount: number
    pageSize: number
    handlerPageChange: (pageIndex: number) => void
}

export const Pagination: FC<PaginationType> = ({itemsCount, pageSize}) => {
    const pageCount = Math.ceil(itemsCount/pageSize)
    if (pageCount===1) return null
    const pages=_.range(1, pageCount+1)
    console.log(pages)
    return (
        <nav>
            <ul className={'pagination'}>
                {pages.map((page)=>
                    <li className={'page-item'} key={'page_'+page}>
                        <a className={'page-link'}>{page}</a>
                    </li>
                )}

            </ul>
        </nav>
    )
};
