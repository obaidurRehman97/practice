import React,{useEffect,useState} from 'react'
import {Row,Col,Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {routes} from '../routes'
import axios from 'axios'



const People = (props) => {
    const [people,setPeople] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData().then(value => setPeople(value))
    },[])

    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )
    }else if(props.loginStatus){
        return (
            <div>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <Sidebar routes={routes}/>
                    </Col>
                    <Col sm={10}>
                        <Row>
                        {people.map((item,index) => 
                            <InfoCard info={item} />
                        )}
                        </Row>
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
export default connect(mapStateToProps)(People)
