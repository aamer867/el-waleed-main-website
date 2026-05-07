import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      `SELECT data_ar AS content FROM subsections WHERE id = 'C02'`
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const parsed =
      typeof rows[0].content === "string"
        ? JSON.parse(rows[0].content)
        : rows[0].content;

    return Response.json({ cards: parsed.cards });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load landing cards" }, { status: 500 });
  }
}