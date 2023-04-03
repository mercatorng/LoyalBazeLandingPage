import React, { useEffect, useRef } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { useGlobalContext } from "../context";

const HeroForm = () => {
  const { messageOpen, name, email, changeName, changeEmail} = useGlobalContext();
  const emailContainer = useRef(null);
  const nameContainer = useRef(null);


  // useEffect(() => {
  //   if (
  //     emailContainer.current.value === "" ||
  //     nameContainer.current.value === ""
  //   ) {
  //     return messageClose();
  //   }
  // }, [messageClose]);

//   const formSubmit = (e)=>{
// e.preventDefault()
// console.log('hello');
//   }

  return (
    <>
      {/* hero form  */}
      <article className="relative">
        {/* vector  */}
        <div className="absolute bottom-[12rem] right-[1rem] w-[10%]  smd:right-[2rem] smax:right-[4rem] md:right-[6rem] lg:right-[9.5rem] xlg:right-[10rem] large:bottom-[15rem] large:right-[14rem] exl:right-[16rem] ">
          <img src="./images/Vector.svg" alt="" />
        </div>
        {/* end of vector  */}

        {/* forms-center */}
        <form onSubmit={messageOpen}>
        <div data-aos="fade-up"
        data-aos-duration="2000" className="mt-8 grid place-items-center space-y-6 ">
          <div className="relative flex items-center">
            <BiUserCircle className="text-3xl absolute ml-2 text-white" />
            <input
              type="text"
              placeholder="Tell us your name"
              spellCheck="false"
              className="btn-width xs:w-[300px] xxs:w-[100%] sm:w-96 pr-[1rem] w-[100%] pl-12 bg-transparent placeholder:text-white border border-white p-2 rounded-md font-501 text-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
              ref={nameContainer} value={name}  onChange={changeName}
            />
          </div>
          <div className="relative flex items-center">
            <BiEnvelope className="absolute text-3xl ml-2 text-white" />
            <input
              type="email"
              spellCheck="false"
              placeholder="Enter your email address"
              className="btn-width xxs:w-[100%] xs:w-[300px] sm:w-96 pr-[1rem] pl-12 bg-transparent placeholder:text-white border border-white p-2 rounded-md  font-501 text-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
              ref={emailContainer} value={email} onChange={changeEmail}
            />
          </div>
          {/* button  */}
        </div>
        
      {/* </article> */}
      <div
        className="grid place-items-center mt-8"
      >
        <button type="submit"
          className=" text-white  xs:w-[300px] xxs:w-[100%] sm:w-96  md:w-96 bg-gradient-to-r from-darkGradient to-lightGradient rounded-full p-3 focus:outline-none"
            
        >
          <p>Get Early Access</p>{" "}
        </button>
      </div>
      </form>
      
     
      {/* members  */}
      <div className="flex gap-[6rem] items-center justify-center  pb-16" data-aos="fade-up"
        data-aos-duration="2000">
        {/* members-center  */}
        <article className="flex mt-4 relative ">
          <div className=" absolute-left-4 rounded-[50%] w-8 h-8 bg-androidBlue grid place-items-center z-40">
            <p className=" text-white">G</p>
          </div>
          <div className="absolute left-6 rounded-[50%] w-8 h-8 bg-androidPurple grid place-items-center  z-30">
            <p className="text-white">O</p>
          </div>
          <div className=" absolute left-12 rounded-[50%] w-8 h-8 bg-androidBlue grid place-items-center z-20">
            <p className=" text-white left-60">U</p>
          </div>
          <div className="absolute left-[4.5rem] rounded-[50%] w-8 h-8 bg-androidPurple grid place-items-center z-10">
            <p className="text-white left-80">M</p>
          </div>
        </article>
        <article>
          <p className="text-white text-center mt-5">+57 people joined</p>
          {/* end of members-center  */}
        </article>
        {/*end of members  */}
      </div>
      </article>
    </>
  );
};

export default HeroForm;
