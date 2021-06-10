import React from 'react'
import { connect } from 'react-redux'
import {Alert, Col, Container, Row} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {routes} from '../routes'
import InfoSection from '../components/InfoSection'

const Home = (props) => {
    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )
    }else if(props.loginStatus){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Sidebar routes={routes}/>
                    </Col>
                    <Col>
                        <InfoSection email={props.rEmail}/>
                    </Col>
                </Row>
            </Container>
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
