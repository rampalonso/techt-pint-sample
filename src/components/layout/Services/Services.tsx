import React from "react";
import BusinessList from "./components/BusinessList";

const Services = () => {
  return (
    <section className="mt-32">
      <div className="text-center px-64">
        <p className="text-2xl text-primary font-semibold">Our Services</p>
        <h2 className="text-5xl font-medium mt-6 leading-16">
          Our Mission Is To Make Your{" "}
          <span className="bg-primary rounded-2xl py-1 px-2 font-semibold">
            Business
          </span>{" "}
          Better Through Technology
        </h2>
      </div>
      <div className="mt-12 px-48">
        <BusinessList />
      </div>
    </section>
  );
};

export default Services;
