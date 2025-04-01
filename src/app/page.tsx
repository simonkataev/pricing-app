import PricingButtons from "@/components/pricing/PricingButtons";
import type { Metadata } from "next";
import Script from "next/script";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Juris AI",
  description:
    "Juris AI hjælper jurister og advokater med at effektivisere deres arbejde gennem avanceret AI-teknologi og adgang til juridiske databaser.",
  openGraph: {
    title: "Juris AI",
    description:
      "Juris AI hjælper jurister og advokater med at effektivisere deres arbejde gennem avanceret AI-teknologi og adgang til juridiske databaser.",
  },
};

export default async function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="w-full flex justify-center">
          <nav aria-label="Main Navigation" className="w-full max-w-7xl">
            {/* Navigation could be added here */}
          </nav>
        </header>

        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-center">Juris AI</h1>

          <section aria-labelledby="pricing-heading">
            <h2
              id="pricing-heading"
              className="text-2xl font-semibold mb-4 text-center"
            >
              Abonnementsmuligheder
            </h2>
            <PricingButtons />
          </section>
        </main>

        <footer className="w-full text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Juris AI. Alle rettigheder forbeholdes.
          </p>
        </footer>

        <Script id="schema-org-graph" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Juris AI",
              "applicationCategory": "LegalSoftware",
              "offers": {
                "@type": "Offer",
                "price": "316",
                "priceCurrency": "DKK"
              },
              "description": "Juris AI er en juridisk AI-assistent, der giver adgang til domstolsafgørelser, ankesystemet og avancerede juridiske værktøjer."
            }
          `}
        </Script>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              document.querySelector('.fixed').style.display = 'none';
            }, 6000);
          `,
        }}
      />
    </>
  );
}
