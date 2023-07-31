import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import { getRole } from "../api/user";
import { AuthContext } from "../contexts/AuthProvider";
import Spinner from "../Components/Spinner/Spinner";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  //jei requseta niche theke pathassi oitar instant implement er jonno
  useEffect(() => {
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  return (
    <div className="md:flex relative min-h-screen">
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <div>
            <Sidebar 
            role={role}
            loading={loading}
            ></Sidebar>
          </div>
          <div className=" flex-1 md:ml-64">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
