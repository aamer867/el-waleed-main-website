import db from "@/lib/db";
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const [sectionRows] = await db.query(
      `SELECT id, title, header, description, header_ar, description_ar, type, position
       FROM sections
       WHERE id = 'B01'`
    );

    if (!sectionRows.length) {
      return Response.json({ error: "Section not found" }, { status: 404 });
    }

    return Response.json({ section: sectionRows[0] });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load services section" }, { status: 500 });
  }
}