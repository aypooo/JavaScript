import React, {Component} from 'react'

const Person = ({name,age})=>{
        return (
            //JSK 문법을 사용
            <>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </>
        )
    }



export default Person