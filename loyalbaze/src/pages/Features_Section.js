import { Features } from "../components";

export function FeaturesSection() {
  return (
    <section id="Features" className=" bg-[#F7FAFC] px-[4vw] py-16 pb-20 ">
        <div className=" text-[#0B409C] w-fit mr-auto ml-auto mb-20 text-center" data-aos="fade-right"
    data-aos-duration="2000"> 
            <p className=" text-xl">Highlights</p>
            <h4 className=" font-bold text-3xl">Loyalbaze Feature Highlights</h4>
        </div>
      <Features />
    </section>
  );
}
