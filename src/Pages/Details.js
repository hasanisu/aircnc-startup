import React from 'react'
import { useLoaderData } from 'react-router-dom'
import HomeDetails from './HomeDetails'
import DetailsCart from './DetailsCart'
import Header from './Header'

const Details = () => {
  const roomData = useLoaderData()

  return (
    
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <Header roomData={roomData} />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <HomeDetails roomData={roomData} />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
              <DetailsCart roomData={roomData} />
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Details