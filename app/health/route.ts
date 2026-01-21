import { NextResponse } from "next/server";

export async function GET() {
  const buildTime = process.env.BUILD_TIME ?? new Date().toISOString();
  const gitCommit = process.env.GIT_COMMIT;

  return NextResponse.json({
    status: "ok",
    buildTime,
    gitCommit,
  });
}
