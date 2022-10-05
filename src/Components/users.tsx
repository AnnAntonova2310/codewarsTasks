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
        badge = 'Никто не тусанёт с тобой сегодня'
    } else if (users.length > 1 && users.length < 5) {
        badge = `${users.length} человека тусанёт с тобой сегодня`
    } else {
        badge = `${users.length} человек тусанет с тобой сегодня`
    }


    return (
        <>
            {/*/!*<h1>Никто не тусанёт с тобой сегодня </h1>*!/  л = 0*/}
            {/*/!*<h1>1 человек тусанет с тобой сегодня </h1>*!/ л = 1, 5*/}
            {/*/!*<h1>2 человека тусанут с тобой сегодня </h1>*!/  л = 2*/}

            <h1>{badge}</h1>

            {/*<h1>{ users.length === 0 ? 'Никто не тусанёт с тобой сегодня' : null }</h1>*/}


            {users.length > 0 && <table>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Качества</th>
                    <th>Профессия</th>
                    <th>Встретился, раз</th>
                    <th>Оценка</th>
                </tr>
                {users.map((u, i) => {

                    return (
                        <tr key={u._id}>
                            <td>{i + 1}</td>
                            <td>{u.name}</td>
                            <td>{
                                u.qualities.map(q => q.name)
                            }</td>
                            <td>{u.profession.name}</td>
                            <td>{u.completedMeetings}</td>
                            <td>{u.rate}</td>
                            <td>
                                <button onClick={() => handlerDelete(u._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>}
        </>
    );
};

export default Users;