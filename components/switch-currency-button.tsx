import ArrowDown from "@/components/icons/arrow-down";
export default function SwitchCurrencyButton() {
  return (
    <div className="relative z-10">
      <div className="flex items-center">
        <div className="absolute bottom-[-26px] left-1/2 -translate-x-1/2">
          <div className="bg-surface2 hover:bg-surface2-hovered border-surface1 flex basis-auto cursor-pointer items-center rounded-2xl border-4 p-2">
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
