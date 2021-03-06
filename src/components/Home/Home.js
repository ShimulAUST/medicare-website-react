import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div id="home">
            <Banner />
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;