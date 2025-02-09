import React from "react";

const HeroTitleHighlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-gray-900 text-gray-100 rounded-xl px-2 py-1">
      {children}
    </span>
  );
};

const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-7xl font-medium text-center leading-22">{children}</h1>
  );
};
HeroTitle.Highlight = HeroTitleHighlight;

const HeroDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-center text-lg">{children}</p>;
};

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-24 py-32 rounded-2xl bg-primary shadow-lg shadow-primary/50 mt-16 relative">
      <div className="flex flex-col items-center gap-8">{children}</div>
    </section>
  );
};

HeroSection.Title = HeroTitle;
HeroSection.Description = HeroDescription;

export default HeroSection;
