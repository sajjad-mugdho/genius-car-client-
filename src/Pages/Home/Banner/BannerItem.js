import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-xl w-[1400px] h-[700px]" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn mr-4 btn-outline btn-warning">❮</a>
                <a href={`#slide${next}`} className="btn btn-outline btn-warning">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 ml-6 left-5  top-1/4 ">
                <h1 className='text-6xl ml font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 ml-6 left-5  top-2/4 ">
                <p className='font-normal text-xl w-2/5 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 ml-6 left-5  top-3/4 ">
                <button className="btn btn-warning mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;