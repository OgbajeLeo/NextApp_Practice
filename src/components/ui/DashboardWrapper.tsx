"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import PrivateRoute from "../PrivateRoute";

const DashboardWrapper = ({ children }: any) => {
  const pathName = usePathname();
 const  router =useRouter()


  const handleLogout = () => {
    alert('leooooooooooo')
    localStorage.removeItem("isLoggedIn");
    router.replace('/login')
  }
  return (
    <PrivateRoute>
    <div>
      {/* side bar */}
      <div className="md:block hidden w-[220px] bg-bgColor fixed top-0 left-0 m-0 h-screen shadow-lg border-r-2 px-4 mx-auto border-primaryColor">
        <div className="space-y-3 flex flex-col justify-center group">
          <div className=" !my-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 283 64"
            >
              <path
                fill="black"
                d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
              />
            </svg>
          </div>
          <Link
            href="/dashboard"
            className={
              pathName == "/dashboard"
                ? "bg-primary1 text-white px-2 py-1.5 rounded-[15px]"
                : "hover:bg-primary2 px-2 py-1.5 rounded-[15px]"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/profile"
            className={
              pathName == "/dashboard/profile"
                ? "bg-primary1 text-white px-2 py-1.5 rounded-[15px]"
                : "hover:bg-primar2 px-2 py-1.5 rounded-[15px]"
            }
          >
            Profile
          </Link>
          <div
             
              onClick={handleLogout}
            className="px-2 cursor-pointer py-1.5 font-medium rounded-[15px] text-red-500 !mt-10"
          >
            Log out
          </div>
        </div>
      </div>
      {/* Nav bar */}
      <div className="h-14 m-0 bg-bgColor fixed top-0 md:left-[220px] left-0 font-bold w-full px-4 flex justify-start items-center">
        <div className="sm:hidden block w-10 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 283 64"
          >
            <path
              fill="black"
              d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
            />
          </svg>
        </div>

        <div className="text-lg">
          {pathName == "/dashboard" ? "Dashboard" : "Profile"}
        </div>
      </div>

      <div className="md:ml-[230px] ml-0 mt-16 px-4 ">{children}</div>
      </div>
      </PrivateRoute>
  );
};

export default DashboardWrapper;
