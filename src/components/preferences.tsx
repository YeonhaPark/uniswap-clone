"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/components/ui/popover";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChevronRight from "@/src/components/icons/chevron-right";
import LanguageSelect from "./header/language-select";
import { countryName } from "@/constants";
import ThemeToggle from "@/src/components/header/theme-toggle";
import { SettingOptions } from "@/types";

export default function LanguagePreferencePanel({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const [step, setStep] = useState<SettingOptions>("menu");
  const [selected, setSelected] = useState(
    t(`language.${countryName[locale]}`)
  );
  const [open, setOpen] = useState<boolean>(false);
  const direction = step === "language" ? 1 : -1;
  useEffect(() => {
    if (!open) return;
    const observer = new MutationObserver(() => {
      const wrapper = document.querySelector(
        "[data-radix-popper-content-wrapper]"
      ) as HTMLElement | null;

      if (wrapper) {
        wrapper.style.bottom = "0px";
        wrapper.style.right = "0px";
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      const wrapper = document.querySelector(
        "[data-radix-popper-content-wrapper]"
      ) as HTMLElement | null;

      if (wrapper) {
        wrapper.style.bottom = "";
        wrapper.style.right = "";
      }
    };
  }, [open]);
  return (
    <Popover>
      <PopoverTrigger onClick={(prev) => setOpen(!prev)}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="font-basel animate-in fade-in slide-in-from-top-1 border-surface3 bg-surface1 fixed right-3 z-50 w-[325px] rounded-2xl border py-3 pr-2 pl-4 shadow-none"
        sideOffset={8}
      >
        <AnimatePresence custom={direction} initial={false} mode="wait">
          {step === "menu" && (
            <motion.div
              key="menu"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="text-neutral1 py-2 text-lg dark:text-white">
                  {t("globalPreferences.title")}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-neutral2">
                      {t("settings.setting.appearance.title")}
                    </span>
                    <ThemeToggle />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex w-full items-center justify-between">
                      <div className="text-neutral2">
                        {t("settings.setting.language.title")}
                      </div>
                      <Button
                        variant={"ghost"}
                        onClick={() => setStep("language")}
                        className="text-neutral1 flex cursor-pointer items-center gap-1 hover:opacity-60"
                      >
                        {selected} <ChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <div className="flex w-full items-center justify-between">
                      <div className="text-neutral2">
                        {t("common.currency")}
                      </div>
                      <Button
                        variant={"ghost"}
                        className="text-neutral1 flex cursor-pointer items-center gap-1 hover:opacity-60"
                      >
                        USD <ChevronRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "language" && (
            <LanguageSelect setStep={setStep} setSelected={setSelected} />
          )}
          {/* {step === "currency" && (
            <CurrencySelect setStep={setStep} setCurrency={setCurrency} />
          )} */}
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  );
}
