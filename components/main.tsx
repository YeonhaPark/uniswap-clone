"use client";
import { useState } from "react";
import TabList from "./tab-list";
import { usePathname } from "next/navigation";

export default function Main() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(pathname.split("/")[1]);
  return (
    <div className="relative col-[2] row-[1] m-auto flex min-h-full w-screen max-w-[1200px] flex-col">
      <div className="relative flex w-full max-w-[480px] shrink-0 items-stretch px-2 pt-[60px] pb-[40px]">
        <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
    </div>
  );
}
