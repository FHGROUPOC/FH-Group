'use client'
import React, { useEffect, useState } from "react";
import DashHeader from "@/components/dashboard/dashheader";
import Editblog from "@/components/dashboard/editblog";
import { useSession } from "next-auth/react";

const addblog = (context) => {
  const { blogid } = context.params;
  const [mydata, setmydata] = useState([])
  const { data: session } = useSession();

  
  useEffect(() => {
    const myfun = async () => {
      if (!blogid || !session?.user?.role) return;

      try {
        let url;
        if (session.user.role === "Admin") {
          url = `/api/blogs/${blogid}`;
        } else if (session.user.role === "doctoradmin") {
          url = `/api/doctorblogs/${blogid}`;
        }

        if (url) {
          const response = await fetch(url);
          if (!response.ok) {
            console.error("Failed to fetch data:", response.statusText);
            return;
          }
          const jsondata = await response.json();
          setmydata(jsondata);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    myfun();
  }, [blogid, session]);


  return (
    <div>
      <DashHeader />
      <Editblog data={mydata} />
    </div>
  );

}
export default addblog;
