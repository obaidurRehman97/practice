import React,{useContext} from 'react'
import {Jumbotron,Button} from 'react-bootstrap'
import {NewContext} from '../index'


const InfoSection = () => {
    const name = useContext(NewContext)
    return (
        <Jumbotron>
            <h1>Hello, {name}</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

export default InfoSection
