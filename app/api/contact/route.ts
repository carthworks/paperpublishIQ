import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate input
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact us directly at tkarthikeyan@gmail.com' },
                { status: 500 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'PaperPublishIQ <onboarding@resend.dev>', // Use your verified domain in production
            to: ['tkarthikeyan@gmail.com'],
            replyTo: email,
            subject: `[PaperPublishIQ Contact] ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 3px solid #0d9488; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0d9488; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
            <p>This email was sent from the PaperPublishIQ contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
            text: `
New Contact Form Submission - PaperPublishIQ

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from PaperPublishIQ Contact Form
Reply to: ${email}
      `.trim(),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again or contact us directly at tkarthikeyan@gmail.com' },
                { status: 500 }
            );
        }

        // Log successful submission
        console.log('Email sent successfully:', {
            id: data?.id,
            name,
            email,
            subject,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully! We will get back to you soon.',
            emailId: data?.id,
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to process your message. Please try again or email us directly at tkarthikeyan@gmail.com' },
            { status: 500 }
        );
    }
}
