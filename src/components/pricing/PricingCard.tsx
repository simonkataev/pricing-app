import React from "react";
import { PricingTier, BillingCycle } from "@/data/pricingData";
import PricingFeature from "./PricingFeature";
import { PricingStatus } from "./PricingButtons";

interface PricingCardProps {
  tier: PricingTier;
  billingCycle: BillingCycle;
  status?: PricingStatus;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  billingCycle,
  status = "ongoing-trial",
}) => {
  const price =
    billingCycle === "monthly" ? tier.price.monthly : tier.price.yearly;

  const isPaidPlan = status === "paid-plan";
  const isDisabledButton = isPaidPlan && tier.id === "standard";

  return (
    <div
      className={`flex flex-col py-[48px] px-[32px] gap-[24px] rounded-lg border border-gray-200 shadow-sm bg-white w-full sm:w-[384px] ${
        tier.id === "pro" ? "relative" : ""
      }`}
    >
      {tier.id === "pro" && status === "ongoing-trial" && (
        <div className="absolute top-[23px] right-[22px]">
          <div className="bg-purple text-white px-2 py-1 rounded font-inter text-[11px] font-bold tracking-[0.22px] leading-normal text-center">
            Aktiv prøveperiode
          </div>
        </div>
      )}

      <div className={`flex flex-col gap-[16px]`}>
        <h3 className="text-base font-medium text-black font-inter">
          {tier.name}
        </h3>

        <div className="flex items-end justify-between">
          <span className="text-5xl font-extrabold text-black font-inter">
            {price} <span className="text-4xl">DKK</span>
          </span>
          <span className="text-base text-grey mb-1 font-inter">
            /{billingCycle === "monthly" ? "mnd ex moms" : "mnd ex år"}
          </span>
        </div>
      </div>

      <p className="text-black mt-[6px] font-inter">{tier.description}</p>

      <ul role="list" className="mt-[6px] space-y-4">
        {tier.features.map((feature, index) => (
          <PricingFeature
            key={index}
            name={feature.name}
            included={feature.included}
            usePurpleIcon={isPaidPlan}
          />
        ))}
      </ul>

      <div className="mt-[6px]">
        <button
          disabled={isDisabledButton}
          className={`w-full py-[10px] px-[20px] rounded-md text-sm font-medium font-inter ${
            tier.id === "pro"
              ? "bg-black text-white hover:bg-opacity-90"
              : "border border-black text-black bg-white hover:bg-light-gray"
          } ${isDisabledButton ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {tier.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
