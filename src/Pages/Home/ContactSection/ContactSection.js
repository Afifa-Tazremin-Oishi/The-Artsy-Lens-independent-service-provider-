import React from 'react';
import './ContactSection.css'
import contactUs from '../../../images/services/contactUs.jpg'

const ContactSection = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (

        <div className='container'>
            <div className="card my-3 py-3  " style={{ border: 'none' }} >
                
                <div className="row g-0">
                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <img src={contactUs} className="img-fluid " alt="..." />
                    </div>

                    <div className="col-md-6 d-flex align-items-center" >

                        <div className="card-body  mx-2">
                            

                            <h3 style={{color: 'yellowgreen'}}> <strong>A picture is a poem without words</strong></h3>
                            <p style={{textAlign:'justify'}}>Beauty photography is a genre of photography that involves shooting close-up images of subjects, highlighting their attractive features for editorial, commercial, or personal purposes.</p>

                           <li>afifatazreminoishi@gmail.com</li>
                           <li>+1 989 765 8976</li>
                           <li>White House, Washington DC, United State</li>


                        </div>

                    </div>

                </div>
            </div>
        </div>

    
    );
};

export default ContactSection;