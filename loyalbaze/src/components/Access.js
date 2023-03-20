import { Form } from "./form";

const Access = () => {
  return (
    <div className=" relative lg:flex justify-between items-center">
      {/* DECORATION */}
      {/* vector */}
      <img
        src="images/Highlight 2.svg"
        alt="vector"
        className="absolute hidden lg:block  right-[10%] -top-[10%] "
      />
      <img
        src="images/Highlight 2.svg"
        alt="vector"
        className="absolute hidden lg:block  left-[38%] -top-[8%] "
      />

      {/*END OF DECORATION */}

      {/* content */}
      <article className=" pt-8 mb-10  lg:mb-40 lg:w-[40%]">
        <h1 className=" relative w-fit font-bold text-4xl mb-20 mr-auto ml-auto">
          Priority Access
          {/* line */}
          <img
            src="images/Line 6.svg"
            alt="line"
            className="absolute top-[100%] left-[50%] -translate-x-[50%]"
          />
          {/* ellipse */}
          <img
            src="images/Ellipse 37.svg"
            alt="ellipse"
            className="absolute -top-16 left-8 w-[4rem] lg:-top-[12rem] md:-top-[7rem]"
          />
          {/* star */}
          <img
            src="images/Star 3.svg"
            alt="star"
            className="absolute w-6 -top-14 right-8 "
            
          />
        </h1>
        <p className=" relative font-medium  text-center">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
          <img
            src="images/Star 3.svg"
            alt="star"
            className="absolute right-[5%] -bottom-[20%] "
          />
        </p>
      </article>
      <Form />
    </div>
  );
};

export default Access;
