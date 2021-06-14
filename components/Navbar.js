import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {logOutAction} from '../redux/action'




const Navbar = (props) => {
    const handleLogout = () =>{
        props.dispatch(logOutAction)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsCollapse" aria-controls="navbarsCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='/people'>People</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            
                        </ul>
                        <Link className="btn btn-primary" to='/' onClick={handleLogout}>Log out</Link>
                    </div>
                    
                </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      loginStatus: state.loginStatus,
      rEmail:state.email,
      rPassword:state.password
    }
}

export default connect(mapStateToProps)(Navbar)
