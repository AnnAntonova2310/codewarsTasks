import React, {useState} from 'react';
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handlerDelete = () => {
        console.log('Delete')
    }

    return (
        <>
            <h1>Users</h1>
            <table>
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
                            <td>{i+1}</td>
                            <td>{u.name}</td>
                            <td>{
                                u.qualities.map(q => q.name)
                            }</td>
                            <td>{u.profession.name}</td>
                            <td>{u.completedMeetings}</td>
                            <td>{u.rate}</td>
                            <td>{
                                <button onClick={handlerDelete}>Delete</button>
                            }</td>
                        </tr>

                        )

                })}
            </table>
        </>
    );
};

export default Users;