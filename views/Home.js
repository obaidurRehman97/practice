import React from 'react'
import { connect } from 'react-redux'
import {Alert} from 'react-bootstrap'
import {logOutAction} from '../redux/action'

const Home = (props) => {


    const handleLogout = () =>{
        props.dispatch(logOutAction)
        props.history.push('/')
    }

    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )
    }else if(props.loginStatus){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => {props.history.push('/about')}} >About</a>
                        </li>
                        </ul>
                    </div>
                    <li className="nav-item float-md-right">
                            <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
                        </li>
                </nav>

                    <main role="main">

                    
                    <div className="jumbotron">
                        <div className="container">
                        <h1 className="display-3">Hello, {props.rEmail}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna metus, auctor vel urna vitae, luctus blandit turpis. Pellentesque id odio non purus ullamcorper dictum rutrum tempus neque. Nulla commodo elit auctor, fringilla nibh et, consequat nibh. Vivamus egestas, tellus ut commodo pulvinar, mauris felis bibendum massa, eu iaculis est neque non lacus. Nam neque metus, tincidunt eu feugiat quis, lobortis sit amet magna. Donec nec arcu auctor, mattis nulla vel, pulvinar velit. Mauris scelerisque orci nulla, sit amet venenatis diam sodales eget. Maecenas magna dolor, pharetra ut augue nec, pellentesque auctor nibh. Phasellus a blandit justo, a efficitur sapien. Ut maximus ligula sed tortor rutrum, et faucibus lectus venenatis. Fusce imperdiet quam sit amet mi posuere, vel imperdiet felis bibendum. Nulla justo metus, commodo posuere urna ut, faucibus pulvinar risus. Proin finibus vitae nisl eget aliquet. Proin velit tellus, finibus a egestas sed, condimentum quis nunc. Curabitur sit amet fermentum eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                                    Suspendisse potenti. Ut erat ex, posuere ut hendrerit tristique, aliquet vitae nibh. Donec a tristique nunc. Maecenas eget nibh et est lacinia facilisis. Sed pharetra dui eu tristique dictum. Praesent maximus dolor vitae viverra varius. Donec elementum eros eget pulvinar convallis. Integer ut suscipit tellus, non pharetra eros. Mauris nec nisl massa. Etiam in magna rutrum ipsum sodales tincidunt. Nullam ornare orci ac sapien dapibus, a accumsan mi pellentesque. Ut in nunc nec magna tristique sodales a ut massa. Duis in lectus eu ligula ullamcorper vehicula.

                                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tincidunt ex eu felis pharetra dictum. Sed cursus sapien purus, a vestibulum sem pretium eu. Etiam a augue imperdiet odio volutpat tempus eget vestibulum libero. Nunc aliquam tellus non nisl feugiat mollis. Nulla facilisi. Nam rutrum ante eu nisl dapibus pellentesque. Duis faucibus suscipit metus ac placerat. Curabitur id mattis nunc. Quisque enim orci, aliquet pharetra suscipit ut, bibendum sed turpis. Donec sagittis erat quis arcu accumsan placerat.</p>
                        </div>
                    </div>

                    </main>

                    <footer className="container">
                    <p>&copy; Company 2017-2018</p>
                    </footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      loginStatus: state.loginStatus,
      rEmail:state.email,
      rPassword:state.password
    }
}
export default connect(mapStateToProps)(Home)
