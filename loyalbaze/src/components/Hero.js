import React from "react";
import HeroEllipse from "./HeroEllipse";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <section className="bg-primaryColor mt-0 pb-16">
      <div className="mxauto" id="Home">
        <HeroEllipse />
        {/* hero-info  */}
        <article
          className="md:pt-16 large:pt-8"
         
        >
          {/* hero-heading  */}
          <div className="md:mt-8 xs:mt-7 pt-28" >
            <div data-aos="fade-right"
          data-aos-duration="2000" >
            <h3 className="relative sm:p-4 leading-12 text-white font-sans text-[2.5rem] capitalize font-900 text-center md:text-5xl md:max-w-3xl mx-auto ">
              Turn your customers into{" "}
              <span className="text-androidPurple">Brand Advocates</span>
            </h3>
            {/* hero-text  */}
            <div className="">
              <p className=" z-20 relative sm:p-4 text-white font-400 text-lg text-center md:max-w-4xl large:max-w-[800px]  mx-auto md:text-xl leading-8">
                Loyalbaze, empowers businesses to offer digital, mobile-first
                loyalty programs to their customers. With our AI Powered
                platform, you can easily create and manage custom loyalty and
                rewards programs, track customer engagement, and gain valuable
                insights to improve your business. Sign up now to get early
                access.
              </p>
              </div>
              </div>
              {/* halfEllipse */}
              <div className="non absolute bottom-12 md:bottom-[-2rem] right-0 xxs:w-[3rem] xs:w-[5rem] xs:right-0  sm:w-[9.5rem] sm:right-0 md:w-[12rem] lg:w-[202px]">
                <img src="./images/Ellipse 39.svg" alt="" className="" />
              </div>
            
          </div>
        </article>

        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
