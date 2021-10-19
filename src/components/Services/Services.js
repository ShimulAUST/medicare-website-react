import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <Container className="services" id="services">
            <div className="mt-5">
                <h2>Our Services</h2>
            </div>

            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;