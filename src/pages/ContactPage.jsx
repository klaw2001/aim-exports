import React from "react";
import GlobalHero from "../components/GlobalHeroSection/GlobalHero";
import FormBox from "../components/Contact/FormBox";
import EnquiryBox from "../components/Contact/EnquiryBox";

const ContactPage = () => {
  return (
    <>
      <GlobalHero
        title={"Contact"}
        breadcrumb={"Contact"}
        para={"Reach Out."}
      />
      <FormBox/>
      <EnquiryBox/>
    </>
  );
};

export default ContactPage;
