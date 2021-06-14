import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {Alert, Col, Container, Row} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {routes} from '../routes'
import InfoSection from '../components/InfoSection'
import PostsServices from '../services/posts.services'
import Post from '../components/Post'
const NameContext = React.createContext()


const Home = (props) => {
    const [posts,setPosts] = useState([])

    const getAllPosts = async () => {
        let data = await PostsServices.getAllPosts();
        setPosts(data.response)
    }
    
    useEffect(() => {
        getAllPosts()
    },[])
    console.log(posts)
    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )
    }else if(props.loginStatus){
        return(
            <div>
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
                        <NameContext.Provider value="Obaid">
                            <InfoSection/>
                        </NameContext.Provider>
                        <Container>
                            {
                                posts.map((item,index) => {
                                    return(
                                        <Post title = {item.title} body = {item.body}/>
                                    )
                                })
                            }
                        </Container>
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

export {NameContext}
export default connect(mapStateToProps)(Home)
