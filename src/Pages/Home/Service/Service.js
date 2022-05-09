import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, picture, price, about } = service;
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card className='m-5 shadow'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{fontWeight: "700"}}>Price: {price}</Card.Text>
                    <Card.Text style={{textAlign:"justify"}}>
                        {about}
                    </Card.Text>
                    <Button  onClick={() => navigateToDetail(id)} variant="primary">CheckOut</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;