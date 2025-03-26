'use client';

import React from 'react';
import { BillingCycle } from '@/data/pricingData';

interface BillingToggleProps {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ billingCycle, onChange }) => {
  return (
    <div className="inline-flex p-[4px] items-center gap-[8px] rounded-lg bg-light-gray" role="group">
      <button
        type="button"
        className={`flex py-[6px] px-[20px] justify-center items-center gap-[10px] rounded-md font-roboto text-sm font-medium leading-normal tracking-[0.14px] transition-colors ${
          billingCycle === 'monthly'
            ? 'bg-white text-black shadow-[0px_2px_4.8px_0px_rgba(0,0,0,0.20)]'
            : 'bg-transparent text-black hover:bg-white hover:bg-opacity-50'
        }`}
        onClick={() => onChange('monthly')}
        aria-current={billingCycle === 'monthly' ? 'page' : undefined}
      >
        Månedlig betaling
      </button>
      <button
        type="button"
        className={`flex py-[6px] px-[20px] justify-center items-center gap-[10px] rounded-md font-roboto text-sm font-medium leading-normal tracking-[0.14px] transition-colors ${
          billingCycle === 'yearly'
            ? 'bg-white text-black shadow-[0px_2px_4.8px_0px_rgba(0,0,0,0.20)]'
            : 'bg-transparent text-black hover:bg-white hover:bg-opacity-50'
        }`}
        onClick={() => onChange('yearly')}
        aria-current={billingCycle === 'yearly' ? 'page' : undefined}
      >
        Årlig betaling 
      </button>
    </div>
  );
};

export default BillingToggle;
