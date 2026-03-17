// /api/about-cards/route.js
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id='C04'"
    );

    const rawData = rows[0].data;

    const parsed =
      typeof rawData === "string"
        ? JSON.parse(rawData)
        : rawData;

    return Response.json(parsed.cards);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load about cards" });
  }
}