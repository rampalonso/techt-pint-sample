import React from "react";
import { PricingList } from "./components";

const Pricing = () => {
  return (
    <section className="mt-32">
      <div className="text-center px-64">
        <p className="text-2xl text-primary font-semibold">Pricing Plan</p>
        <h2 className="text-5xl font-medium mt-6 leading-16">
          We Make IT Simple, Faster, And Less Expensive
        </h2>
        <p className="mt-8 text-gray-500 ">
          Ullamcorper fusce litora augue vivamus dictum dapibus sed tempor
          tincidunt velit, aliquet aliquam nostra ultrices vestibulum habitant
          dictumst turpis porta, viverra sollicitudin non class mollis pretium
          imperdiet nunc dis
        </p>
      </div>
      <div className="mt-16">
        <PricingList></PricingList>
      </div>
    </section>
  );
};

export default Pricing;
