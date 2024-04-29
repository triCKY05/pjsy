import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import donatebg from '../images/donateimg.png';
import '../../index.css';
import { Footer } from '../resuable/footer';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Donate = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            try {
                console.log('Form data:', { name, phoneNumber, email, address, city, state, country });
                const response = await fetch("http://localhost:5000/donate", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'name': name,
                        'phoneNumber': phoneNumber,
                        'email': email,
                        'address': address,
                        'city': city,
                        'state': state,
                        'country': country
                    }),
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    setValidated(false);
                    form.reset();
                    // Reset the form fields
                } else {
                    console.error('Failed to submit form:', response.statusText);
                }
            } catch (error) {
                console.error('Error submitting form:', error.message);
            }
        } else {
            setValidated(true);
        }
    };

    return (
        <div className='justify-text'>
            <img alt="mission img" src={donatebg} className="img-fluid w-100" />
            <Container>
                <Row>
                    <div className='each-head my-4'>Donate Now</div>
                </Row>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='green-box h5 p-5'>
                            <p>Patna Jesuits continue the mission of Jesus through the service of faith and promotion of
                                justice in the state of Bihar, one of the most backward states in India in terms of economy,
                                education and health care...</p>
                            <br />
                            <p>We are involved in building human communities based on values
                                of freedom, fellowship and justice.</p>
                            <br />
                            <p>Join us in the venture… let us work together to improve the lives of
                                the neglected, the oppressed, the deprived, the most needy people of Bihar.</p>
                            <br />
                            <p>Contact Us to Donate</p>
                            <div className="d-flex align-items-center mb-3">
                                <FaUser className="me-2" />
                                <span>Fr. Joseph Sebastian<br /><h6>( Province Development Director)</h6></span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaPhone className="me-2" />
                                <span>+91 9871528965 <br />+91 9939447576</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaMapMarkerAlt className="me-2" />
                                <span>
                                    St. Xavier’s,
                                    <br />
                                    West Gandhi Maidan,
                                    <br />
                                    Patna – 800 001
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form className='h5 blue-text' noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    isInvalid={validated && !name}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    required
                                    isInvalid={validated && !email}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    pattern="[0-9]{10}"
                                    required
                                    isInvalid={validated && !phoneNumber}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid 10-digit phone number.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Street Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter street address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                    isInvalid={validated && !address}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your street address.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                    isInvalid={validated && !city}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your city.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                    isInvalid={validated && !state}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your state.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter country"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                    isInvalid={validated && !country}
                                />
                                <Form.Control.Feedback type="invalid">Please enter your country.</Form.Control.Feedback>
                            </Form.Group>
                            <Button className='my-4' variant="primary" type="submit">
                                Submit Details
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
