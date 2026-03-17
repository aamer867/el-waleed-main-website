import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id='C03'"
    );

    const banks = JSON.parse(rows[0].data).banks;

    const logosData = banks.map(bank => ({
      src: bank.image_url,
      alt: bank.name,
      url: bank.link
    }));

    return Response.json(logosData);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load logos" });
  }
}