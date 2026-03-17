import db from "@/lib/db";

export async function GET() {
  const [rows] = await db.query(
    "SELECT data FROM subsections WHERE id='C01'"
  );

  const words = JSON.parse(rows[0].data).words;

  return Response.json(words);
}