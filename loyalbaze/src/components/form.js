import { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import axios from "axios"
import SuccessMessage from "./SuccessMessage"

export function Form() {
  const {accessName,workEmail,
    mobileNumber,message,
     submitRequest,companyName,
    changeMessage,changeWorkEmail, 
    changeMobileNumber,changeAccessName,
    changeCompanyName, country, changeCountry} = useGlobalContext()

    const [countries, setCountries] = useState([])

    const url = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'

    const fetchCountry =async (url)=>{
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setCountries(data)
    } catch (error) {
      console.log(error.response);
    }
    }
    useEffect(()=>{
      fetchCountry(url)
    }, [])
   const newCountry =  [...new Set(countries.map(item => item.country))]
  //  console.log(countries);
  //  console.log(newCountry);
  return (
    <>
      {/* Access form  */}
      <div
        className="md:p-12 end max-w-[620px] mx-auto p-4 lg:w-[80%] lg:mx-0  large:w-[90%] xl:w-[100%]"
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
            <form className="mt-4 relative flex flex-col space-y-5" onSubmit={submitRequest}>
              {/* input  */}
              <div>
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Enter your full name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white"
                value={accessName} onChange={changeAccessName}
                />
              </div>
              {/* input  */}
              <div>
                <input
                  type="email"
                  spellCheck="false"
                  placeholder="Enter your work email"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white font-400"
             value={workEmail} onChange={changeWorkEmail}
             />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Mobile number"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white"
               value={mobileNumber} onChange={changeMobileNumber}
               />
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Company Name"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white"
                value={companyName} onChange={changeCompanyName}
                />
              </div>
              {/* input  */}
              <div>
                <select
                  id="countries"
                  name="countries"
                  placeholder="Select Country"
                  className="p-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white"
                  value={country} onChange={changeCountry}
                >
                   <option value="Select Country">Select Country</option>
                 {newCountry.map(function (item, index) {
                   return  <option value={item} className="text-slate-600" key={index}>
                  {item}
                 </option>
                 })}
                </select>
              </div>
              {/* input  */}
              <div>
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Drop A Message..."
                  className=" pb-28 pt-2 px-3 border-2 border-slate-600 rounded-md bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-indigo-1000 w-[98%] placeholder:text-white text-white "
                value={message} onChange={changeMessage}
                />
              </div>
              {/* form-button  */}
              <button className="btn-width2 w-[98%] bg-gradient-to-r from-darkGradient to-lightGradient rounded-full p-3 focus:outline-none ">
                <p className="text-white fsize">Send Request</p>
              </button>
          {/* star  */}
              <img
          src="images/Star 3.svg"
          alt="star"
          className="absolute -bottom-24 right-[-2rem]"
        />
            </form>
            {/* end of form  */}
          </div>
        </article>
        
      </div>
      {/* end of Access form  */}
    </>
  )
}




// <option value="Ghana" className="text-slate-600">
//   Ghana
// </option>
// <option value="South Africa" className="text-slate-600">
//   South Africa
// </option>
// <option value="South Africa" className="text-slate-600">
//   United States
// </option>
// <option value="South Africa" className="text-slate-600">
//   Finland
// </option>
// <option value="South Africa" className="text-slate-600">
//   Canada
// </option>