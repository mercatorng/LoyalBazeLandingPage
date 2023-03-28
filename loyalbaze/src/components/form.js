import { InputElement } from "./inputElement";

export function Form() {
  return (
    <>
      {/* Access form  */}
      <div
        className="md:p-12 max-w-xl mx-auto p-4  lg:w-[80%] lg:mx-0 large:w-[90%] xl:w-[100%]  "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* form-center  */}
        <article className="bg-darkColor  rounded-[1.25rem]">
          <div className=" p-8 mx-4">
            <h1 className="formSize text-[1.5rem] text-white font-700">
            Skip Waitlist, Get Access Now!
            </h1>

            {/* form  */}
            <form className="mt-4 flex flex-col space-y-5">
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white font-400"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                />
              </div>
              {/* input  */}
              <div>
                <select
                  id="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white"
                >
                  <option value="Select Country">Select Country</option>
                  <option value="Nigeria" className="text-slate-600">
                    Nigeria
                  </option>
                  <option value="Ghana" className="text-slate-600">
                    Ghana
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    South Africa
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    United States
                  </option>
                  <option value="South Africa" className="text-slate-600">
                    Finland
                  </option>
                </select>
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  placeholder="Drop A Message..."
                  className=" pb-28 pt-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none w-[98%] placeholder:text-white text-white "
                />
              </div>
              {/* form-button  */}
              <button className="btn-width2 w-[98%] bg-gradient-to-r from-darkGradient to-lightGradient rounded-full p-3 focus:outline-none ">
                <p className="text-white fsize">Send Request</p>
              </button>
            </form>
            {/* end of form  */}
          </div>
        </article>
      </div>
      {/* end of Access form  */}
    </>
  )
}



// <article className=" lg:w-[50%] text-white">
//       <form action="" className="relative bg-[#1D2939] rounded-2xl p-8 md:p-16 max-w-xl mx-auto">
//         <h3 className=" text-xl font-extrabold mb-8">
//           Skip Waitlist, Get Access Now!
//         </h3>
//         <InputElement text={"Enter your full name"} className="focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-900" />
//         <InputElement text={"Enter your work email"} />
//         <InputElement text={"Mobile number"} />
//         <InputElement text={"Company Name"} />
//         <div className=" mb-8 h-[3rem] relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
//           <select className=" w-full bg-[#1D2939]">
//             <option value={`Select Country`}>Select Country</option>
//           </select>
//         </div>
//         <div className=" mb-8 relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
//           <textarea
//             placeholder="Drop a message....."
//             className=" focus:outline-none block w-full min-h-[5rem] bg-[#1D2939] placeholder:text-light placeholder:font-thin resize-none"
//           ></textarea>
//         </div>
//         <button className=" mb-4 w-full bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] rounded-full h-12 mr-auto ml-auto block ">
//           Send Request
//         </button>
//         {/* star */}
//         <img
//           src="images/Star 3.svg"
//           alt="star"
//           className="absolute -bottom-12 right-0"
//         />
//       </form>
//     </article>