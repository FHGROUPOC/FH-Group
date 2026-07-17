import React from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutHomeFour from "@/components/about/AboutHomeFour";
import PortfolioDetailsArea from "@/components/details/PortfolioDetailsArea";
import portfolio_data from "../../../data/portfolio_data";

// export const metadata = {
//   title: "Portfolio Details Vixan - Digital  Creative Agency Next js Template",
// };

export async function generateStaticParams() {
  return portfolio_data.map((items) => ({
    pid: items?.title.split(" ")[0],
  }));
}

const index = ({ params }) => {
  const { pid } = params;
  const data = portfolio_data.find((item) => item.title.includes(pid));

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea portfolio_single={data} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
