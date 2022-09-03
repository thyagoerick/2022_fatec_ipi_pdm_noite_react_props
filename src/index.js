import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return (
        <div className='container border mt-2'>
            <div className="row border-bottom">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>
            <div className="row">
                <div className="col-sm-8 col-md-6">
                    <div className="card my-2">
                        <div className="card-header text-muted">22/04/2021</div>
                        <div className="card-body d-flex">
                            <div className="div-flex align-items-center">
                                <i className="fas fa-hdd fa-2x"></i>
                            </div> 
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">SSD</h4>
                                <p className="text-center">SSD Kingstom A400 - SATA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(
<App />,
document.querySelector('#root')
)

