import React from 'react'

import Pagination from 'react-bootstrap/Pagination'
import Container from "react-bootstrap/Container";

function PaginationNews() {

    return (
            <Container>
            <Pagination>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>
            </Container>   
           

            
        
    )
}

export default PaginationNews
