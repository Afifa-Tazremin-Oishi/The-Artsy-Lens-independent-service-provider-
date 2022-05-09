import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

const Blogs = () => {
    return (
        <div className='px-5 mt-5'>


            <h1 className='p-5 justify-content-center text-center'> Question Part</h1>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication.</Accordion.Header>
                    <Accordion.Body className='mt-3'>

                        <p>Authentication is a process involving the verification of the user. Authorization validates privileges of the user but authentications verify its credentials. The authorization has priority over authentication. Authorization asks what permission does the user have in order to access the system.</p>
                        <p>Authentication Example:</p>
                        <p>In computing, authentication is the process of verifying the identity of a person or device. A common example is entering a username and password when you log in to a website. Entering the correct login information lets the website know 1. who you are and 2. that it is actually you accessing the website.</p>
                        <p>Authorization Example:</p>
                        <p>Authorization is the process of giving someone the ability to access a resource. Of course, this definition may sound obscure, but many situations in real life can help illustrate what authorization means so that you can apply those concepts to computer systems. A good example is house ownership.</p>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication? </Accordion.Header>
                    <Accordion.Body>
                    <p>Many characteristics distinguish Google Firebase as the go-to backend development tool for web and mobile projects. It cuts down on development time and effort. It's also an excellent prototyping tool. Firebase is a simple, lightweight, user-friendly, and well-known platform. </p>
                        
                        <p>Common authentication type:</p>
                        <ul>
                            <li>Password-based authentication. Passwords are the most common methods of authentication</li>
                            <li>Multi-factor authentication</li>
                            <li>Computer recognition authentication</li>
                            <li>Token authentication</li>
                            <li>Transaction authentication</li>
                            <li>Biometric authentication</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header> What other services does firebase provide other than authentication ?</Accordion.Header>
                    <Accordion.Body>
                       
                        <p>There are many services which Firebase provides, Most useful of them are:</p>
                        <ul>
                            <li> Firebase Realtime Database</li>
                            <li>Cloud Storage</li>
                            <li>Hosting service</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                            <li>Cloud Functions</li>
                            <li>Google Analytics</li>
                            <li>Cloud Messaging</li>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;