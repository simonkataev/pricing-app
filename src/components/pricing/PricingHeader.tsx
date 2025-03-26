import React from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import Link from "next/link";

interface PricingHeaderProps {
  title: string;
  message?: string;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ title, message }) => {
  return (
    <>
      <div className="absolute top-[20px] right-[20px] sm:top-[33px] sm:right-[44px] z-10">
        <Link href="/">
          <CloseIcon className="w-5 h-5 sm:w-4 sm:h-4 cursor-pointer hover:opacity-70 transition-opacity" />
        </Link>
      </div>

      <div className="relative">
        <div className="text-center px-4">
          <h1 className="w-full max-w-[608px] mx-auto text-black text-center font-inter text-[24px] sm:text-[32px] font-semibold">
            {title}
          </h1>
          {message && (
            <p className="mt-4 w-full max-w-[990px] mx-auto text-purple text-center font-inter text-sm sm:text-base font-normal">
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingHeader;
