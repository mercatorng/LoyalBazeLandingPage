import { featuresData } from "../data";
const Features = () => {
  return (
    <article className=" grid gap-x-4 gap-y-16 place-items-center md:grid-cols-3" data-aos="fade-right"
    data-aos-duration="2000" >
      {featuresData.map(({ icon, id, header, content }) => {
        return (
          <div
            key={id}
            className=" relative shadow-lg max-w-[25rem] h-[15.25rem] rounded-xl p-4 pt-6 bg-[#FFFFFF] flex flex-col gap-y-2"
          >
            {/* number */}
            <div>
            <p className=" absolute text right-4 -top-8 text-7xl font-700 font-asap">
              {id}
            </p>
            </div>
            {/* icon */}
            <div className=" bg-blue-100 h-[48px] w-[48px] rounded-lg grid place-items-center">
              <img src={`images/${icon}`} alt={header} />
            </div>
            {/* header */}
            <h4 className=" font-bold">{header}</h4>
            {/* content */}
            <p>{content}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Features;
