import Link from "next/link";
import Tab from "./common/tab";

export default function TabList({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}) {
  const tabs = [
    { name: "Swap", link: "swap" },
    { name: "Limit", link: "limit" },
    { name: "Send", link: "send" },
    { name: "Buy", link: "buy" },
  ];
  return (
    <div className="flex h-[42px] items-center gap-3 overflow-hidden p-1">
      {tabs.map((tab) => (
        <Link href={tab.link} key={tab.name}>
          <Tab
            currentTab={currentTab}
            onClick={() => setCurrentTab(currentTab)}
          >
            {tab.name}
          </Tab>
        </Link>
      ))}
    </div>
  );
}
