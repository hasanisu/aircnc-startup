import React, { useEffect, useState } from 'react'
import { getAllHomes } from '../api/services'
import HomeCard from '../Components/Card/HomeCard'
import Spinner from '../Components/Spinner/Spinner'

const AllHome = () => {
  const [loading, setLoading] = useState(false)
  const [allHomes, setAllHomes] = useState([])

  useEffect(()=>{
    setLoading(true)
    getAllHomes()
    .then(data => {
      console.log(data, 'home data')
      setAllHomes(data)
      setLoading(false)
    
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  },[])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className='text-gray-600 body-font'>
          <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {allHomes?.map(singleHome => <HomeCard 
              key={singleHome._id}
              singleHome={singleHome}
              >
              </HomeCard>)}
              </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AllHome
