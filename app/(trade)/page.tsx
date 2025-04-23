// app/(trade)/page.tsx
import { redirect } from "next/navigation";

export default function TradeRoot() {
  redirect("/swap");
}
