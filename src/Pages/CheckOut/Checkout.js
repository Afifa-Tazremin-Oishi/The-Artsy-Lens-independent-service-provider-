import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const handleSubmit = event => {
        event.preventDefault();
        toast('Your Appointment is confirmed.');
    }
    return (
        <div className='container p-2'>
            <div>
                <h3 className='text-center'>Enter Information for your Appointment</h3>
            </div>
            <div>
                <h5 className='text-center'>You Chossed Service: {serviceId}</h5>
            </div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Service</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose.</option>
                            <option>Legal Information and Advice</option>
                            <option>Consultation to Review Documents</option>
                            <option>Preparation of Documents</option>
                            <option>Representing Clients in Court</option>
                            <option>Civil filing, rescue, declaration of rights and others</option>
                            <option>Check Bounce, Money Laundering Case</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Date</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;