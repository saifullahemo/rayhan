import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  const name = readField(payload.name, MAX_NAME_LENGTH);
  const email = readField(payload.email, MAX_EMAIL_LENGTH);
  const message = readField(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json({ message: "Please provide a name, a valid email address, and a message." }, { status: 400 });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
    return NextResponse.json({ message: "Email delivery is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch (error) {
    console.error("Unable to send portfolio contact message", error);
    return NextResponse.json({ message: "Unable to send your message right now." }, { status: 502 });
  }

  return NextResponse.json({ message: "Message sent successfully." });
}
