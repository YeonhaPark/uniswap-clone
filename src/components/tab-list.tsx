"use client";
import { useTranslations } from "next-intl";

import { usePathname } from "../i18n/navigation";
import Link from "next/link";
import Tab from "./common/tab";
import { useState } from "react";

export default function TabList() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(pathname.split("/")[1]);
  const t = useTranslations();
  const tabs = [
    { name: t(`home.label.swap`), link: "swap" },
    { name: t(`limits.price.label`), link: "limit" },
    { name: t(`send.title`), link: "send" },
    { name: t(`common.buy.label`), link: "buy" },
  ];
  return (
    <div className="flex h-[42px] items-center gap-3 overflow-hidden p-1 pb-1.5">
      {tabs.map((tab) => (
        <Link href={tab.link} key={tab.name}>
          <Tab
            currentTab={currentTab}
            tab={tab}
            setCurrentTab={setCurrentTab}
          />
        </Link>
      ))}
    </div>
  );
}
