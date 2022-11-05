import React from 'react';
import { FaBeer, FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className="stats shadow mx-auto w-full my-20 py-20 bg-[#151515] ">

            <div className="stat place-items-center">
                <div className="stat-value text-white"><FaClock></FaClock></div>
                <div className="stat-title text-white my-3">We are open monday-friday</div>
                <div className="stat-value text-orange-600 flex flex-row">7:00 am - 9:00 pm
                </div>

            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-white "><FaPhone></FaPhone></div>
                <div className="stat-title text-white my-3">Have a question?</div>
                <div className="stat-value text-orange-600">+2546 251 2658</div>

            </div>

            <div className="stat place-items-center">
                <div className="stat-value text-white"><FaLocationArrow /></div>
                <div className="stat-title text-white my-3">Need a repair? our address</div>
                <div className="stat-value text-orange-600">Liza Street, New York</div>

            </div>

        </div>
    );
};

export default Stats;