import React, {FC, useState} from 'react';
import Bookmark from "./Bookmark";
import {Pagination} from "./Pagination";
import {paginate} from "../utils/paginate";
import {GroupList} from "./GroupList";


type UserType = {}

type TableType = {
    users: Array<any>
    handlerDelete: (id: string) => void
    handlerBookmarkSwitcher: (id: string, newBookmark: boolean) => void
}


export const Table: FC<TableType> = ({users, handlerDelete, handlerBookmarkSwitcher}) => {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const handlerPageChange = (pageIndex: number) => {
        console.log('page: ', pageIndex)
        setCurrentPage(pageIndex)
    }

    // const paginate = (users: Array<any>, currentPage: number, pageSize: number)=> {
    //     const startIndex = (currentPage-1)*pageSize
    //     return [...users].splice(startIndex,pageSize)
    // }

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <div>
            <GroupList/>
            {
                count > 0 && <table className={'thTd'}>
                    <tr>
                        <th className={'numberHeader'}>№</th>
                        <th className={'nameHeader'}>Имя</th>
                        <th className={'qualityHeader'}>Качества</th>
                        <th className={'professionHeader'}>Профессия</th>
                        <th className={'countHeader'}>Количество<br/>встреч</th>
                        <th className={'estimationHeader'}>Оценка</th>
                        <th className={'izb'}>Избранное</th>
                        <th></th>
                    </tr>
                    {userCrop.map((u, i) => {
                        // const bookmarkSwitcher = (newBookmark: boolean) => {
                        //     handlerBookmarkSwitcher(u._id, newBookmark)
                        // }

                        return (
                            <tr key={u._id} className={'th'}>
                                <td className={'td size'}>{i + 1}</td>
                                <td className={'td'}>{u.name}</td>
                                <td className={'td qualities'}>{
                                    u.qualities.map((q: { color: string; name: string }) =>
                                        <span className={`badge  ${q.color}`}>{q.name}</span>)
                                }</td>
                                <td className={'td'}>{u.profession.name}</td>
                                <td className={'td'}>{u.completedMeetings}</td>
                                <td className={'td'}>{u.rate}</td>
                                <td className={'td bookmarkWrapper'}>
                                    <Bookmark bookmark={u.bookmark} id={u._id}
                                              handlerBookmarkSwitcher={handlerBookmarkSwitcher}/>
                                </td>
                                <td className={'td'}>
                                    <button className={'button button:hover'}
                                            onClick={() => handlerDelete(u._id)}>Delete
                                    </button>

                                </td>
                            </tr>
                        )
                    })}
                </table>
            }
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                handlerPageChange={handlerPageChange}
                currentPage={currentPage}
            />
        </div>
    );
};