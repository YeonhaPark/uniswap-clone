import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SunIcon from "@/src/components/icons/sun-icon";
import MoonIcon from "@/src/components/icons/moon-icon";

type Theme = "light" | "dark" | "auto";
type Option = {
  theme: Theme;
  element: React.ReactNode;
};

export default function AnimatedSwitch() {
  const [selected, setSelected] = useState(0);
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const handleSelect = (i: number, theme: string) => {
    setSelected(i);
    setTheme(theme);
  };
  const Options: Option[] = [
    {
      theme: "auto",
      element: t("settings.setting.appearance.option.device.title"),
    },
    { theme: "light", element: <SunIcon width={20} height={20} /> },
    { theme: "dark", element: <MoonIcon width={20} height={20} /> },
  ];

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="border-surface3 relative flex w-full items-center justify-between rounded-full border bg-transparent p-1">
      <div
        className="bg-surface3 hover:bg-surface3-hovered absolute top-1 bottom-1 left-1 z-0 h-[32px] w-[64px] rounded-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${selected * 100}%)` }}
      />

      {/* Switch buttons */}
      {Options.map((option, i) => (
        <button
          key={i}
          onClick={() => handleSelect(i, option.theme)}
          className="text-neutral1 relative z-10 flex h-[32px] w-[64px] cursor-pointer items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
        >
          {option.element}
        </button>
      ))}
    </div>
  );
}
