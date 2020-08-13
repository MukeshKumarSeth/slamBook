import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class HomePageBody extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:'',
            email:'',
            password:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            gender:''
        }
    }
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col xs={7} style = {{ backgroundImage: `url(/bgGif.gif)`,backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat'}}>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col><h3>Create Your Slambook Account</h3></Col>
                            </Row>
                            <Form className="mb-1">
                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control name="fullName"/>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control name="address" placeholder="1234 Main St" />
                                </Form.Group>
                               
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control name="city" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" name="state" defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control name="zip"/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check inline name="gender" id="male" type="radio" label="Male" />
                                    <Form.Check inline name="gender" id="female" type="radio" label="Female" />
                                    <Form.Check inline name="gender" id="author" type="radio" label="Author" />
                                </Form.Group>
                                <Button variant="primary" type="button">
                                    Submit
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}