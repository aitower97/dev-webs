import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    const res = await fetch("https://formsubmit.co/ajax/arrocham97@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nombre,
        email: email,
        phone: telefono || "No proporcionado",
        message: mensaje,
        _subject: `Nuevo mensaje de ${nombre} — Web Dialsa`,
        _template: "table",
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Prueba a llamarnos directamente." },
      { status: 500 }
    );
  }
}
