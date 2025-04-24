import Image from "next/image";
import InfoIcon from "../icons/info-icon";
export default function ExpandableInfo({ open }: { open: boolean }) {
  return (
    <div>
      <div
        className={`font-basel text-neutral2 grid overflow-hidden px-2 text-sm transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                Fee (0.25%) <InfoIcon />
              </div>
              <span className="text-neutral1">$2.82</span>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                Network cost <InfoIcon />
              </div>
              <div className="text-neutral1 flex items-center gap-1">
                <div>
                  {" "}
                  <Image
                    src="/logos/png/eth-small-logo.png"
                    className="rounded-sm"
                    alt="Gas"
                    width={16}
                    height={16}
                  />
                </div>{" "}
                $1.56
              </div>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                Order routing <InfoIcon />
              </div>
              <span className="text-neutral1">Uniswap API</span>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                Price impact <InfoIcon />
              </div>
              <span>-0.45%</span>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                Max slippage <InfoIcon />
              </div>
              <div className="text-neutral1 flex items-center gap-1">
                <span className="bg-surface3 text-neutral2 flex items-center rounded-full px-1 font-medium">
                  Auto
                </span>{" "}
                0.50%
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
