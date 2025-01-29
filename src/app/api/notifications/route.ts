import { notificationsMock } from "@/hooks";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(notificationsMock);
}

export async function POST(request: Request) {
  const newNotification = await request.json();
  notificationsMock.push(newNotification);
  return NextResponse.json(newNotification, { status: 201 });
}
