import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
export default function Tab({
  children,
  currentTab,
  onClick,
}: {
  children: string;
  currentTab: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant={"secondary"}
      onClick={onClick}
      className={cn(
        "text-neutral2 hover:text-neutral1 flex basis-auto rounded-full px-3 py-2 hover:bg-white",
        currentTab === children.charAt(0).toLowerCase() + children.slice(1)
          ? "bg-surface3 hover:bg-surface3-hovered text-neutral1"
          : "bg-white"
      )}
    >
      {children}
    </Button>
  );
}
