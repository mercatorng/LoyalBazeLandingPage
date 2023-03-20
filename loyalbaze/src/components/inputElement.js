// form input
export const InputElement = ({ text }) => {
    return (
      <div className=" mb-8 h-[3rem] relative  items-center   border px-[12px] py-2 border-light rounded-md mr-auto ml-auto">
        <input
          type="text"
          placeholder={text}
          className=" absolute bg-transparent left-4 outline-none  placeholder:text-light placeholder:font-thin"
        />
      </div>
    );
  };