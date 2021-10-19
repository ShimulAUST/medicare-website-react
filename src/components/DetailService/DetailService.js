import React from 'react';
import { useParams } from 'react-router';

const DetailService = () => {
    const { serviceId } = useParams();
    return (
        <div>
            This is details :{serviceId}
        </div>
    );
};

export default DetailService;