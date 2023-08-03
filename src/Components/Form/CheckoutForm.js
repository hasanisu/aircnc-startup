import React, { useEffect, useState } from 'react';
import { getPaymentIntent } from '../../api/bookings';

const CheckOutForm = ({bookingData}) => {
    const [clientSecret, setClientSecret] = useState('')
    
    useEffect(()=>{
        getPaymentIntent(bookingData?.totalPrice).then(data => {
            setClientSecret(data.clientSecret)
            console.log(clientSecret)
        })
    },[bookingData?.totalPrice])
    return (
        <div>
          {/* chekc form */}
        </div>
    );
};

export default CheckOutForm;