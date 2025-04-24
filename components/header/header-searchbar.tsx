"use client";
import NavSearchIcon from "@/components/icons/nav-search-icon";
import { Input } from "@/components/ui/input";

export default function HeaderSearchBar() {
  return (
    <div className="flex h-[42px] shrink grow basis-auto self-center">
      <div className="grid-area-[input] border-surface3 text-neutral2 bg-surface2 flex h-[40px] max-w-[400px] min-w-[280px] items-center gap-1 rounded-[20px] border px-4 py-2">
        <NavSearchIcon />
        <span className="contents">
          <Input
            type="text"
            placeholder="Search tokens"
            autoCapitalize="sentences"
            autoComplete="on"
            className="mr-2 w-full"
          />
        </span>
        <div className="bg-surface3 text-neutral2 flex h-[20px] w-[20px] items-center justify-center rounded-[4px] px-2 text-[12px] leading-[16px] font-[535] opacity-60 backdrop-blur-[60px]">
          /
        </div>
      </div>
    </div>
  );
}
