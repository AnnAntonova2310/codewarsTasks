import React, {FC} from 'react';
import _ from 'lodash';
type PaginationType = {
    itemsCount: number
    pageSize: number
    handlerPageChange: (pageIndex: number) => void
    currentPage: number
}

export const Pagination: FC<PaginationType> = ({itemsCount, pageSize, handlerPageChange, currentPage}) => {
    const pageCount = Math.ceil(itemsCount/pageSize)
    if (pageCount===1) return null
    const pages=_.range(1, pageCount+1)
    console.log(pages)
    return (
        <nav>
            <ul className={'pagination'}>
                {pages.map((page)=>
                    <li className={
                        'page-item'+
                        (page===currentPage ? ' item-active' : '')
                    }
                        key={'page_'+page}>
                        <a
                            className={'page-link'}
                            onClick={()=>handlerPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                )}

            </ul>
        </nav>
    )
};
