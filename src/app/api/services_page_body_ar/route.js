import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data_ar AS content FROM subsections WHERE id='C15'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const rawData = rows[0].content;
    const parsed = typeof rawData === "string" ? JSON.parse(rawData) : rawData;

    return Response.json({ cards: parsed.cards });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load services body" }, { status: 500 });
  }
}