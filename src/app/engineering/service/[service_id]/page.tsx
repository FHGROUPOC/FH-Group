import AboutHomeFour from "@/components/about/FabricationAboutHomeFour";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import HeroServiceDetails from "@/components/hero/HeroServiceDetails";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";
import Service_data from "@/data/fabrication_service_data";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import FabHeader from "@/layouts/headers/FabHeader";
import React from "react";
import { getServerSession } from "next-auth";
import { ToastContainer } from "react-toastify";

export async function generateMetadata({ params }: any) {
  const { service_id } = params;
  const getdata = Service_data.find(
    (items: any) => items?.linktitle === service_id
  );

  return {
    title: getdata?.title,
    description: getdata?.desc,
    openGraph: {
      title: getdata?.title,
      description: getdata?.desc,
      images: getdata?.img,
      url: `https://www.fhgroupoc.com/Engineering/service/${getdata?.linktitle}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: getdata?.title,
      description: getdata?.desc,
      images: getdata?.img,
    },
  };
}

export async function generateStaticParams() {
  return Service_data.map((items) => ({
    service_id: items?.linktitle,
  }));
}

const index = async ({ params }: any) => {
  const { service_id } = params;
  const session = await getServerSession();
  const thisService = Service_data.find(
    (items: any) => items.linktitle === service_id
  );

  return (
    <Wrapper>
      <FabHeader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails thisService={thisService} />
            <ServiceAreaDetails thisService={thisService} />
            {/* <DetailsBanner /> */}
            {/* <ServiceDetailsFaq thisService={thisService} /> */}
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default index;
