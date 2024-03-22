import React from 'react'

const Parrafo = (props) => {
    return (
        <p className={props.className} style={props.style}>{props.children}</p>
    )
}

export default Parrafo