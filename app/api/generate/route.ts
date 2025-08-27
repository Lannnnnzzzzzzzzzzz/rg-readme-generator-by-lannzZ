import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { projectName, description, template, badges, lang, enhance } = await req.json();

    const prompt = enhance
      ? `Improve this README into a professional style:\n\n${description}`
      : `Generate a ${template} README in ${lang} for project "${projectName}".
         Description: ${description}.
         Include badges: ${badges.join(", ")}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    return NextResponse.json({ readme: result.response.text() });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to generate" }, { status: 500 });
  }
}
