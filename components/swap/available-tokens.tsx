import Image from "next/image";
import { Currency, TokenImage } from "@/types";
export default function AvailableTokens({
  setCurrency,
}: {
  setCurrency: (currency: Currency) => void;
}) {
  return (
    <div className="flex h-[84px] flex-wrap items-center gap-1 py-2">
      {Object.entries(TokenImage).map(([key, val]) => {
        return (
          <div
            key={key}
            onClick={() => setCurrency(key as Currency)}
            className="bg-surface2 hover:bg-surface2-hovered flex w-[70px] cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3"
          >
            <Image src={val} alt={key} width={24} height={24} />
            <div className="text-neutral1 font-basel text-sm leading-[16px] font-medium">
              {key}
            </div>
          </div>
        );
      })}
    </div>
  );
}
