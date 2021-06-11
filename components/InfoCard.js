import React from 'react'
import {Card,ListGroup,ListGroupItem,Row} from 'react-bootstrap'
import PlaceHolder from '../assets/Portrait_Placeholder.png'

const InfoCard = ({info}) => {
    return (
        <Card style={{width: '20rem',marginRight:20}}>
            <Card.Img variat="top" src={PlaceHolder} />
            <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Row>Email: {info.email}</Row></ListGroupItem>
                    <ListGroupItem><Row>Phone: {info.phone}</Row></ListGroupItem>
                    <ListGroupItem><Row>Website: {info.website}</Row></ListGroupItem>
                    <ListGroupItem><Row>Company: {info.company.name}</Row></ListGroupItem>
                </ListGroup>
            </Card.Body>

        </Card>
    )
}

export default InfoCard
