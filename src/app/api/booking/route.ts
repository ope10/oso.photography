import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/portfolio-data";

// Force dynamic so Next.js never tries to statically pre-render this route
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, date, time, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const recipient = "oluonisamuel8@gmail.com";
    const subject = `[New Appointment Booking] ${service} - ${date} (${time})`;
    const content = `
New Photography Session Request:
---------------------------------
Photographer Email: ${recipient}
Client Name: ${name}
Client Email: ${email}
Client Phone: ${phone}
Service: ${service}
Requested Date: ${date}
Requested Time: ${time}
Session Details: ${message || "None provided"}
Timestamp: ${new Date().toISOString()}
    `.trim();

    console.log(`[APPOINTMENT BOOKING for ${recipient}]:\n`, content);

    // 1. Dispatch to formsubmit.co to deliver actual email to opey271@gmail.com
    try {
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          name: name,
          email: email,
          phone: phone,
          service: service,
          date: date,
          time: time,
          message: message || "No additional notes",
        }),
      });
    } catch (formSubmitErr) {
      console.warn("External email dispatch notice:", formSubmitErr);
    }

    // 2. Resend dispatch if API key is set
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "bookings@oso.photography",
            to: recipient,
            reply_to: email,
            subject: subject,
            text: content,
          }),
        });
      } catch (resendErr) {
        console.error("Resend dispatch error:", resendErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request delivered successfully",
      recipient,
      appointment: {
        name,
        email,
        phone,
        service,
        date,
        time,
        message,
      },
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process appointment." },
      { status: 500 }
    );
  }
}
