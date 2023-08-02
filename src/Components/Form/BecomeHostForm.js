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
            <form onSubmit={handleSubmit} className='bg-gray-200 py-10 rounded-md w-80'>
                <div className=''>
                    <div className='space-y-6 px-4'>
                        <div className='space-y-1 text-sm  '>
                            <div>
                            <label htmlFor='location' className='block text-gray-600'>
                                Location
                            </label>
                            <input
                                className='w-72 px-3 py-3 text-gray-800 border bg-green-100 border-green-500 rounded-md '
                                name='location'
                                id='location'
                                type='text'
                                placeholder='Location'
                                required
                            />
                            </div>

                        </div>
                        <div className='space-y-1 text-sm w-72'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Upload Id Document
                            </label>
                            <input
                            className=''
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />

                        </div>
                        <div className="form-control w-72">
                            <label className="label cursor-pointer">
                                <span className="label-text">Agree Privacy Policy</span>
                                <input onClick={handleTocheck} type="checkbox" className="checkbox checkbox-success" />
                            </label>
                        </div>
                        <button
                            className='hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white w-72 px-3 py-3  rounded-md'
                            disabled={!checked}
                            
                        >Submit Request</button>
                    </div>

                </div>
            </form>
        </div>




    );
};

export default BecomeHostForm;