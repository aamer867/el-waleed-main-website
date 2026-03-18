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

        const parsedData =
            typeof rawData === "string"
                ? JSON.parse(rawData)
                : rawData;

        return Response.json(parsedData); // ✅ No .cards — data is a flat object
    } catch (error) {
        console.error("API ERROR:", error);
        return Response.json({ error: "Failed to load contact info" });
    }
}