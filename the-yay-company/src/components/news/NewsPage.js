import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import CardNews from './CardNews';
import PaginationNews from './PaginationNews';

function NewsPage() {
    return (
        <>
            <main className="newsMain">
                <Container>
                    <h1 className="newsHeading">News</h1>
                </Container>    
                <PaginationNews />
                <CardNews />
                <PaginationNews />
            </main>
        </>
    )
}

export default NewsPage
