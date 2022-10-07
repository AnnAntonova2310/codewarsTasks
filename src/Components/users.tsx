import React, {useState} from 'react';
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handlerDelete = (userId: string) => {
        let usersDelete = users.filter(u => u._id !== userId)
        setUsers(usersDelete)
    }
    let badge;
    if (users.length === 0) {
        badge = <span className={'zero '}>Никто не тусанёт с тобой сегодня</span>
    } else if (users.length > 1 && users.length < 5) {
        badge = `${users.length} человека тусанёт с тобой сегодня`
    } else {
        badge  = `${users.length} человек тусанет с тобой сегодня`
    }


    return (
        <>
            {/*/!*<h1>Никто не тусанёт с тобой сегодня </h1>*!/  л = 0*/}
            {/*/!*<h1>1 человек тусанет с тобой сегодня </h1>*!/ л = 1, 5*/}
            {/*/!*<h1>2 человека тусанут с тобой сегодня </h1>*!/  л = 2*/}

            <h1 className={'h'}>{badge}</h1>

            {/*<h1>{ users.length === 0 ? 'Никто не тусанёт с тобой сегодня' : null }</h1>*/}


            {users.length > 0 && <table className={'thTd'}>
                <tr>
                    <th className={'numberHeader'}>№</th>
                    <th className={'nameHeader'}>Имя</th>
                    <th className={'qualityHeader'}>Качества</th>
                    <th className={'professionHeader'}>Профессия</th>
                    <th className={'countHeader'}>Количество<br/>встреч</th>
                    <th className={'estimationHeader'}>Оценка</th>
                    <th ></th>
                </tr>
                {users.map((u, i) => {

                    return (
                        <tr key={u._id} className={'th'}>
                            <td className={'td size'}>{i + 1}</td>
                            <td className={'td'}>{u.name}</td>
                            <td className={'td qualities'}>{
                                u.qualities.map(q => <span className={`badge  ${q.color}`}>{q.name}</span>)
                            }</td>
                            <td className={'td'}>{u.profession.name}</td>
                            <td className={'td'}>{u.completedMeetings}</td>
                            <td className={'td'}>{u.rate}</td>
                            <td className={'td'}>
                               <button className={'button button:hover'} onClick={() => handlerDelete(u._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>}
        </>
    );
};

export default Users;