import React from "react";

import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <section className="px-24 py-32 rounded-2xl bg-primary shadow-lg shadow-primary/50 mt-16 relative">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-7xl font-medium text-center leading-22">
          Leveraging Tech{" "}
          <span className="bg-gray-900 text-gray-100 rounded-xl px-2 py-1">
            To Drive
          </span>{" "}
          A Better IT Experience
        </h1>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
          posuere tortor, non ultrices justo egestas nec. Suspendisse dapibus
          turpis lectus, id convallis odio elementum tristique
        </p>
        <Button className="w-fit py-4 px-8 text-lg font-medium">
          Explore More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
