import db from "@/lib/db";
export const dynamic = 'force-dynamic';
export async function GET(request) {
  try {
    const [rows] = await db.query(
      `SELECT data_ar AS content FROM subsections WHERE id = 'C03'`
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
    return Response.json({ error: "Failed to load bank logos" }, { status: 500 });
  }
}