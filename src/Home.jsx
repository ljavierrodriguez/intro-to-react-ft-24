import React from 'react'

function Home(props) { // props = { saludo: "Hola Mundo", name: 'Luis' }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>{props.saludo}</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;