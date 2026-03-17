import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT header, description FROM sections WHERE id='B01'"
    );

    return Response.json(rows[0]);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database error" });
  }
}