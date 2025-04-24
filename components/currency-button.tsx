import Image from "next/image";
import ChevronDown from "@/components/icons/chevron-down";
import { Currency, TokenImage } from "@/types";

interface CurrencyButtonProps {
  selectedCurrency: Currency;
}

export default function CurrencyButton({
  selectedCurrency,
}: CurrencyButtonProps) {
  return (
    <div className="outline-noneborder-surface2-hovered hover:bg-surface1-hovered inline-flex h-[36px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border bg-transparent px-3 py-0 text-sm font-medium whitespace-nowrap shadow-[0_0_10px_rgba(34,34,34,0.04)] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
      <div className="flex items-center gap-1.5">
        <div className="relative -ml-2 h-[28px] w-[28px] shrink-0 items-center">
          <Image
            src={TokenImage[selectedCurrency]}
            width={28}
            className="absolute"
            height={28}
            alt={selectedCurrency}
          />
        </div>
        <span className="text-neutral1 font-semibold">{selectedCurrency}</span>
        <div className="text-neutral2 flex items-center">
          <ChevronDown width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
