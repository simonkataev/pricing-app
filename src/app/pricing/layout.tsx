import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abonnementer | Juris AI",
  description: "Vælg det abonnement, der passer til dine behov. Få adgang til juridiske databaser, AI-værktøjer og avancerede funktioner med Juris AI.",
  keywords: ["juridisk abonnement", "legal tech priser", "AI juridisk værktøj", "juridisk software", "domstolsafgørelser adgang"],
  openGraph: {
    title: "Abonnementer og priser | Juris AI",
    description: "Vælg det abonnement, der passer til dine behov. Få adgang til juridiske databaser, AI-værktøjer og avancerede funktioner med Juris AI.",
    url: "https://juris.dk/pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://juris.dk/pricing",
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
