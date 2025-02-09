import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="mt-32">
      <div className="flex flex-row items-center relative">
        <div className="absolute top-0 left-0 bg-gray-900 rounded-2xl text-gray-100 flex flex-col gap-4 p-4 items-center justify-center">
          <p className="text-5xl font-medium">1,274+</p>
          <p className="text-lg text-primary">Client Satisfaction</p>
        </div>
        <div className="w-5/10 flex items-center justify-center">
          <span className="block h-64 w-64 rounded-full bg-primary"></span>
        </div>
        <div className="w-5/10 pl-12">
          <p className="text-2xl text-lime-300 font-semibold">Testimonials</p>
          <h2 className="text-5xl font-medium mt-4 leading-16 pr-48">
            What They Say{" "}
            <span className="bg-primary py-1 px-3 rounded-2xl">About</span> Us ?
          </h2>
          <p className="mt-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit cras vitae
            mus tellus, mattis tortor sit amet pulvinar dapibus leo.
          </p>
          <div className="mt-8 pl-6">
            <div className="flex flex-row gap-4">
              <span className="size-6 bg-yellow-300 rounded-full"></span>
              <span className="size-6 bg-yellow-300 rounded-full"></span>
              <span className="size-6 bg-yellow-300 rounded-full"></span>
              <span className="size-6 bg-yellow-300 rounded-full"></span>
              <span className="size-6 bg-yellow-300 rounded-full"></span>
            </div>
            <p className="mt-8">
              Ullamcorper fusce litora augue vivamus dictum dapibus sed tempor
              tincidunt velit, aliquet aliquam nostra ultrices vestibulum
              habitant dictumst turpis porta.
            </p>
            <div className="mt-8">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6 items-center">
                  <Image
                    width={92}
                    height={92}
                    src="https://randomuser.me/api/portraits/men/79.jpg"
                    alt="Profile picture"
                    className="rounded-full object-cover verflow-hidden"
                  />
                  <div>
                    <p className="text-xl font-medium">Joey Frey</p>
                    <p className="text-gray-400">Designation</p>
                  </div>
                </div>
                <div className="self-end">
                  <span className="block bg-primary size-18 rounded-full "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
