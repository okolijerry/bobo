import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import Faqs from "./components/faqs/Faqs";

const page = () => {
  return (
    <>
      |
      <Header />
      <Services />
      <Testimonial />
      <Faqs />
    </>
  );
};

export default page;
