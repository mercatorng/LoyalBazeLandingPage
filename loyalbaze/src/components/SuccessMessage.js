import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
const SuccessMessage = () => {
  const { openMessage, messageClose } = useGlobalContext();
  useEffect(() => {
    const timeOut = setTimeout(function () {
      messageClose();
    }, 6000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageClose]);

  return (
    <section
      className={
        openMessage
          ? "w-[100%] h-[100%] bgModal fixed z-50 flex items-center justify-center"
          : "hidden"
      }
    >
      <main className="bg-black w-[24rem] h-[60%] rounded-[1.25rem]  flex flex-col items-center justify-center ">
        {/* check mark  */}
        <div className="relative">
          <img src="./images/Ellipse 41.svg" alt="ellipse" />
          <img
            src="./images/Vector 3.svg"
            alt="checkmark"
            className="absolute top-9 right-8 "
          />
        </div>
        {/* text  */}
        <div className="text-center px-9">
          <h3 className="text-white mt-8 text-xl">Congratulations</h3>
          <p className="text-white max-w-sm">
            Great move! You're one step closer to getting your hands on the
            product. Please check your mail for more information.
          </p>
        </div>
      </main>
    </section>
  );
};

{
  /* <div className=" shadow-2xl bg-bgGreen rounded-[80%] w-[4rem] h-[4rem] flex items-center justify-center">
  <img src="./images/Vector 3.svg" alt="checkmark" />
</div>; */
}

// "w-[100%] h-[100%] bgModal fixed z-50 flex items-center justify-center"
export default SuccessMessage;
