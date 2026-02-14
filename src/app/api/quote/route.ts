import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, postcode, serviceType, rooms, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Build email content
    const emailBody = `
New Quote Request from TWH Carpet Cleaning Website
====================================================

Name:           ${name}
Email:          ${email}
Phone:          ${phone}
Postcode:       ${postcode || "Not provided"}
Service Type:   ${serviceType || "Not specified"}
Number of Rooms: ${rooms || "Not specified"}

Message:
${message || "No additional message"}

====================================================
This enquiry was submitted via the TWH Carpet Cleaning website.
    `.trim();

    const htmlBody = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #1d6fbf; padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h1>
    <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0 0; font-size: 14px;">TWH Carpet Cleaning Website</p>
  </div>
  <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${name}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #1d6fbf;">${email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td><td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #1d6fbf;">${phone}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Postcode</td><td style="padding: 8px 0; color: #1e293b;">${postcode || "Not provided"}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service</td><td style="padding: 8px 0; color: #1e293b;">${serviceType || "Not specified"}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Rooms</td><td style="padding: 8px 0; color: #1e293b;">${rooms || "Not specified"}</td></tr>
    </table>
    ${
      message
        ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0;">Message:</p>
        <p style="color: #1e293b; margin: 0; line-height: 1.5;">${message}</p>
      </div>`
        : ""
    }
  </div>
</div>
    `.trim();

    // Configure transporter
    // For production, replace with actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@twhcarpetcleaning.co.uk",
      to: "simonwilbraham@sky.com",
      replyTo: email,
      subject: `New Quote Request from ${name} — TWH Carpet Cleaning`,
      text: emailBody,
      html: htmlBody,
    });

    return NextResponse.json(
      { success: true, message: "Quote request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request. Please try calling us instead." },
      { status: 500 }
    );
  }
}
