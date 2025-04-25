export type TransactionType = "Buy" | "Sell";

export type Currency = "ETH" | "WBTC" | "USDC";

export enum TokenImage {
  USDC = "/logos/png/usdc-logo.png",
  ETH = "/logos/png/eth-logo.png",
  WBTC = "/logos/png/wbtc-logo.png",
}
export enum CurrencyRate {
  USDC = 1,
  ETH = 1000,
  WBTC = 10000,
}

export enum Decimals {
  USDC = 6,
  ETH = 18,
  WBTC = 8,
}

export type TokenData = {
  chain: string;
  fullyDilutedValuation: {
    value: number;
    currency: string;
  };
  price: {
    value: number;
    currency: string;
  };
  pricePercentChange1Day: {
    currency: string;
    value: number;
  };
  volume1Day: {
    value: number;
    currency: string;
  };
  totalValueLocked: {
    value: number;
    currency: string;
  };
  protectionInfo: {
    result: string;
    attackTypes: string[];
  };
  feeData: {
    sellFeeBps: number | null;
    buyFeeBps: number | null;
    feeTakenOnTransfer: boolean | null;
    externalTransferFailed: boolean | null;
    sellReverted: boolean | null;
  };
  safetyLevel: string;
  decimals: number;
  address: string | null;
  symbol: string;
  name: string;
  logo: string;
};

export interface Data {
  tokens: TokenData[];
}

export type SettingOptions = "menu" | "language" | "currency";

export enum Language {
  Afrikaans = "af-ZA",
  Arabic = "ar-SA",
  Catalan = "ca-ES",
  ChineseSimplified = "zh", // Defaulting overarching Chinese language code to Simplified
  ChineseTraditional = "zh-Hant",
  Czech = "cs-CZ",
  Danish = "da-DK",
  Dutch = "nl-NL",
  English = "en-US",
  Finnish = "fi-FI",
  French = "fr-FR",
  Greek = "el-GR",
  Hebrew = "he-IL",
  Hindi = "hi-IN",
  Hungarian = "hu-HU",
  Indonesian = "id-ID",
  Italian = "it-IT",
  Japanese = "ja-JP",
  Korean = "ko-KR",
  Malay = "ms-MY",
  Norwegian = "no-NO",
  Polish = "pl-PL",
  Portuguese = "pt-PT",
  Romanian = "ro-RO",
  Russian = "ru-RU",
  Serbian = "sr-SP",
  SpanishSpain = "es-ES",
  SpanishLatam = "es-419",
  SpanishUnitedStates = "es-US",
  Swahili = "sw-TZ",
  Swedish = "sv-SE",
  Turkish = "tr-TR",
  Ukrainian = "uk-UA",
  Urdu = "ur-PK",
  Vietnamese = "vi-VN",
}
