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

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP not configured — storing form submission only");
      return NextResponse.json({ success: true });
    }

    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.default.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Web Dialsa" <${smtpUser}>`,
      to: "dialsapyc@hotmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre} — Web Dialsa`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1565c0;padding:20px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">Nuevo mensaje desde la web</h1>
          </div>
          <div style="background:#f9fafb;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Nombre:</td><td style="padding:8px 0;color:#1f2937">${nombre}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Email:</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1565c0">${email}</a></td></tr>
              ${telefono ? `<tr><td style="padding:8px 0;font-weight:bold;color:#374151">Teléfono:</td><td style="padding:8px 0"><a href="tel:${telefono}" style="color:#1565c0">${telefono}</a></td></tr>` : ""}
              <tr><td colspan="2" style="padding:16px 0 8px;font-weight:bold;color:#374151">Mensaje:</td></tr>
              <tr><td colspan="2" style="padding:8px 16px;background:white;border-radius:8px;color:#1f2937;line-height:1.6">${mensaje.replace(/\n/g, "<br>")}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Prueba a llamarnos directamente." },
      { status: 500 }
    );
  }
}
