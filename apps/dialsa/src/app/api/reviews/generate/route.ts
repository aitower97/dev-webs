import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  if (cookieStore.get("dialsa_admin")?.value !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { review } = await request.json();

  const prompt = `Eres el responsable de atención al cliente de Dialsa, empresa familiar de piscinas, calefacción y climatización en Colmenar Viejo (Sierra Norte de Madrid).

Responde a esta reseña de Google de forma cercana, personal y profesional. Normas:
- Tono: amable y directo, como hablaría el dueño de un negocio familiar
- Si es positiva (4-5 estrellas): agradece con calidez, menciona que fue un placer y anima a volver a contar con vosotros
- Si es negativa (1-3 estrellas): muestra empatía, no te pongas a la defensiva, ofrece contacto directo para solucionar
- Si no hay texto en la reseña: respuesta corta de agradecimiento
- Máximo 120 palabras. En español. Sin emojis.
- Firma siempre: "Un saludo, el equipo de Dialsa"

Reseña de ${review.author_name} (${review.rating}/5 estrellas):
"${review.text || "(Sin comentario)"}"

Respuesta:`;

  const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  const groqData = await groqRes.json();
  const text = groqData.choices?.[0]?.message?.content?.trim() ?? null;

  if (!text) {
    return NextResponse.json(
      { error: groqData.error?.message ?? "Error generando respuesta" },
      { status: 500 }
    );
  }

  return NextResponse.json({ response: text });
}
