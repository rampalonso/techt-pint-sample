import React from "react";

import HeroSection from "@/components/ui/HeroSection";
import { Button } from "@/components/ui";

const Hero = () => {
  return (
    <HeroSection>
      <HeroSection.Title>
        Leveraging Tech{" "}
        <HeroSection.Title.Highlight>To Drive</HeroSection.Title.Highlight>&nbsp;A
        Better IT Experience
      </HeroSection.Title>
      <HeroSection.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
        posuere tortor, non ultrices justo egestas nec. Suspendisse dapibus
        turpis lectus, id convallis odio elementum tristique
      </HeroSection.Description>
      <Button className="w-fit py-4 px-8 text-lg font-medium">
        Explore More
      </Button>
    </HeroSection>
  );
};

export default Hero;
