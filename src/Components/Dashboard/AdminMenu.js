import { NavLink } from 'react-router-dom'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'

const AdminMenu = () => {
    return (
        <>
        <NavLink
          to='all-users'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <BsFillHouseAddFill className='w-5 h-5' />
  
          <span className='mx-4 font-medium'>All User</span>
        </NavLink>
        <NavLink
          to='all-bookings'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <MdHomeWork className='w-5 h-5' />
  
          <span className='mx-4 font-medium'>All Bookings</span>
        </NavLink>
        <NavLink
          to='manage-bookings'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <MdOutlineManageHistory className='w-5 h-5' />
  
          <span className='mx-4 font-medium'> Manage Bookings</span>
        </NavLink>
      </>
    );
};

export default AdminMenu;