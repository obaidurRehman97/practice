import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import {connect} from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {routes} from '../routes'

const About = (props) => {
    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )}
        else if(props.loginStatus){
            return (
                <div>
                    <Row>
                        <Col>
                            <Navbar/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <Sidebar routes={routes}/>
                        </Col>
                        <Col md={8}>
                            <div className="text-center">
                            <h1 className="cover-heading">About us.</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna metus, auctor vel urna vitae, luctus blandit turpis. Pellentesque id odio non purus ullamcorper dictum rutrum tempus neque. Nulla commodo elit auctor, fringilla nibh et, consequat nibh. Vivamus egestas, tellus ut commodo pulvinar, mauris felis bibendum massa, eu iaculis est neque non lacus. Nam neque metus, tincidunt eu feugiat quis, lobortis sit amet magna. Donec nec arcu auctor, mattis nulla vel, pulvinar velit.
                                    Mauris scelerisque orci nulla, sit amet venenatis diam sodales eget. Maecenas magna dolor,
                                    pharetra ut augue nec, pellentesque auctor nibh. Phasellus a blandit justo, a efficitur sapien. Ut maximus ligula sed tortor rutrum, et faucibus lectus venenatis. Fusce imperdiet quam sit amet mi posuere, vel imperdiet felis bibendum. Nulla justo metus, commodo posuere urna ut, faucibus pulvinar risus. Proin finibus vitae nisl eget aliquet. Proin velit tellus, finibus a egestas sed, condimentum quis nunc. Curabitur sit amet fermentum eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse potenti.</p>
                                    <p className="lead">
                                <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                            </p>
                            </div>
                        </Col>
                    </Row>
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
export default connect(mapStateToProps)(About)
