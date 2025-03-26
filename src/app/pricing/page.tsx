"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import BillingToggle from "@/components/pricing/BillingToggle";
import PricingCard from "@/components/pricing/PricingCard";
import PricingHeader from "@/components/pricing/PricingHeader";
import pricingData, { BillingCycle } from "@/data/pricingData";
import { PricingStatus } from "@/components/pricing/PricingButtons";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const SearchParamsWrapper = () => {
    const searchParams = useSearchParams();
    const statusParam = searchParams.get("status") as PricingStatus | null;
    return statusParam || "ongoing-trial";
  };
  
  const status: PricingStatus = (
    <Suspense fallback="ongoing-trial">
      <SearchParamsWrapper />
    </Suspense>
  ) as unknown as PricingStatus;

  // Get title and message based on status
  const getTitle = () => "Oversigt over abonnementer";

  const getMessage = () => {
    if (status === "trial-ended") {
      return "Din gratis prøveperiode er afsluttet. Vælg et abonnement for at fortsætte med Juris AI.";
    }
    return undefined;
  };

  return (
    <div className="bg-white py-[112px] sm:py-[84px]">
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
            </a>, så vil vi kan give jer et skræddersyet tilbud med en
            fordelagtig pris.
          </p>
        </section>
      </div>

      <Script id="pricing-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Juris AI",
            "description": "Juridisk AI-assistent med adgang til domstolsafgørelser og juridiske værktøjer",
            "offers": [
              {
                "@type": "Offer",
                "name": "Standard",
                "price": "${billingCycle === 'monthly' ? '316' : '3160'}",
                "priceCurrency": "DKK",
                "description": "Til dig med tidlighedsbehov behov. Få adgang til de basale funktioner.",
                "availability": "https://schema.org/InStock",
                "url": "https://juris.dk/pricing",
                "priceValidUntil": "${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]}",
                "billingDuration": "${billingCycle === 'monthly' ? 'P1M' : 'P1Y'}"
              },
              {
                "@type": "Offer",
                "name": "Pro",
                "price": "${billingCycle === 'monthly' ? '716' : '7160'}",
                "priceCurrency": "DKK",
                "description": "Få adgang til alle funktioner - og flere tokens.",
                "availability": "https://schema.org/InStock",
                "url": "https://juris.dk/pricing",
                "priceValidUntil": "${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]}",
                "billingDuration": "${billingCycle === 'monthly' ? 'P1M' : 'P1Y'}"
              }
            ]
          }
        `}
      </Script>
    </div>
  );
}
