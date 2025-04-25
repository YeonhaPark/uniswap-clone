import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
export default function Tab({
  currentTab,
  tab,
  setCurrentTab,
}: {
  currentTab: string;
  tab: { name: string; link: string };
  setCurrentTab: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Button
      size={"none"}
      onClick={() => setCurrentTab(tab.link)}
      className={cn(
        "text-neutral2 hover:text-neutral1 font-basel flex h-[32px] basis-auto rounded-full px-3 py-2 hover:bg-transparent",
        currentTab === tab.link
          ? "bg-surface3 hover:bg-surface3-hovered text-neutral1"
          : "bg-transparent"
      )}
    >
      {tab.name}
    </Button>
  );
}
