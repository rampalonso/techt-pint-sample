import { Button } from "@/components/ui";
import HeroSection from "@/components/ui/HeroSection";

const CustomerService = () => {
  return (
    <HeroSection>
      <HeroSection.Title>
        From The Cloud To{" "}
        <HeroSection.Title.Highlight>Customers</HeroSection.Title.Highlight>
        &nbsp;, We Bring All The Answers
      </HeroSection.Title>
      <HeroSection.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
        posuere tortor, non ultrices justo egestas nec. Suspendisse dapibus
        turpis lectus, id convallis odio elementum tristique
      </HeroSection.Description>
      <div className="flex flex-row items-center gap-8">
        <Button className="w-fit py-4 px-8 text-lg font-medium">
          Get A Quote
        </Button>
        <span className="text-2xl">+111-222-333</span>
      </div>
    </HeroSection>
  );
};

export default CustomerService;
