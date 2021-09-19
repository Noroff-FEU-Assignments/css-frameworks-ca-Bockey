import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function FormContact() {
    return (
        <>
            <h1 className="formHeading">Submit your details</h1>
            <form>
                <Container>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicWebsite">
                        <Form.Label>Website</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend className="d-none d-md-block">
                            <InputGroup.Text id="basic-addon3">
                                https://
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Container>
            </form>
            
        </>
    )
}

export default FormContact
