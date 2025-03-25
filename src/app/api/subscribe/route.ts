import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🌟 Welcome to Our Newsletter!',
      text: 'Thank you for subscribing to our newsletter!',
      html: `
          <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div style="background: #ff7b00; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; color: white;">
              <h1 style="margin: 0;">🎉 You're Subscribed!</h1>
            </div>
            <div style="padding: 20px; background-color: white; text-align: center;">
              <p style="font-size: 16px; color: #333;">Thank you for subscribing to our newsletter! We're excited to keep you updated with the latest news, tips, and exclusive content.</p>
              <p style="font-size: 16px; color: #555;">Stay tuned for exciting updates straight to your inbox!</p>
              <a href="#" style="display: inline-block; padding: 10px 20px; margin-top: 15px; font-size: 16px; color: white; background-color: #ff7b00; border-radius: 5px; text-decoration: none;">Visit Our Website</a>
            </div>
            <div style="text-align: center; padding: 10px; font-size: 14px; color: #888;">
              <p>If you did not subscribe, you can ignore this email.</p>
            </div>
          </div>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
