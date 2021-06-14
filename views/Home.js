import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import {Alert, Col, Container, Row,Pagination} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {routes} from '../routes'
import InfoSection from '../components/InfoSection'
import PostsServices from '../services/posts.services'
import UsersServices from '../services/users.services'
import Post from '../components/Post'
import PaginationComponent from '../components/PaginationComponent'
const NameContext = React.createContext()


const Home = (props) => {
    const [posts,setPosts] = useState([])
    const [people,setPeople] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
    

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const getAllPosts = async () => {
        let data = await PostsServices.getAllPosts();
        setPosts(data.response)
    }


    const getAllPeople = async () => {
        try {
            let data = await UsersServices.getAllUsers();
            setPeople(data.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllPosts();
        getAllPeople();
    },[])


    
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
                                currentPosts.map((item,index) => {
                                    return(
                                        <Post title={item.title} body={item.body} people={people} id={item.userId}/>
                                    )
                                })
                            }
                            <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
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
