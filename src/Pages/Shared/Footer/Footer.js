

import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{color:"wHITE" , padding :"20px ",backgroundColor:"SlateBlue",fontWeight: "900"}} className='text-center mt-5'>
            <p><small>Copyright @ {year} Afifa All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;