import { Form } from "./form";

const Access = () => {
  return (
    <div className=" relative lg:flex justify-between items-center large:translate-x-[4.3%]">
      {/* DECORATION */}
      {/* vector */}
      <img
        src="images/Highlight 2.svg"
        alt="vector"
        className="absolute hidden lg:block  right-[7%] -top-[7.5%] "
      />
      <img
        src="images/Highlight 2.svg"
        alt="vector"
        className="absolute hidden lg:block  left-[48%] -top-[1%] "
      />

      {/*END OF DECORATION */}

      {/* content */}
      <article className=" pt-8 mb-10  lg:mb-40 lg:w-[40%] lg:container lg:mx-auto lg:max-w-lg"
      data-aos="fade-right"
    data-aos-duration="2000">
        <h1 className=" large:translate-x-[-30%] relative w-fit font-700 text-5xl text-center mb-20 mx-auto  lg:mx-0">
          Priority Access
          {/* line */}
          <img
            src="images/Line 6.svg"
            alt="line"
            className="absolute top-[112%] left-[50%] -translate-x-[50%]"
          />
          {/* ellipse */}
          <img
            src="images/roundEllipse.svg"
            alt="ellipse"
            className="absolute animate-spin -top-40 md:-top-[9rem] lg:-top-[12rem]  left-8  lg:-top-[12rem] md:-top-[7rem]"
          />
          {/* star */}
          <img
            src="images/Star 3.svg"
            alt="star"
            className="absolute w-6 -top-14 right-8 animate-ping "
          />
        </h1>
        <p className="large:translate-x-[-22%] p-8 text-[#101010] relative text-lg large:text-[1.3rem] exl:max-w-md sm:max-w-2xl text-center mx-auto lg:mx-0 lg:p-0 lg:text-left md:text-xl md:max-w-4xl lg:max-w-xl large:mt-16 ">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
            <img src="images/shadowEllipse.svg" className="absolute top-[-18rem] left-[-6rem] "/>
          <img
            src="images/Star 3.svg"
            alt="star"
            className="animate-ping absolute right-[5%] -bottom-[0] lg:bottom-[-2.4rem] "
          />
        </p>
      </article>
      <Form />
    </div>
  );
};

export default Access;
