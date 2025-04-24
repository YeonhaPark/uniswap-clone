"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/header/theme-toggle";

export default function Preferences({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={(prev) => setOpen(!prev)}>
        {trigger}
      </PopoverTrigger>
      {open ? (
        <PopoverContent
          side="bottom"
          align="end"
          className="font-basel animate-in fade-in slide-in-from-top-1 border-surface3 bg-surface1 fixed right-3 z-50 w-[325px] rounded-2xl border py-3 pr-2 pl-4 shadow-none"
          sideOffset={8}
        >
          <div>
            <div className="text-neutral1 py-2 text-lg dark:text-white">
              Global preferences
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral2">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex gap-3"></div>
              <div className="flex gap-3"></div>
            </div>
          </div>
        </PopoverContent>
      ) : null}
    </Popover>
  );
}
