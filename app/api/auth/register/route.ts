import bcrypt from "bcrypt";
import db from "@/src/db";
import { users } from "@/src/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password, subscriptionLevel } = await req.json();

  // Validate input
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;

  if (
    !name ||
    !email ||
    !password ||
    !subscriptionLevel ||
    !emailRegex.test(email) ||
    !passwordRegex.test(password)
  ) {
    return NextResponse.json(
      { error: "Missing required fields or wrong data" },
      { status: 400 }
    );
  }

  // Check if user already exists
  const existingUser = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Add user to db
  await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
    subscriptionLevel,
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
