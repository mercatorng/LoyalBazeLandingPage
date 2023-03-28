const Footer = () => {
  return (
    <footer className=" bg-[#F7FAFC] relative px-[4vw] pt-0 py-10 " data-aos="fade-up"
    data-aos-duration="2000">
      {/* top border line*/}
      <div className="   bg-gradient-to-r from-[#5404FF] to-[#BD3BD2F0] h-[1px] "></div>
      {/* content */}
      <div className=" p-4 container md:max-w-[992px] large:max-w-[1126px] md:mx-0 md:gap-x-28 exl:max-w-[1190px]  mx-auto max-w-sm flex flex-col space-y-5 md:flex-row  md:items-center md:space-y-0  md:justify-between md:justify-center md:gap-x-8 la">
        <p className=" font-bold md:order-1  exl:mr-[4rem]  ">
          Loyalbaze is almost here.
        </p>
        <div className=" flex gap-x-4 items-center  lg:w-[30%]  ">
          <img src="images/Home.svg" alt="home" className="" />
          <p className="md:order-0 max-w-md lg:max-w-md">
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </div>
        <div className="flex space-x-4 items-center md:order-2">
          <div>
            <img src="images/Phone.svg" alt="phone" className="w-fit" />
          </div>
          <p>+234 903 618 9485</p>
        </div>
      </div>
    </footer>
  );
};

// flex flex-col pt-6 gap-y-4 mr-auto ml-auto lg:flex-row lg:w-full lg:justify-between
//  flex gap-x-4 items-center lg:items-start w-fit mr-auto ml-auto lg:m-0 lg:order-2">
export default Footer;
