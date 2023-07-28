import React from 'react';

const Welcome = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center pb-16'>
            <div className='flex justify-center items-center'>
                <span className='text-5xl font-bold'>Welc</span>
                <span className='w-10 h-10 border-8 border-dashed rounded-full mt-4 animate-spin border-green-400'></span>
                <span className='text-5xl font-bold mr-2'>me</span>
                <span className='text-5xl font-bold'>To</span>

            </div>
            <div className='flex justify-center items-center'>
                <p className='text-2xl mt-4 text-gray-400'>User Dashboard</p>
            </div>

        </div>
    );
};

export default Welcome;