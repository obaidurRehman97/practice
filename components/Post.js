import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Post = ({title,body,postId}) => {
    return (
        <Card style={{marginTop:10}}>
            <Card.Header as="h5">Post No. {postId}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Post
