import React from 'react'


export const Element = (props) => {
    return (
        <li className={props.className}>
            {props.children}
        </li>
    )
} 


const Lista = (props) => {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

export default Lista