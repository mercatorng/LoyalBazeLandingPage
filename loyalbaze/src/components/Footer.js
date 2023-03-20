const Footer = () => {
  return (
    <footer className=" bg-[#F7FAFC] relative px-[4vw] pt-0 py-10 ">
      {/* top border line*/}
      <div className="   bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] h-[1px] "></div>
      {/* content */}
      <div className=" w-fit flex flex-col pt-6  gap-y-4 mr-auto ml-auto lg:flex-row lg:w-full lg:justify-between ">
        <p className=" font-bold text-center lg:order-2">
          Loyalbaze is almost here.
        </p>
        <div className=" flex gap-x-4 items-start  lg:w-[30%] lg:order-0">
          <img src="images/Home.svg" alt="home" />
          <p>
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <div className="  flex gap-x-4 items-center lg:items-start w-fit mr-auto ml-auto lg:m-0 lg:order-2">
          <img src="images/Phone.svg" alt="phone" />
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
