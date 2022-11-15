import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    let { user } = useContext(AuthContext);
    let [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = (_id) => {
        const proceed = window.confirm('Do you want to delete this Order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE'
            }

            ).then(res => res.json()).then(data => {
                console.log(data);
                if (data.deleteCount > 0) {
                    alert('Delete Succsesfuly')
                    const remaining = orders.filter(odr => orders._id !== _id)
                    setOrders(remaining)
                }
            })
        }
    }

    const handleUpdateStatus = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application.json"
            },
            body: JSON.stringify({ status: "Approved" })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modificationCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.filter(odr => odr._id === id);
                    approving.status = "Approved";
                    const newOrder = [...remaining, approving];
                    setOrders(newOrder);
                }
            })

    }
    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>

                            <th>Name</th>
                            <th>Service</th>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdateStatus={handleUpdateStatus}
                            ></OrderRow>)
                        }
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default Orders;