import AboutHomeFour from "@/components/about/AboutHomeFour";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Eachclientdata from "../../../components/details/EachClientDetail";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { clientid } = params; // Get the blog ID from the URL parameter
  const data = await fetch(
    `${process.env.NEXTAUTH_URL}/api/clients/${clientid}`,
    {
      cache: "no-cache", // Ensures fresh data on every request
    }
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: data?.title,
    description: data?.blog_detail[0]?.description,
    openGraph: {
      title: data?.title,
      description: data?.blog_detail[0]?.description,
      images: data?.mainimg,
      url: `https://www.fhgroupoc.com/client/${data?.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.blog_detail[0]?.description,
      images: data?.mainimg,
    },
  };
}

const index = async ({ params }) => {
  const { clientid } = params; // Get the blog ID from the URL parameter
  const data = await fetch(
    `${process.env.NEXTAUTH_URL}/api/clients/${clientid}`,
    {
      cache: "no-cache", // Ensures fresh data on every request
    }
  ).then((res) => res.json());
  // const {clientid} = context.params;
  // const data = await (await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/${clientid}`,{cache:'no-cache'})).json();
  // const metadata = dynamicMetadata(data);

  return (
    <>
      <Wrapper clientdata={data}>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Eachclientdata client={data} />
              <AboutHomeFour />
            </main>
            <FooterOne />
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default index;
