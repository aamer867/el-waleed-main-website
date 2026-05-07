import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT header, description, header_ar, description_ar FROM sections WHERE id='B03'"
    );

    if (!rows.length) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    return Response.json(rows[0]);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}