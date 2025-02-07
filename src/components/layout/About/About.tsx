import { Button } from "@/components/ui";
import React from "react";

const About = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-row items-center relative">
        <div className="bg-zinc-100 rounded-2xl p-10 w-7/10 pr-92">
          <p className="text-2xl text-lime-300 font-semibold">About us</p>
          <h2 className="text-5xl font-medium mt-4 leading-14">
            We&apos;ll Take Technology To Where It&apos;s Never Been Before
          </h2>
          <p className="text-sm  text-gray-500 mt-4">
            Sed at elit volutpat, pulvinar dolor congue, mollis ipsum. Integer
            sodales mi risus, rhoncus pretium nisl tempor quis. Fusce eget
            tincidunt nulla. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus
          </p>
          <Button variant="primary" className="mt-8 text-lg font-medium">
            Read More
          </Button>
        </div>
        <div className="absolute right-0 w-5/10">
          <ul className="flex flex-row gap-8">
            <li className="bg-white shadow-sm shadow-gray-300 p-6 rounded-2xl">
              <p className="text-2xl">Our Vision</p>
              <p className="text-sm text-gray-400 mt-3">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus
              </p>
            </li>
            <li className="bg-white shadow-sm shadow-gray-300 p-6 rounded-2xl">
              <p className="text-2xl">Our Mission</p>
              <p className="text-sm text-gray-400 mt-3">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
