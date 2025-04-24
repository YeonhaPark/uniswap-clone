import CurrencyButton from "./currency-button";
import { TransactionType, Currency, Decimals } from "@/types";
import CurrencyInput from "@/components/common/currency-input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CurrencySelectModal from "./currency-select-modal";

interface CurrencyPanelProps {
  transactionType: TransactionType;
  isActive: boolean;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  amount: number;
  setAmount: (amount: number) => void;
}

export default function CurrencyPanel({
  transactionType,
  isActive,
  currency,
  setCurrency,
  amount,
  setAmount,
}: CurrencyPanelProps) {
  const [input, setInput] = useState<string>("");

  const handleChange = (val: string) => {
    setInput(val);
    setAmount(parseFloat(val) || 0);
  };

  useEffect(() => {
    setInput(amount ? amount.toString() : "");
  }, [amount]);
  return (
    <div
      className={cn(
        "rounded-[20px] border border-transparent",
        isActive ? "border-surface3 bg-transparent" : "bg-surface2"
      )}
    >
      <div className="flex shrink-0 cursor-pointer flex-col">
        <div className="flex flex-col p-4">
          <div>
            <span className="text-neutral2 break-words">{transactionType}</span>
          </div>
          <div className="flex min-h-[60px] py-2">
            <div className="mr-2 shrink grow">
              <div className="flex cursor-pointer flex-col">
                <CurrencyInput
                  maxDecimals={Decimals[currency]}
                  onChange={handleChange}
                  value={input}
                />
              </div>
            </div>
            <div>
              <CurrencySelectModal
                currency={currency}
                setCurrency={setCurrency}
                trigger={<CurrencyButton selectedCurrency={currency} />}
              />
              {/* <Button className="flex shrink-0 basis-auto flex-col items-stretch rounded-full border border-[#f2f2f2] bg-pink-500 px-3 shadow-[0_0_10px_rgba(34,34,34,0.04)]">
                <div className="flex items-center justify-center gap-1.5">
                  Select token
                  <ChevronDown />
                </div>
              </Button> TODO */}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="text-neutral2 shrink overflow-x-hidden text-sm overflow-ellipsis whitespace-nowrap">
              $
              {amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
