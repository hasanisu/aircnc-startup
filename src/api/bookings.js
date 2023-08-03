// Save a booking

import { async } from "@firebase/util";

export const saveBooking = async (bookingData)=>{

    const url = `http://localhost:7000/bookings`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    const data = await response.json();

    return data
}

// Get booking for individule user
export const getAllBookingsByEmail = async (email)=>{

    const url = `http://localhost:7000/bookings?email=${email}`;
    const response = await fetch(url)
    const data = await response.json();
    return data
}


// Get all bookings for Admin
export const getAllBookings = async ()=>{

    const url = `http://localhost:7000/bookings`;
    const response = await fetch(url)
    const data = await response.json();
    return data
}


//Delete booking
export const deleteBooking = async (id) =>{
    const response = await fetch(`http://localhost:7000/booking/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('aircnc-token')}`
        }, 
    })
    const data = await response.json()
    return data


}

//Create payment intent
export const getPaymentIntent = async(price)=>{
    const url = 'http://localhost:7000/create-payment-intent';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('aircnc-token')}`
        },
        body:JSON.stringify({price})
        
    })
    
    const data = await response.json()
    return data
}