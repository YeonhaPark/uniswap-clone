import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { TokenData } from "@/types";
export default function TokenList() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // TODO: skeleton
  useEffect(() => {
    const getTokens = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/tokens");
        const data = await res.json();
        setTimeout(() => {
          setTokens(data.tokens);
          setLoading(false);
        }, 1500);
      } catch (e) {
        console.log(e);
      }
    };
    getTokens();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      {loading
        ? Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex h-[68px] items-center gap-3 px-1 py-3">
              <Skeleton className="h-[40px] w-[40px] rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-[120px] rounded" />
                <Skeleton className="h-3 w-[180px] rounded" />
              </div>
            </div>
          ))
        : tokens
            .filter((token) => !!token.logo)
            .map((token, idx) => (
              <div
                key={idx}
                className="hover:bg-surface1-hovered flex h-[68px] cursor-pointer items-center gap-2 py-3"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={token.logo}
                    alt={token.symbol}
                    width={40}
                    height={40}
                    className="rounded-[20px]"
                  />
                  <div className="font-basel flex flex-col items-stretch">
                    <div>{token.name}</div>
                    <div className="flex items-center gap-2 leading-[18px]">
                      <div className="text-neutral2 overflow-x-hidden text-sm overflow-ellipsis whitespace-nowrap">
                        {token.symbol}
                      </div>
                      {token.address && (
                        <div className="text-neutral3 text-sm">{`${token.address.slice(0, 6)}...${token.address.slice(token.address.length - 4)}`}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
    </div>
  );
}
