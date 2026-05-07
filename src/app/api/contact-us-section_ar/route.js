import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data_ar FROM subsections WHERE id = 'C10'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const rawData = rows[0].data_ar;
    const parsed = typeof rawData === "string" ? JSON.parse(rawData) : rawData;

    return Response.json(parsed);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load contact info" }, { status: 500 });
  }
}