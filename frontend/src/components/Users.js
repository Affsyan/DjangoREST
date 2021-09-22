import React from 'react'

const UsersItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}


const UsersList = ({users}) => {
    return (
        <div>
            <table>
                <th>username</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                {users.map((a) => <UsersItem user={a} />)}
            </table>
        </div>
    )
}

export default UsersList