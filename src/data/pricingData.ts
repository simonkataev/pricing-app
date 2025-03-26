export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

export type BillingCycle = 'monthly' | 'yearly';

const pricingData: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: {
      monthly: 316,
      yearly: 3160,
    },
    description: 'Til dig med tidlighedsbehov behov. Få adgang til de basale funktioner.',
    features: [
      { name: '250,000 tokens', included: true },
      { name: 'Adgang til Domstabasasen', included: true },
      { name: 'Adgang til Ankesystemet', included: true },
      { name: 'Adgang til Smart/AST', included: false },
      { name: 'Redaction Tool', included: false },
    ],
    buttonText: 'Opgradér til Standard',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 716,
      yearly: 7160,
    },
    description: 'Få adgang til alle funktioner - og flere tokens.',
    features: [
      { name: '1,250,000 tokens', included: true },
      { name: 'Adgang til Domstabasasen', included: true },
      { name: 'Adgang til Ankesystemet', included: true },
      { name: 'Adgang til Smart/AST', included: true },
      { name: 'Redaction Tool', included: true },
    ],
    buttonText: 'Opgradér til Pro',
    highlighted: true,
  },
];

export default pricingData;
