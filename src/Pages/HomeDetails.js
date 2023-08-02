import { HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const HomeDetails = ({roomData}) => {


    return (
        <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div
          className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
        >
          <div>Hosted by {roomData.host.name}</div>

          <img
            className='rounded-full'
            height='30'
            width='30'
            alt='Avatar'
            src={roomData.host.image}
          />
        </div>
        <div
          className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
        >
          <div>{roomData.guests} guests</div>
          <div>{roomData.bedrooms} rooms</div>
          <div>{roomData.bathrooms} bathrooms</div>
        </div>
      </div>

      <hr />

      <div className='flex flex-col justify-start my-2 max-w-7xl sm:flex-row'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-gray-500'>
            <HomeIcon/>
        </div>
        <div className='flex-grow prose sm:text-left prose-md'>
            <p className='text-gray-500 text-xl'>Entire Home</p>
            <p className='text-gray-400'>
                You will have the condominium to yourself.
            </p>
        </div>
      </div>
      

      <div className='flex flex-col justify-start my-2  max-w-7xl sm:flex-row'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-gray-500'>
            <HomeIcon/>
        </div>
        <div className='flex-grow sm:text-left '>
            <p className='text-gray-500 text-xl'>Self Check-in</p>
            <p className='text-gray-400'>
                You can check in with the doorman
            </p>
        </div>
      </div>

      <div className='flex flex-col justify-start my-2  max-w-7xl sm:flex-row'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-gray-500'>
            <HomeIcon/>
        </div>
        <div className='flex-grow sm:text-left '>
            <p className='text-gray-500 text-xl'>Sparklink clean</p>
            <p className='text-gray-400'>
               10 recent guest said this place was sparkling clean
            </p>
        </div>
      </div>

      <div className='flex flex-col justify-start my-2  max-w-7xl sm:flex-row'>
        <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-gray-500'>
            <HomeIcon/>
        </div>
        <div className='flex-grow sm:text-left '>
            <p className='text-gray-500 text-xl'>{roomData.host.name} is Supar host</p>
            <p className='text-gray-400'>
               Supar hosts are experienced, highly rated hosts who are commited to prividing great stays for guests
            </p>
        </div>
      </div>
      <hr />
      
      


      <div
        className='
        text-lg font-light text-neutral-500'
      >
        {roomData.description}
      </div>
      <hr />
    </div>
    );
};

export default HomeDetails;