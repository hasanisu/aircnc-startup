import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import SearchForm from '../Components/Form/SearchForm';
import Spinner from '../Components/Spinner/Spinner'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => setAllExp(data))
    setLoading(false)
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className='mt-4'>
        <SearchForm></SearchForm>
      </div>


      <div className='flex-1 mt-10'>

        <div>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to='/coming-soon'><p>See all</p></Link>
          </div>
          <div className="flex justify-between px-4 flex-wrap">
            {
              [...Array(3)].map((exp, i) => <HomeCard
                key={i}
              >

              </HomeCard>)
            }
          </div>
        </div>




        {
          loading ? <Spinner></Spinner>
            :
            <div>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Experienced</p>
                <Link to='/service-details'><p>See all</p></Link>
              </div>
              <div className="flex justify-between px-4 flex-wrap">
                {
                  allExp.map((exp, i) => <ExpCard
                    key={i}
                    exp={exp}
                  >

                  </ExpCard>)
                }
              </div>
            </div>
        }
      </div>




    </div>
  )
}

export default Home
