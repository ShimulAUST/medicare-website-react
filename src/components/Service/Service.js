import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({ service }) => {
    return (
        <div className="col-md-4 g-5">
            <CardGroup className="h-100">
                <Card>
                    <Card.Img variant="top" src={service.image} height="250px" />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "white" }}>
                        <button className="btn btn-warning form-control btn-block">Details</button>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </div>
    );
};

export default Service;