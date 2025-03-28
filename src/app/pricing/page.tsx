"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BillingToggle from "@/components/pricing/BillingToggle";
import PricingCard from "@/components/pricing/PricingCard";
import PricingHeader from "@/components/pricing/PricingHeader";
import pricingData, { BillingCycle } from "@/data/pricingData";
import { PricingStatus } from "@/components/pricing/PricingButtons";

// Component that uses searchParams
function PricingContent() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const searchParams = useSearchParams();
  const status: PricingStatus = (searchParams.get("status") as PricingStatus) || "ongoing-trial";

  // Get title and message based on status
  const getTitle = () => "Oversigt over abonnementer";

  const getMessage = () => {
    if (status === "trial-ended") {
      return "Din gratis prøveperiode er afsluttet. Vælg et abonnement for at fortsætte med Juris AI.";
    }
    return undefined;
  };

  return (
    <div className="bg-white py-[112px] sm:py-[24px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header>
          <PricingHeader title={getTitle()} message={getMessage()} />
        </header>

        <section aria-labelledby="billing-options">
          <h2 id="billing-options" className="sr-only">Faktureringsperiode</h2>
          <div className="mt-10 flex justify-center">
            <BillingToggle
              billingCycle={billingCycle}
              onChange={setBillingCycle}
            />
          </div>
        </section>

        <section aria-labelledby="pricing-plans" className="mt-[48px]">
          <h2 id="pricing-plans" className="sr-only">Abonnementsplaner</h2>
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-5">
            {pricingData.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                billingCycle={billingCycle}
                status={status}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="enterprise-options" className="mt-[32px]">
          <h2 id="enterprise-options" className="sr-only">Virksomhedsløsninger</h2>
          <p className="w-full max-w-[607px] mx-auto text-black text-center font-inter text-sm font-normal">
            Er I flere på arbejdspladsen, der ønsker licens? Kontakt os på
            <a href="mailto:support@juris.dk" className="text-blue-600 hover:underline ml-1">
              support@juris.dk
            </a>, så vil vi give jer et skræddersyet tilbud med en
            fordelagtig pris.
          </p>
        </section>
      </div>
    </div>
  );
}

// Loading fallback component
function PricingFallback() {
  return (
    <div className="bg-white py-[112px] sm:py-[84px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p>Indlæser abonnementer...</p>
      </div>
    </div>
  );
}

// Main component that wraps PricingContent in Suspense
export default function PricingPage() {
  return (
    <Suspense fallback={<PricingFallback />}>
      <PricingContent />
    </Suspense>
  );
}
