import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT data FROM subsections WHERE id='C02'"
    );

    const cards = JSON.parse(rows[0].data).cards;

    const formattedCards = cards.map(card => ({
        title: card.header,
        imageUrl: card.image_url,
        imageAlt: card.title,
        description: card.description
    }));  

    return Response.json(formattedCards);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to load cards" });
  }
}