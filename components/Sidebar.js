import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Sidebar = ({routes}) => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width:280}}>
                
                <ul className="nav nav-pills flex-column mb-auto">
                {
                    routes.map((route,key) => {
                        return(
                            <li className="nav-item">
                                <Link className="nav-link" to={route.path}>
                                {route.name}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
