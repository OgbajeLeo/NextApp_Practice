'use client'

import DashboardWrapper from "@/components/ui/DashboardWrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Dashboard() {
    const [user, setUser] = useState<any>(null);
    
    useEffect(() => {
        const guest = JSON.parse(localStorage.getItem("currentUser") || "[]");
        setUser(guest)
      
    }, [])


    return (
      <>
        <DashboardWrapper>
          <div className=" flex gap-4">
            <div className="bg-primary1 shadow-2xl text-[20px] sm:text-[30px] p-6 rounded-[15px] w-1/2 h-24 text-justify text-white">
              Welcome
            </div>
            <div className="bg-primary1 shadow-2xl text-[11px] sm:text-[30px] p-6 rounded-[15px] w-1/2 h-24 text-justify text-white">
              {user?.username}
            </div>

            
          </div>

          <div className="bg-bgColor w-full h-4 mt-3"></div>
        </DashboardWrapper>
      </>
    );
}

export default Dashboard