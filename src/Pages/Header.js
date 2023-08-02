import React from 'react';
import Heading from './Heading';

const Header = (roomData) => {
    console.log(roomData.roomData, 'img')
    return (
        <>
            <Heading title={roomData.title} subtitle={roomData.location} />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src={roomData.roomData.image}
                    alt='header image'
                />
            </div>
        </>
    );
};

export default Header;