import React from 'react'
import User from './User'

function UserList({ users }){
    return (
        <>
            {users.map( (user, id) => {
                if(user.age>0 && Number.isInteger(user.age)
                && user.email.indexOf('@') !== -1&&user.email.indexOf('.com')!== -1){
                    return (
                        <User key={id} {...user}></User>
                    )
                
                }
                else
                    return <></>
                
            })}
        </>
    )
}
export default UserList