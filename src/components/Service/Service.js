import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, id, description } = service;
    return (
        <div className="col-md-4 g-5">
            <CardGroup className="h-100">
                <Card>
                    <Card.Img variant="top" src={image} height="250px" />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "white" }}>
                        <Link className="btn btn-warning form-control btn-block" to={`detailService/${id}`}>Details</Link>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </div>
    );
};

export default Service;