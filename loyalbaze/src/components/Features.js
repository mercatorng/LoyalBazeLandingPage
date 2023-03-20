const featuresData = [
  {
    id: 1,
    icon: "Go Digital.svg",
    header: "Go Digital",
    content:
      "Enable endless possibilities using AI powered digital loyalty and reward app custom branded for your business.",
  },
  {
    id: 2,
    icon: "Integrated Payment.svg",
    header: "Integrated Payment",
    content:
      "With our Integrated wallet system, your customers can make seamless payments for all purchases in your outlets.",
  },
  {
    id: 3,
    icon: "actionable Insight.svg",
    header: "Actionable Insights",
    content:
      "Gain valuable insights into your customer preferences and behaviors. Take data driven decisions to grow your business.",
  },
  {
    id: 4,
    icon: "Loyalty.svg",
    header: "Custom Loyalty",
    content:
      "Create and run your own custom loyalty and rewards program based on your business needs.",
  },
  {
    id: 5,
    icon: "Increased Sales.svg",
    header: "Increased Sales",
    content:
      "Increase sales and improve your bottom line via a loyalty generated sales funnels.",
  },
  {
    id: 6,
    icon: "Customer Engagement.svg",
    header: "Personalized Engagement",
    content:
      "Omni-channel customer engagement tools for constant top of mind awareness for your brand.",
  },
];

const Features = () => {
  return (
    <article className=" grid gap-x-4 gap-y-16 place-items-center md:grid-cols-3">
      {featuresData.map(({ icon, id, header, content }) => {
        return (
          <div className=" relative shadow-lg max-w-[25rem] h-[18.25rem] rounded-xl p-4 pt-6 bg-[#FFFFFF] flex flex-col gap-y-2">
            {/* number */}
            <p className=" absolute right-4 -top-8 text-7xl opacity-5 font-700 font-asap">
              {id}
            </p>
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
