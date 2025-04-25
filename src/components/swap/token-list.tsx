import { useEffect, useState } from "react";
import Image from "next/image";
import { TokenData } from "@/types";
export default function TokenList() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true); // TODO: skeleton
  useEffect(() => {
    const getTokens = async () => {
      const res = await fetch("/api/tokens");
      const data = await res.json();
      setTokens(data.tokens);
    };
    getTokens();
  }, []);
  return (
    <div className="flex flex-col justify-center">
      {tokens
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
