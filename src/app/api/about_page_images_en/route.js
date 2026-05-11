import db from "@/lib/db";
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id='C12'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const rawData = rows[0].data;
    const parsed = typeof rawData === "string" ? JSON.parse(rawData) : rawData;

    return Response.json({ images: parsed.cards.map(card => card.image_url) });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load carousel images" }, { status: 500 });
  }
}