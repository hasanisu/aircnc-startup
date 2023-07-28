// Save a booking

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


// Get booking for Admin
export const getAllBookings = async ()=>{

    const url = `http://localhost:7000/bookings`;
    const response = await fetch(url)
    const data = await response.json();
    return data
}