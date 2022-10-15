import React, {FC} from 'react';
import Izbrannoe from "./Izbrannoe";

type UserType = {}

type TableType = {
    users: Array<any>
    handlerDelete: (id: string) => void
}


export const Table: FC<TableType> = ({users, handlerDelete}) => {

    return (
        <div>
            {
                users.length > 0 && <table className={'thTd'}>
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
                                <td className={'td'}><Izbrannoe/></td>
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
        </div>
    );
};