import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import img from '../../assets/images/checkout/checkout.png';

const CheckOut = () => {


    const { title, _id, price } = useLoaderData();

    const { user } = useContext(AuthContext)

    const handlePlaceOrder = e => {
        e.preventDefault();
        console.log('clicked');
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistard';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, email, phone, message);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }

    return (
        <>
            <div>
                <img className='mx-auto my-10' src={img} alt="" />

            </div>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <form onSubmit={handlePlaceOrder} className='p-10 my-10 bg-base-200 rounded-xl' >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-primary w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full " />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-primary w-full" required />
                    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered input-primary w-full " required />
                </div>
                <textarea name='message' className="textarea textarea-primary w-full py-5 my-5" placeholder="Message"></textarea>
                <input type="submit" className='btn bg-orange-600 mx-auto ' value="Order Confirm" />
            </form>
        </>


    );
};

export default CheckOut;