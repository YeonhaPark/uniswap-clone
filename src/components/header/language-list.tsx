import { Check } from "lucide-react";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

export default function LanguageList({ onBack }: { onBack?: () => void }) {
  const [selected, setSelected] = useState<string>("en");

  return (
    <div className="bg-surface1 dark:bg-surface2 flex h-full flex-col">
      <div className="border-surface3 relative flex items-center border-b px-4 py-3">
        <button
          onClick={onBack}
          className="hover:bg-surface3-hovered rounded p-1 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="text-neutral2 dark:text-neutral3 h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-auto px-4 py-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            className="group hover:bg-surface3-hovered mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 dark:hover:bg-gray-700"
          >
            <span className="text-neutral1 dark:text-neutral2">
              {lang.label}
            </span>
            {selected === lang.code && (
              <Check className="text-accent1 h-5 w-5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
