import React, { useEffect, useState } from 'react';
import { getPaymentIntent, saveBooking } from '../../api/bookings';
import {useNavigate} from 'react-router-dom';
import {useElements, useStripe, CardElement, PaymentElement} from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import toast, { Toaster } from 'react-hot-toast';

const CheckOutForm = ({bookingData}) => {
    const [clientSecret, setClientSecret] = useState('')
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    
    
    
    useEffect(()=>{
        getPaymentIntent(bookingData?.totalPrice).then(data => {
            
            if(data.clientSecret){

                setClientSecret(data.clientSecret)
            }

        })
    },[bookingData?.totalPrice])

    const handleSubmit = async event =>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        setProcessing(true)
        //confirm card payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: bookingData?.guestName,
                    email: bookingData?.guestEmail,
                },
              
            
            }
        })

        if(intentError){
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else{
            setCardError('')
            setTransactionId(paymentIntent.id)
        }

        //store payment on data base 
        const data ={
            transactionId: paymentIntent.id,
            ...bookingData,
        }
        saveBooking(data)
        .then(data => {
            setProcessing(false);
            console.log(data)
            toast.success('Booking Succesfull!')
            navigate('/dashboard/my-bookings')
        }).catch(err => console.log(err))
    }

   



    return (
        <form onSubmit={handleSubmit} className='my-10 max-w-md'>
      <CardElement
      className='border p-4 rounded-md shadow-md'
      options={{
        style: {
            base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder':{
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#9e2146',
              },
        }
      }}
      />
      <button
      className='mt-4 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-md text-white text-md font-bold px-2 py-1'
       disabled={!stripe || !clientSecret || processing}>pay</button>
      
    </form>
    );
};

export default CheckOutForm;