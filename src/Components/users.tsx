import React, {useState} from 'react';
import api from '../api'
import {Badge} from "./Badge";
import {Table} from "./Table";


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    const handlerDelete = (userId: string) => {
        let usersDelete = users.filter(u => u._id !== userId)
        setUsers(usersDelete)
    }


    return (
        <>
            <Badge length={users.length}/>
            <Table users={users} handlerDelete={handlerDelete}/>
        </>
    )
}
export default Users;