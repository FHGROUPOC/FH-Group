import React from "react";
import DashHeader from "@/components/dashboard/dashheader";
import Editclient from "../../../../components/dashboard/editclient";

const addblog = async (context) => {
  const { clientid } = context.params;
  const data = await (
    await fetch(`${process.env.NEXTAUTH_URL}/api/clients/${clientid}`, {
      cache: "no-store",
    })
  ).json();

  return (
    <div>
      <DashHeader />
      <Editclient data={data} />
    </div>
  );
};

export default addblog;
