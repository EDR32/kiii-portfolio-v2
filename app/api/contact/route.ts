import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ekidama91@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #f13024; border-bottom: 2px solid #eee; padding-bottom: 10px;">Pesan Baru dari Website Portfolio</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subjek:</strong> ${subject}</p>
          <div style="margin-top: 15px; padding: 15px; background: #f9f9f9; border-left: 4px solid #f13024; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Pesan:</strong><br/>${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Email berhasil terkirim!", data },
      { status: 200 },
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan pada server";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
