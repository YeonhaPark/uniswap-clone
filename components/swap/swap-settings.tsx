import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import GearIcon from "@/components/icons/gear-icon";
import { Button } from "@/components/ui/button";
import InfoIcon from "../icons/info-icon";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
export default function SwapSetting() {
  return (
    <Button
      size="icon"
      variant={"ghost"}
      className="text-neutral2 p-1 active:opacity-75"
    >
      <GearIcon />
    </Button>
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant={"ghost"}
          className="text-neutral2 p-1 active:opacity-75"
        >
          <GearIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="animate-in fade-in slide-in-from-top-1 border-surface3 z-50 w-[320px] rounded-[24px] border bg-white px-3 py-1 shadow-sm"
        sideOffset={8}
      >
        <div className="p-1">
          <div className="flex flex-col gap-1 py-2">
            <SettingItem
              label="Max slippage"
              setting={
                <div className="border-surface3 flex items-center gap-2 rounded-2xl border p-1">
                  <div className="bg-accent2 text-accent1 flex items-center rounded-full px-2 text-sm font-semibold">
                    Auto
                  </div>
                  <div className="text-neutral2 flex items-center font-semibold">
                    <div className="relative w-[44px]">
                      <Input className="absolute top-0 right-0 text-sm" />
                    </div>
                    <span>%</span>
                  </div>
                </div>
              }
            />
            <SettingItem label="Swap deadline" setting={<div></div>} />
            <SettingItem label="Trade options" setting={<div></div>} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
function SettingItem({
  label,
  setting,
}: {
  label: string;
  setting: ReactNode;
}) {
  return (
    <div className="flex h-[48px] cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">
      <div className="text-neutral1 flex items-center gap-1 font-medium">
        {label} <InfoIcon />
      </div>
      <div className="flex items-center gap-1 text-sm text-neutral-400">
        {setting}
      </div>
    </div>
  );
}
