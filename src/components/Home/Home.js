import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';


const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <Teams></Teams>
            <Contact></Contact>
        </div>
    );
};

export default Home;