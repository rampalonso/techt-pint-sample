import React from "react";
import {
  CreativeLogo,
  NzxtLogo,
  TeachingStrategiesLogo,
  TheoremReachLogo,
} from "./icons";

const Brands = () => {
  return (
    <section className="mt-12 px-16">
      <ul className="flex flex-row justify-around">
        <li>
          <NzxtLogo className="h-48 w-48" />
        </li>
        <li>
          <TeachingStrategiesLogo className="h-48 w-48" />
        </li>
        <li>
          <TheoremReachLogo className="h-48 w-48" />
        </li>
        <li>
          <CreativeLogo className="h-48 w-48" />
        </li>
      </ul>
    </section>
  );
};

export default Brands;
