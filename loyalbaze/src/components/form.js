import { InputElement } from "./inputElement";

export function Form() {
  return (
    <article className=" lg:w-[55%] text-white">
      <form action="" className="relative bg-[#1D2939] rounded-2xl p-8 md:p-16">
        <h3 className=" text-xl font-extrabold mb-8">
          Book a Consultation with us
        </h3>
        <InputElement text={"Enter your full name"} />
        <InputElement text={"Enter your work email"} />
        <InputElement text={"Mobile number"} />
        <InputElement text={"Company Name"} />
        <div className=" mb-8 h-[3rem] relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
          <select className=" w-full bg-[#1D2939]">
            <option value="" selected>
              Select Country
            </option>
          </select>
        </div>
        <div className=" mb-8 relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
          <textarea
            placeholder="Drop a message....."
            className=" block w-full min-h-[5rem] bg-[#1D2939] placeholder:text-light placeholder:font-thin resize-none"
          ></textarea>
        </div>
        <button className=" mb-4 w-full bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] rounded-full h-12 mr-auto ml-auto block ">
          Send Request
        </button>
        {/* star */}
        <img
          src="images/Star 3.svg"
          alt="star"
          className="absolute -bottom-12 right-0"
        />
      </form>
    </article>
  );
}
