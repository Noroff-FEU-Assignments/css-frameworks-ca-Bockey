import React from 'react';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Tab1 from "../../Tab images/tab-1.jpg";
import Tab2 from "../../Tab images/tab-2.jpg";
import Tab3 from "../../Tab images/tab-3.jpg";
import AccordionLinks from './AccordionLinks';

function TabsHome() {
    return (
            <Container className="d-none d-md-block">
            <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
                    <Tab eventKey="first" title="First">
                        <Container>
                            <Row>
                                <Col md={4}><Image src={Tab1} alt="Old tv image." fluid /></Col>
                                <Col md={8}>  
                                    <p>
                                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                    </p>
                                    <AccordionLinks />
                                </Col>
                            </Row>
                        </Container>    
                    </Tab>
                    <Tab eventKey="second" title="Second">
                        <Container>
                            <Row>
                                <Col md={4}><Image src={Tab2} alt="Images on the wall." fluid /></Col>
                                <Col md={8}>  
                                    <p>
                                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                    </p>
                                    <AccordionLinks />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="third" title="Third">
                        <Container>
                            <Row>
                                <Col md={4}><Image src={Tab3} alt="Broken window." fluid /></Col>
                                <Col md={8}>  
                                    <p>
                                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                        venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                    </p>
                                    <AccordionLinks />
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs> 
            </Container>
    )
}

export default TabsHome
