import React, { useState } from 'react';
import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
import PrimaryButton from '../Button/PrimaryButton';
// import { categories } from '../Categories/categoriesData'

const BecomeHostForm = ({ handleSubmit }) => {
    const [checked, setCheked] = useState(false)
    const handleTocheck = () => {
        setCheked(!checked)
        console.log(!checked)
    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-gray-200 w-5/12 pl-5 py-10 rounded-md'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Location
                            </label>
                            <input
                                className='w-96 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='location'
                                id='location'
                                type='text'
                                placeholder='Location'
                                required
                            />

                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Upload Id Document
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />

                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Agree Privacy Policy</span>
                                <input onClick={handleTocheck} type="checkbox" className="checkbox checkbox-success" />
                            </label>
                        </div>
                        <button
                            className='hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white w-96 py-2 rounded-md'
                            disabled={!checked}
                            
                        >Submit Request</button>
                    </div>

                </div>
            </form>
        </div>




    );
};

export default BecomeHostForm;