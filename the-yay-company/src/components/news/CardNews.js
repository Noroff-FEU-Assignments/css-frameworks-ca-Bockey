import React from 'react';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsImg1 from "../../News images/news-1.jpg";
import NewsImg2 from "../../News images/news-2.jpg";
import NewsImg3 from "../../News images/news-3.jpg";
import NewsImg4 from "../../News images/news-4.jpg";
import NewsImg5 from "../../News images/news-5.jpg";
import NewsImg6 from "../../News images/news-6.jpg";
import NewsImg7 from "../../News images/news-7.jpg";
import NewsImg8 from "../../News images/news-8.jpg";

function CardNews() {
    return (
       
            <Container className="cardContainer">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg1} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg2} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg3} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg4} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg5} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={NewsImg6} />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button variant="primary">MORE</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg7} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={NewsImg8} />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button variant="primary">MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        
    )
}

export default CardNews
