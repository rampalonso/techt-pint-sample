import {
  About,
  Blogs,
  Brands,
  Footer,
  GetInTouch,
  Header,
  Hero,
  Pricing,
  Services,
  Testimonials,
  WhyUs,
} from "@/components/layout";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <Hero />
        <Brands />
        <About />
        <Services />
        <WhyUs />
        <Hero />
        <Pricing />
        <Testimonials />
        <GetInTouch />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}
