import { ETH_USD, USDC, WBTC_USD } from "@/constants";
import { Currency } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const usdRates: Record<Currency, number> = {
  ETH: ETH_USD,
  WBTC: WBTC_USD,
  USDC: USDC,
};

export function rate(from: Currency, to: Currency): number {
  return usdRates[to] / usdRates[from];
}

export function swap(from: Currency, to: Currency, amount: number): number {
  if (from === to) return amount;

  const valueInUSD = amount * usdRates[from]; // 1단계: USD로 환산
  const result = valueInUSD / usdRates[to]; // 2단계: 원하는 통화로 환산

  return result;
}
