import db from "@/lib/db";

export async function GET() {
  console.log("API route called");
  console.log("DB_HOST:", process.env.DB_HOST);

  try {
    const [rows] = await db.query("SHOW TABLES"); // fetch table list
    console.log("Database returned rows:", rows);
    return Response.json({ success: true, tables: rows });
  } catch (error) {
    console.error("Database connection failed:", error);
    return Response.json({ success: false, error: error.message });
  }
}