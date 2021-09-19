import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import FormContact from './FormContact';
import InfoContact from './InfoContact';

function ContactPage() {
    return (
        <>
            <main className="contactMain">
                <Container className="formContainer">
                    <Row>
                        <Col md={6} className="order-md-2">
                            <InfoContact />
                        </Col>
                        <Col md={6}>
                            <FormContact />
                        </Col>
                    </Row>
                </Container>   
            </main>
        </>
        
    )
}

export default ContactPage
