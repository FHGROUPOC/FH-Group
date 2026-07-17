import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SmpBox from "@/components/SmpBox/page";

const page = () => {
  const plans = [
    {
      id: "01",
      title: "Design Subscription",
      name: { first: "Nano", last: "dose" },
      requestInfo: "One request at a time",
      buttonText: "Get me dose",
      price: {
        currencySymbol: "$",
        amount: 4900,
        period: "/mo",
        note: "Pause or cancel anytime",
      },
      features: [
        "Access to all design services",
        "Unlimited revisions",
        "Fast 24h turnaround",
        "Premium assets included",
        "Dedicated support",
      ],
    },
    {
      id: "02",
      title: "Growth Pack",
      name: { first: "Micro", last: "burst" },
      requestInfo: "Two requests at a time",
      buttonText: "Scale me up",
      price: {
        currencySymbol: "$",
        amount: 7900,
        period: "/mo",
        note: "Cancel anytime, no contracts",
      },
      features: [
        "UI/UX + Branding",
        "Landing pages",
        "Illustration support",
        "Creative direction",
        "Slack collaboration",
      ],
    },
    {
      id: "03",
      title: "Startup Special",
      name: { first: "Quick", last: "fire" },
      requestInfo: "Three requests at a time",
      buttonText: "Ignite my brand",
      price: {
        currencySymbol: "$",
        amount: 9900,
        period: "/mo",
        note: "Founder's favorite",
      },
      features: [
        "Startup-focused design",
        "Speedy delivery",
        "Marketing assets",
        "Pitch deck design",
        "Investor-ready visuals",
      ],
    },
    {
      id: "04",
      title: "Enterprise Elite",
      name: { first: "Max", last: "flow" },
      requestInfo: "Unlimited requests",
      buttonText: "Take over my brand",
      price: {
        currencySymbol: "$",
        amount: 14900,
        period: "/mo",
        note: "Tailored onboarding",
      },
      features: [
        "Team collaboration",
        "Enterprise-grade design",
        "24/7 availability",
        "Account manager",
        "All services included",
      ],
    },
  ];

  return (
    <Wrapper>
      <HeaderOne />
      <div className="text-center greenbox  ">
        Accepting projects from Q1 2025
      </div>
      <h1 className="text-center h2 smp-h">
        Transparent pricing, with top tier design partner
      </h1>
      <div className="text-center smp-sub">
        Transparent pricing tailored to your needs,ensuring affordability
        without compromising on quality.
      </div>
      <div className="main-smp">
        {plans.map((plan, idx) => (
          <SmpBox key={idx} plan={plan} />
        ))}
      </div>
    </Wrapper>
  );
};

export default page;
