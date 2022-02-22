import React from "react";

function User({id,name, age,city,email}){
    console.log(name)
    return(
        <div id={id}>
            
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{city}</h3>
            <h3>{email}</h3>
            ----------------
        </div>
    )
}
export default User