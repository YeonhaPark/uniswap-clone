import { Button } from "./ui/button";
import SwitchCurrencyButton from "./switch-currency-button";
import CurrencyPanel from "@/components/currency-panel";
import { rate, swap } from "@/lib/utils";
import { Currency, TransactionType } from "@/types";
import { useEffect, useState } from "react";
import ChevronDown from "@/components/icons/chevron-down";
import Gas from "@/components/icons/gas-icon";
import GasInfo from "@/components/swap/gas-info";
import SwapSetting from "./swap/swap-settings";

export default function Swap() {
  const [sellCurrency, setSellCurrency] = useState<Currency>("USDC");
  const [buyCurrency, setBuyCurrency] = useState<Currency>("ETH");
  const [sellAmount, setSellAmount] = useState<number>(0);
  const [buyAmount, setBuyAmount] = useState<number>(0);
  const [amountType, setAmountType] = useState<TransactionType>("Sell");
  const [rotated, setRotated] = useState<boolean>(false);
  useEffect(() => {
    if (amountType === "Sell") {
      const result = swap(sellCurrency, buyCurrency, sellAmount);
      setBuyAmount(result);
    } else {
      const result = swap(buyCurrency, sellCurrency, buyAmount);
      setSellAmount(result);
    }
  }, [sellAmount, buyAmount, sellCurrency, buyCurrency, amountType]);

  return (
    <div className="relative flex shrink grow basis-auto flex-col">
      <div className="absolute top-[-38px] right-1 flex">
        <SwapSetting />
      </div>
      <div className="flex shrink-0 grow basis-auto scale-100 flex-col">
        <div className="flex flex-col items-stretch gap-[2px]">
          <CurrencyPanel
            transactionType="Sell"
            isActive={amountType === "Sell"}
            currency={sellCurrency}
            setCurrency={setSellCurrency}
            amount={sellAmount}
            setAmount={(val) => {
              setSellAmount(val);
              setAmountType("Sell");
            }}
          />
          <SwitchCurrencyButton />
          <CurrencyPanel
            transactionType="Buy"
            isActive={amountType === "Buy"}
            currency={buyCurrency}
            setCurrency={setBuyCurrency}
            amount={buyAmount}
            setAmount={(val) => {
              setBuyAmount(val);
              setAmountType("Buy");
            }}
          />
          <Button
            size={"none"}
            className="font-basel bg-accent2 hover:bg-accent2-hovered mt-1 overflow-x-hidden rounded-[20px] px-4 py-[20px] text-lg font-medium text-ellipsis whitespace-nowrap text-pink-500"
          >
            <span className="text-accent1 hover:text-accent1-hovered leading-[20px]">
              Connect Wallet
            </span>
          </Button>
          <div className="min-h-[40px] pt-3">
            <div className="font-basel text-neutral2 flex justify-between px-2 py-1 text-sm">
              <div>
                {`1 ${buyCurrency} = ${rate(sellCurrency, buyCurrency)} ${sellCurrency}`}
                &nbsp;
                <span className="text-neutral3">{`($${sellAmount.toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )})`}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <Gas /> $0.76
                </div>
                <span className="text-neutral3">
                  <div
                    onClick={() => setRotated(!rotated)}
                    className={`cursor-pointer transition-transform duration-200 ${
                      rotated ? "-rotate-[180deg]" : "rotate-0"
                    }`}
                  >
                    <ChevronDown width={16} height={16} />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <GasInfo open={rotated} />
        </div>
      </div>
    </div>
  );
}
