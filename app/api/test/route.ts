import db from "@/src/db";
import { Users } from "@/src/db/schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  await db.insert(Users).values({
    fullName: "John Doe",
    phone: "1234567890",
  });
  const user = await db.query.Users.findFirst();
  console.log(user);
  return NextResponse.json({ message: "Hello from Next.js!" });
};
