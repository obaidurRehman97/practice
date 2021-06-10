import React, {useState} from 'react'
import {Alert,Row,Col,Form,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {loginAction} from '../redux/action'
import {useHistory} from 'react-router-dom'

const Login = (props) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()
    const handleSubmit = () => {
        if(email === props.rEmail && password === props.rPassword){
            props.dispatch(loginAction)
            history.push('/home')
        }
    }
    
    return (
        <Alert variant='primary' className="d-flex justify-content-center">
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}  onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                    
                        <Button variant="primary" onClick={handleSubmit}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Alert>
    )
}
const mapStateToProps = (state) => {
    return {
      loginStatus: state.loginStatus,
      rEmail:state.email,
      rPassword:state.password
    }
}
export default connect(mapStateToProps)(Login)
