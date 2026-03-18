import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id = 'C10'"
    );

    if (!rows || rows.length === 0) {
      return Response.json({ error: "No data found" });
    }

    let rawData = rows[0].data;

    console.log("RAW DATA:", rawData);

    // ✅ Handle both string and object
    const parsedData =
      typeof rawData === "string"
        ? JSON.parse(rawData)
        : rawData;

    return Response.json(parsedData.cards);

  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ error: "Failed to load services" });
  }
}