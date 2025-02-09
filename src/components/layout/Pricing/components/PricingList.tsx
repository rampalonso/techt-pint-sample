import PricingCard from "./PricingCard";

const PricingList = () => {
  return (
    <div className="flex flex-row gap-6">
      <PricingCard
        title="Good For Personal Portfolio"
        amount="$500"
        planName="Basic Plan"
        variant="accent"
      />
      <PricingCard
        title="Good For Small Company"
        amount="$1000"
        planName="Premium Plan"
        variant="grayed"
      />
      <PricingCard
        title="Good For Big Company"
        amount="$1500"
        planName="Corporate Plan"
        variant="lightGrayed"
      />
    </div>
  );
};

export default PricingList;
