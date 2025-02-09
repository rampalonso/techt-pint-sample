import React from "react";
import BusinessCard from "./BusinessCard";

const BusinessList = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="grid gap-6">
        <BusinessCard
          variant="accent"
          title="Cyber Security"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Ult telius,
        luctus noc wiliamcorper mattis, pulvinar dopibus leo"
        />
        <BusinessCard
          variant="grayed"
          title="IT Management"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Ult telius,
        luctus noc wiliamcorper mattis, pulvinar dopibus leo"
        />
      </div>
      <div className="grid gap-6 translate-y-6">
        <BusinessCard
          variant="primary"
          title="Cloud Computing"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Ult telius,
        luctus noc wiliamcorper mattis, pulvinar dopibus leo"
        />
        <BusinessCard
          variant="outline"
          title="Software Developer"
          description="Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Ult telius,
        luctus noc wiliamcorper mattis, pulvinar dopibus leo"
        />
      </div>
    </div>
  );
};

export default BusinessList;
