import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import profile from '../../images/profile/profile.jpg';
const About = () => {
    return (
        <div className='p-5'>
        
            <div className='d-flex justify-content-center'>
                    <img src={profile} className=" w-25 rounded-circle" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center fs-2 fw-bold" style={{color:'orange'}}>Afifa Tazremin Oishi</h5>
                    <p className="card-text">A student of American Internation University. Currently studying BSc. in Computer Science and Engineering. I am passionate, Optimistic as well as positive minded. In my vision, I am always the best. This mindset gives me more advantage to my work. furthermore, I am a good at programming and I work in Frontend and sometime maybe in backend. I have made so many templates and live project for several countries. And the experience I gained through these works, I will always cherish these experiences as my strength. Also patience.</p>
                </div>
        <CardGroup className='mt-5' >
            <Card >
                <Card.Body>
                    <Card.Text>
                <h3 style={{color:'blueviolet'}}>Mission</h3>
                <p>Web developer now must have what it takes to build websites and applications that are innovative and out of the box. However, it is easy to learn and use so, I want to expart on this.</p>
                    </Card.Text>
                </Card.Body>
                
            </Card>
            <Card >
                <Card.Body>
                    <Card.Text>
                    <h3 style={{color:'violet'}}>Vission</h3>
                <p>My vision is to be the largest global mobile/web development company. Focused on constant innovation as my key for achieving the ultimate goal of success.</p>
                    </Card.Text>
                </Card.Body>
                
            </Card>
            <Card >
                <Card.Body>
                    <Card.Text>
                    <h3 style={{color:'yellowgreen'}}>Goals</h3>
                <p>I already knew the fundamentals of HTML and CSS. Any simple website can be built by myself. My goal is to create three websites while also learning advanced topics.</p>
                    </Card.Text>
                </Card.Body>
                
            </Card>
        
        </CardGroup>
                
          
        </div>
                
       
        
    );
};

export default About;