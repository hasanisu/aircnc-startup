import React, { useContext, useEffect, useState } from 'react';
import { getImageUrl } from '../../api/imageUpload';
import { getRole, hostRequest } from '../../api/user';
import BecomeHostForm from '../../Components/Form/BecomeHostForm';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeAhost = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    //jei requseta niche theke pathassi oitar instant implement er jonno
    useEffect(() => {
        getRole(user?.email)
            .then(data => {
                console.log(data)
                setRole(data)
                setLoading(false)

            })
    }, [user])

    // host hobar jonno request process
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const image = form.image.files[0];
        getImageUrl(image).then(data => {
            const hostData = {
                location: location,
                documentImg: data,
                role: 'requested',
                email: user.email,
            }
            hostRequest(hostData).then(data => console.log(data))
        })


    }
    return (
        <>
            {
                role ? (
                    <div className='h-screen text-3xl  text-gray-600 flex flex-col justify-center items-center'>
                        Request Sent, wait for admin approval
                    </div>
                )
                    :
                    (

                        <>
                            {!loading && <BecomeHostForm
                                handleSubmit={handleSubmit}
                            ></BecomeHostForm>}
                        </>

                    )
            }
        </>
    );
};

export default BecomeAhost;