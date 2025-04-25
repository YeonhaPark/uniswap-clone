import { motion } from "framer-motion";
import ChevronLeft from "@/src/components/icons/chevron-left";
import CheckIcon from "@/src/components/icons/check-icon";
import { Dispatch, SetStateAction } from "react";
import { useTransition } from "react";
import { SettingOptions, Language } from "@/types";
import { usePathname, useRouter } from "../../i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { LANGUAGES_CODE, countryName } from "@/constants";

const LANGUAGES = LANGUAGES_CODE.map((lang) => ({
  key: lang,
  label: lang,
  code: Language[
    (lang.charAt(0).toUpperCase() + lang.slice(1)) as keyof typeof Language
  ],
}));
export default function LanguageSelect({
  setStep,
  setSelected,
}: {
  setStep: Dispatch<SetStateAction<SettingOptions>>;
  setSelected: Dispatch<SetStateAction<string>>;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const [_, startTransition] = useTransition();
  return (
    <motion.div
      key="language"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-[716px] space-y-2 overflow-y-scroll"
    >
      <div className="flex cursor-pointer items-center gap-2 px-0 py-2">
        <span className="hover:opacity-60">
          <ChevronLeft onClick={() => setStep("menu")} />
        </span>
        <h2 className="text-neutral1 text-lg font-medium">
          {t("settings.setting.language.title")}
        </h2>
      </div>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            startTransition(() => {
              router.replace(pathname, { locale: lang.code });
            });
            setSelected(t(`language.${countryName[locale]}`));
          }}
          className="text-neutral1 my-0 flex w-full items-center justify-between rounded px-0 py-3 hover:opacity-60"
        >
          {t(`language.${lang.label}`)}
          {locale === lang.code && (
            <span className="text-accent1 mr-3">
              <CheckIcon />
            </span>
          )}
        </button>
      ))}
    </motion.div>
  );
}
