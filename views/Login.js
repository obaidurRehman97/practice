import React, {useState} from 'react'
import {Alert,Row,Col,Form,Button,Toast,ToastBody,ToastHeader} from 'react-bootstrap'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import {loginAction} from '../redux/action'
import {useHistory} from 'react-router-dom'

const Login = (props) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [toast,setToast] = useState(false)
    const history = useHistory()

    
    const handleSubmit = () => {
        if(email === props.rEmail && password === props.rPassword){
            props.dispatch(loginAction)
            history.push('/home')
        }else if(email !== props.rEmail || password !== props.rPassword){
            setToast(true)
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
                <Col className="float-md-right">
                    <Toast show={toast} onClose={() => setToast(false)}>
                        <ToastHeader>
                            Login Failed
                        </ToastHeader>
                        <ToastBody>
                            Please Login with correct credentials
                        </ToastBody>
                    </Toast>
                </Col>
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
