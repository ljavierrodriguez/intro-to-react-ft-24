import React from 'react';
import Home from './Home.jsx';
import Parrafo from './Parrafo.jsx';
import Lista, { Element } from './Lista.jsx'

const App = () => {
    return (
        <>
            <h1 className='text-danger' style={{ color: 'blue'}}>REACT APP</h1>
            <Home saludo="Hola Mundo" name="Luis" />
            <Parrafo className={"text-break"} style={{ color: 'red'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti numquam nostrum quasi 
                ipsum reiciendis explicabo adipisci nam. Corrupti neque blanditiis inventore eligendi distinctio animi 
                provident explicabo at autem necessitatibus.
            </Parrafo>
            <Parrafo className={"text-end"} style={{ color: 'green'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti numquam nostrum quasi 
                ipsum reiciendis explicabo adipisci nam. Corrupti neque blanditiis inventore eligendi distinctio animi 
                provident explicabo at autem necessitatibus.
            </Parrafo>
            <Parrafo className={"text-center"} style={{ color: 'blueviolet'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti numquam nostrum quasi 
                ipsum reiciendis explicabo adipisci nam. Corrupti neque blanditiis inventore eligendi distinctio animi 
                provident explicabo at autem necessitatibus.
            </Parrafo>
            <Parrafo className={"text-start"} style={{ color: 'brown'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti numquam nostrum quasi 
                ipsum reiciendis explicabo adipisci nam. Corrupti neque blanditiis inventore eligendi distinctio animi 
                provident explicabo at autem necessitatibus.
            </Parrafo>

            <Lista className="list-group">
                <Element className="list-group-item">Javascript</Element>
                <Element className="list-group-item">HTML</Element>
                <Element className="list-group-item">CSS</Element>
            </Lista>
        </>
    )
}

export default App;