import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationComponent = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <Pagination style={{marginTop:20}}>
            {
                pageNumbers.map(num => (
                    <Pagination.Item onClick={() => paginate(num)}>{num}</Pagination.Item>
                ))
            }
        </Pagination>
    )
}

export default PaginationComponent
