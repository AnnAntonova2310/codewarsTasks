import React, {FC} from 'react';
import Bookmark from "./Bookmark";
import {Pagination} from "./Pagination";


type UserType = {}

type TableType = {
    users: Array<any>
    handlerDelete: (id: string) => void
    handlerBookmarkSwitcher: (id: string, newBookmark: boolean) => void
}




export const Table: FC<TableType> = ({users, handlerDelete, handlerBookmarkSwitcher}) => {
    const  count = users.length
    const  pageSize = 14
    const handlerPageChange = (pageIndex: number) => {
        console.log('page: ', pageIndex)
    }
    return (
        <div>
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
                    {users.map((u, i) => {
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
            <Pagination itemsCount={count} pageSize={pageSize} handlerPageChange={handlerPageChange}/>
        </div>
    );
};