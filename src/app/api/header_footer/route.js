import db from "@/lib/db";
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id='C16'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const rawData = rows[0].data;
    const parsed = typeof rawData === "string" ? JSON.parse(rawData) : rawData;

    return Response.json(parsed.cards[0]);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load footer data" }, { status: 500 });
  }
}