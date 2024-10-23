import db from "@/src/db";
import { users } from "@/src/db/schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  // await db.insert(users).values({
  //   email: "John Doe2",
  // });
  // const user = await db.query.users.findFirst({
  //   where: { email: "John Doe" },
  // });
  // console.log("user email: " + user?.email);
  return NextResponse.json({ message: "Hello from Next.js!" });
};
