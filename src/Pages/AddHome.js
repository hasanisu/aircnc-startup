import React, { useContext, useState } from 'react'
// import { imageUpload } from '../../api/utils'
import {format} from 'date-fns';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { addHome } from '../api/services'
import AddServiceForm from '../Components/Form/AddServiceForm'
import { AuthContext } from '../contexts/AuthProvider'
import { getImageUrl } from '../api/imageUpload';

const AddHome = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [arrivalDate, setArrivalDate] = useState(new Date())
  const [departureDate, setDepartureDate] = useState(new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000))
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
  
  // handle form submit
  const handleSubmit = event => {

    event.preventDefault()
    setLoading(true)

    const location = event.target.location.value
    const title = event.target.title.value
    const from = format(arrivalDate, 'P')
    const to = format(departureDate, 'P')
    const price = event.target.price.value
    const guests = event.target.total_guest.value
    const bedrooms = event.target.bedrooms.value
    const bathrooms = event.target.bathrooms.value
    const description = event.target.description.value
    // const category = event.target.category.value
    const image = event.target.image.files[0]
    // setUploadButtonText('Uploading...')
    
    getImageUrl(image)
      .then(data => {
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          guests,
          bedrooms,
          bathrooms,
          description,
          image: data,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
          // category,
        }


        // post room data to server
        addHome(roomData)
          .then(data => {
            toast.success('Succesfully add your home')
          })
          .catch(err => console.log(err))
          setLoading(false)
      })
      .catch(err => {
        console.log(err.message)
        setLoading(false)
      })
  }

  // const handleImageChange = image => {
  //   console.log(image)
  //   setUploadButtonText(image.name)
  // }

  // const handleDates = ranges => {
  //   setDates(ranges.selection)
  // }
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
        Add Home
      </h1>
      <AddServiceForm 
       handleSubmit={handleSubmit}
       setArrivalDate={setArrivalDate}
       arrivalDate={arrivalDate}
       departureDate={departureDate}
       setDepartureDate={setDepartureDate}
       loading={loading}
      //  handleImageChange={handleImageChange}
      //  uploadButtonText={uploadButtonText}
      //  dates={dates}
      //  handleDates={handleDates}
      />
    </>
  )
}

export default AddHome
