import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data_ar AS content FROM subsections WHERE id='C14'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const rawData = rows[0].content;
    const parsed = typeof rawData === "string" ? JSON.parse(rawData) : rawData;

    return Response.json({
      title: parsed.cards[0].word,
      description: parsed.cards[1].word,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load services header" }, { status: 500 });
  }
}