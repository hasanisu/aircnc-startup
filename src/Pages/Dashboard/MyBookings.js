import { useContext, useEffect, useState } from 'react'
import { getAllBookings, getAllBookingsByEmail } from '../../api/bookings';
import Spinner from '../../Components/Spinner/Spinner';


import { AuthContext } from '../../contexts/AuthProvider';

const MyBookings = () => {
  const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [bookingLoading, setBookingLoading] = useState(false)

    useEffect(() => {
      setBookingLoading(true)
      getAllBookingsByEmail(user?.email).then(data => {
        setBookings(data)
        setBookingLoading(false)
      })
      .catch(err => {
        console.log(err)
        setBookingLoading(false);
      })
      
    }, [user])


    return (
      <>
      {
        bookingLoading ? <Spinner/> :

        <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {/* <tbody>
                  {bookings &&
                    bookings.map(booking => (
                      <TableRow
                        key={booking._id}
                        booking={booking}
                        fetchBookings={fetchBookings}
                      />
                    ))}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
      }
      </>
    );
};

export default MyBookings;