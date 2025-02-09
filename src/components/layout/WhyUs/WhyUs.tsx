import React from "react";

const WhyUs = () => {
  return (
    <section className="mt-48">
      <div className="flex flex-row items-center relative">
        <div className="p-10 w-7/10 pr-16">
          <p className="text-2xl text-lime-300 font-semibold">Why Choose Us?</p>
          <h2 className="text-5xl font-medium mt-4 leading-14 pr-64">
            Delivering Technology Solutions
          </h2>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="bg-gray-900 text-white text-3xl w-fit p-2 rounded-xl">
                01
              </p>
              <hr className="h-px my-5 border-0 bg-gray-300"></hr>
              <span className="text-gray-600">
                Sed at elit volutpat, pulvinar dolor congue, mollis ipsum.
                Integer sodales mi risus, rhoncus pretium nisl tempor quis.
              </span>
            </div>
            <div>
              <p className="bg-gray-900 text-white text-3xl w-fit p-2 rounded-xl">
                02
              </p>
              <hr className="h-px my-5 border-0 bg-gray-300"></hr>
              <span className="text-gray-600">
                Sed at elit volutpat, pulvinar dolor congue, mollis ipsum.
                Integer sodales mi risus, rhoncus pretium nisl tempor quis.
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/10 flex items-center">
          <span className="block h-64 w-64 rounded-full bg-primary"></span>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
