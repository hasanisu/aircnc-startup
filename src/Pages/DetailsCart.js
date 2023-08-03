import React, { useContext, useState } from 'react'
import { formatDistance, differenceInCalendarDays, format } from 'date-fns'
// import BookingModal from '../Modal/BookingModal'
import PrimaryButton from '../Components/Button/PrimaryButton'
import { AuthContext } from '../contexts/AuthProvider';
// import { addBooking, updateStatus } from '../../api/bookings'
// import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';

const DetailsCart = ({ roomData }) => {
     const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false)
//   const closeModal = () => {
//     setIsOpen(false)
//   }
  const { user } = useContext(AuthContext);

    let totalNights = differenceInCalendarDays(
        new Date(roomData.to),
        new Date(roomData.from)
    )

//Price Calculation
let sub_total = parseFloat(roomData?.price) * totalNights;
let total = sub_total + 21 + 10;

const handleReserve =()=>{
    const data = {
        roomData: roomData,
        totalNights: totalNights,
        totalPrice: total,
    }
    navigate('/checkout', {state: data})
    
}

  // Booking state
//   const [bookingInfo, setBookingInfo] = useState({
//     guest: { name: user.displayName, email: user.email, image: user.photoURL },
//     host: roomData.host.email,
//     location: roomData.location,
//     price: totalPrice,
//     to: value.endDate,
//     from: value.startDate,
//     title: roomData.title,
//     roomId: roomData._id,
//     image: roomData.image,
//   })
//   const handleSelect = ranges => {
//     setValue({ ...value })
//   }

  // const modalHandler = () => {
  //   addBooking(bookingInfo)
  //     .then(data => {
  //       console.log(data)
  //       updateStatus(roomData._id, true)
  //         .then(data => {
  //           console.log(data)
  //           toast.success('Booking Successful!')
  //           navigate('/dashboard/my-bookings')
  //           closeModal()
  //         })
  //         .catch(err => console.log(err))
  //     })
  //     .catch(err => console.log(err))
  // }

    return (
        <div className='p-4 w-full rounded shadow-lg'>

        <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
        {roomData.price}/<span className='font-thin'>night</span>
        </h1>
        
        <div className='flex gap-1 mb-2'>
            <StarIcon className='h-4 w-4 text-green-500'/>
            <span>4.8 (43 views)</span>
        </div>

        <p>Dates</p>
        <div className='flex justify-between items-center p-2 border mt-1 mb-2'>
            <div>{format(new Date(roomData?.from), 'P')}</div>
            <div><ArrowRightIcon className='h-4 w-4 text-gray-900'/></div>
            <div>{format(new Date(roomData?.to), 'P')}</div>
        </div>

        <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>Maximum Guest</span>
            <span className='ml-auto text-gray-900'>{roomData?.total_guest}</span>

        </div>

        <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'>${roomData?.price} * {totalNights} nights</span>
            <span className='ml-auto text-gray-900'>${sub_total}</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'> Cleaning Fee</span>
            <span className='ml-auto text-gray-900'>$10</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500'> Service Fee</span>
            <span className='ml-auto text-gray-900'>$21</span>
        </div>
        <div className='flex border-t border-gray-200 py-2'>
            <span className='text-gray-500 font-bold'> Total</span>
            <span className='ml-auto text-gray-900'>${total}</span>
        </div>

        <div  className='p-4'>
        <PrimaryButton classes={'w-full py-2 rounded-md'}>
            <span onClick={handleReserve}>Reserve</span>
        </PrimaryButton>
      </div>


    </div>
    );
};

export default DetailsCart;