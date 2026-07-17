import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Privacypolicy from "@/components/privacy-policy/privacypolicy"



const privacypolicy = () => {
    return (
        <Wrapper>
            <HeaderOne />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Privacypolicy />

                    <FooterOne />
                </div>
            </div>
        </Wrapper>

    );
};

export default privacypolicy;
