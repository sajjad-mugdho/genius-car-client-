import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, signOUT } = useContext(AuthContext);
    // console.log(user.displayName);

    const handleSignOut = e => {
        e.preventDefault()
        signOUT().then(result => console.log(result)).catch(err => console.error(err))
    }

    const menuItem = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>
        { user?.email ? <li className='font-semibold'><Link to={'/orders'}>Orders</Link></li>
            :
        <li className='font-semibold'><Link to={'/signup'}>Sign Up</Link></li>
        }
    </>
    return (

        <div className="navbar h-20 mb-12 mt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img src={logo} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="m-3 normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <h2 className=' font-semibold text-2xl'>{user?.email}</h2>
                <button className='btn btn-outline btn-warning ml-3 '>Appointment</button>
                <button onClick={handleSignOut} className='btn btn-outline btn-warning'>Sign Out</button>

            </div>
        </div>

    );
};

export default Header;