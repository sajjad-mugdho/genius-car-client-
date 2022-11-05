import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    let { user } = useContext(AuthContext);
    let [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email])
    return (
        <div>
            <h1>orders {order.length} </h1>
        </div>
    );
};

export default Orders;