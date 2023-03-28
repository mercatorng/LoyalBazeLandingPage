import React from "react";

const HeroEllipse = () => {
  return (
    <article>
      {/* fullEllipse  */}
      <div className=" animate-bounce non absolute top-44 left-2 w-[150px] smd:w-[140px]    lg:w-[170px] lg:translate-x-4 xl:translate-x-20 ">
        <img src="./images/Ellipse 37.svg" alt="" className="" />
      </div>
      {/* fullEllipse  */}
      <div className="animate-bounce non absolute w-[90px] top-[5rem] right-8 md:right-[10rem] md:top-[6rem] large:top-[6rem] large:right-56 xl:right-96 xl:top-[-1.8rem] ">
        <img src="./images/Ellipse 37.svg" alt="" className="" />
      </div>
      {/* star  */}
      <div className="non absolute top-[16.5rem] right-[2rem] w-[20px] smd:top-[15rem] smax:top-[15rem] md:top-[18rem] md:right-[8rem] lg:top-[18rem] large:top-[16rem]  lg:right-[10.8rem] xl:right-96 ">
        <img src="./images/Star 1.svg" alt="" className="w-1/1" />
      </div>
      {/* star  */}
      <div className=" non absolute hidden md:block md:bottom-[-5rem] md:right-0 lg:right-[3rem] bottom-0 right-[-.02rem]">
        <img src="./images/Star 1.svg" alt="" className="w-1/1" />
      </div>
      {/* star */}
      <div className=" non absolute hidden md:block bottom-0 left-0 md:bottom-[-9rem] md:left-[1rem]  w-[30px] lg:left-24 mt-29">
        <img src="./images/Star 1.svg" alt="" className="w-1/1" />
      </div>
      {/* star  */}
      <div className="non absolute top-[5rem] left-36 w-[15px] md:top-[8rem] md:left-[13rem] lg:left-96 xl:left-[33rem] 2xl:left-96 large:top-[6rem]  ">
        <img src="./images/Star 1.svg" alt="" className="w-1/1" />
      </div>
    </article>
  );
};

export default HeroEllipse;
