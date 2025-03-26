import React from "react";
import Link from "next/link";

export type PricingStatus = "ongoing-trial" | "trial-ended" | "paid-plan";

interface PricingButtonsProps {
  currentStatus?: PricingStatus;
}

const PricingButtons: React.FC<PricingButtonsProps> = ({ currentStatus }) => {
  const buttons = [
    {
      id: "ongoing-trial",
      label: "Ongoing Free Trial",
      href: "/pricing?status=ongoing-trial",
    },
    {
      id: "trial-ended",
      label: "Free Trial Ended",
      href: "/pricing?status=trial-ended",
    },
    {
      id: "paid-plan",
      label: "On Paid Plan",
      href: "/pricing?status=paid-plan",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {buttons.map((button) => (
        <Link
          key={button.id}
          href={button.href}
          className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
            currentStatus === button.id
              ? "bg-black text-white"
              : "bg-gray-100 text-black hover:bg-gray-200"
          }`}
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
};

export default PricingButtons;
