import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "volume-dummy.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    return NextResponse.json(jsonData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load dummy data." },
      { status: 500 }
    );
  }
}
