import React from 'react'

export default function Heading(props) {
    return (
        <>
            <h1 className={`${props.color} text-center uppercase my-4 text-3xl font-bold`} >{props.title}</h1>
            <div className={` flex justify-center items-center ${props.color}`}>
                <div className={`line ${props.bgColor}`} ></div>
                <i className= {`fa-solid fa-star mx-4`}></i>
                <div className={`line ${props.bgColor}`} ></div>
            </div>
        </>
    )
}


