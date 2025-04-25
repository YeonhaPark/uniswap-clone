"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useTranslations } from "next-intl";
import StarIcon from "@/src/components/icons/star-icon";
import TokenList from "./swap/token-list";
import { ReactNode, useEffect, useState } from "react";
import SwapSearchbar from "./swap/swap-searchbar";
import AvailableTokens from "./swap/available-tokens";
import { Currency } from "@/types";

export default function CurrencySelectModal({
  trigger,
  setCurrency,
  currency,
}: {
  trigger: ReactNode;
  setCurrency: (currency: Currency | null) => void;
  currency: Currency | null;
}) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [currency]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger onClick={() => setOpen(true)}>{trigger}</DialogTrigger>
      {open && (
        <DialogContent className="bg-surface1 flex flex-col gap-2 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-basel text-neutral1 text-lg">
              {t("common.selectToken.label")}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <SwapSearchbar />
            <div className="relative h-[586px] overflow-auto">
              <AvailableTokens setCurrency={setCurrency} />
              <div className="bg-surface1 sticky top-0 z-10 pt-3 pb-1">
                <div className="font-basel text-neutral2 flex h-[40px] items-center gap-2">
                  <StarIcon />
                  {t("tokens.selector.section.trending")}
                </div>
              </div>
              <TokenList />
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
