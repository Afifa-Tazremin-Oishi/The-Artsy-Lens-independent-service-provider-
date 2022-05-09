import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner'
import ContactSection from '../ContactSection/ContactSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;