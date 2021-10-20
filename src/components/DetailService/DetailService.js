import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DetailService = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setService(data.filter(serv => (serv.id === serviceId))));
    }, [serviceId]);
    return (
        <div>
            {service.length > 0 ?
                <Container className="mt-5">
                    <CardGroup className="h-100">
                        <Card>
                            <Card.Img variant="top" src={service[0].image} height="250px" />
                            <Card.Body style={{ textAlign: 'center' }}>
                                <Card.Title>{service[0].name}</Card.Title>
                                <Card.Text>
                                    {service[0].description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor: "white" }}>
                                <Link className="btn btn-warning form-control btn-block" to='/home'>Back To Home</Link>
                            </Card.Footer>
                        </Card>


                    </CardGroup>
                </Container> : <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

            }
        </div>
    );
};

export default DetailService;