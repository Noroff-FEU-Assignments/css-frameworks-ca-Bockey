import React from 'react';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Tab1 from "../../Tab images/tab-1.jpg";
import Tab2 from "../../Tab images/tab-2.jpg";
import Tab3 from "../../Tab images/tab-3.jpg";
import AccordionLinks from './AccordionLinks';
import Container from 'react-bootstrap/esm/Container';


function AccordionHome() {
    return (
            <Container className="d-md-none">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                First
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                    Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                </p>
                                <Image src={Tab1} alt="Old tv image." fluid />
                                <AccordionLinks />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Second
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                    Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                </p>
                                <Image src={Tab2} alt="Images on the wall." fluid />
                                <AccordionLinks />
                            </Card.Body>
                            
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Third
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p>
                                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                                    Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.    
                                </p>
                                <Image src={Tab3} alt="Broken window." fluid />
                                <AccordionLinks />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        
        
    )
}

export default AccordionHome
