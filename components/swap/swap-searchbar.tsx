import NavSearchIcon from "@/components/icons/nav-search-icon";
import { Input } from "../ui/input";
import ChevronDown from "../icons/chevron-down";
import Image from "next/image";
import { useState } from "react";
import { PopoverContent, PopoverTrigger, Popover } from "../ui/popover";
import { supportedNetworks } from "@/constants";
import MarkIcon from "../icons/mark-icon";
export default function SwapSearchbar() {
  const [rotated, setRotated] = useState<boolean>(false);

  return (
    <div className="flex shrink grow basis-auto self-center py-1">
      <div className="flex h-[48px] w-full max-w-[400px] min-w-[280px] rounded-full bg-gray-100 px-1 py-2">
        <div className="mx-4 flex w-full items-center gap-2">
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
          <div className="text-neutral2 flex items-stretch">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logos/png/all-networks-icon.png"
                alt="All Networks"
                width={20}
                height={20}
              />
              <Popover>
                <PopoverTrigger>
                  <div
                    onClick={() => setRotated(!rotated)}
                    className={`cursor-pointer transition-transform duration-200 ${
                      rotated ? "-rotate-[180deg]" : "rotate-0"
                    }`}
                  >
                    <ChevronDown width={20} height={20} />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  side="bottom"
                  className="font-basel border-surface3 max-h-[647px] w-[225px] cursor-pointer border p-2"
                >
                  <div>
                    <div className="flex items-center justify-between px-2 py-[10px]">
                      <div className="flex items-center gap-3">
                        <div>
                          <Image
                            className="rounded-[8px]"
                            src={"/logos/png/all-networks-icon.png"}
                            alt={"All Networks"}
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>All Networks</div>
                      </div>
                      <div className="flex items-center justify-center pl-2">
                        <MarkIcon />
                      </div>
                    </div>
                    {supportedNetworks.map((network) => (
                      <div
                        key={network.chainId}
                        className="flex items-center justify-between px-2 py-[10px]"
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <Image
                              className="rounded-[8px]"
                              src={network.src}
                              alt={network.name}
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            {network.name}{" "}
                            {network.chainId === 130 && (
                              <span className="rounded-[6px] bg-pink-50 px-1 py-0.5 text-xs font-medium text-pink-600">
                                New
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center"></div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
