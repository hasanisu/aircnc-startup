import React, { useEffect, useState } from 'react';
import { getAllUser, makeHost } from '../../api/user';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoadings] = useState(false);


    useEffect(() => {
        getUser();
    }, [])

    // make a host 
    const handleRequest = user => {
        makeHost(user).then(data => {
        console.log(data)
        getUser();
        }
        )
    }

    //get all user 
    const getUser = () => {
        setLoadings(true)
        getAllUser().then(data => {
            console.log(data)
            setUsers(data)
            setLoadings(false)
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {users &&
                    users.map((user, i) => <tbody key={i}>
                        <tr>
                            <td>{i + 1}</td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user?.role ? user.role : 'User'}
                            </td>
                            
                                <td>
                                {
                                    user.role && user.role === 'requested' &&
                                    <span onClick={() => handleRequest(user)} >
                                        {loading ? <SmallSpinner /> : <button className="btn btn-ghost btn-xs bg-green-200">Approve Request</button>}
                                    </span>

                                }
                                </td>
                            
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default AllUsers;