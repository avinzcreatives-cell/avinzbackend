import nodemailer from 'nodemailer';
import { getAdminNotificationTemplate, getUserConfirmationTemplate } from './emailTemplates.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, city, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    const smtpUser = process.env.SMTP_USER || 'avinzcreatives@gmail.com';
    const smtpPass = process.env.SMTP_PASS || 'dwhwrrfbxmvpocpg';
    const adminEmail = process.env.ADMIN_EMAIL || process.env.CONTACT_EMAIL || 'avinzcreatives@gmail.com';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Send notification email to Admin (avinzcreatives@gmail.com)
    await transporter.sendMail({
      from: `"Avinz Creatives Website" <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `[Contact Form] ${subject || 'New Inquiry'} - from ${name}`,
      html: getAdminNotificationTemplate({
        type: 'contact',
        data: { name, email, phone, city, subject, message },
      }),
    });

    // 2. Send polite confirmation email back to customer
    try {
      await transporter.sendMail({
        from: `"Avinz Creatives" <${smtpUser}>`,
        to: email,
        subject: `We've received your message - Avinz Creatives`,
        html: getUserConfirmationTemplate({ name, type: 'contact' }),
      });
    } catch (confError) {
      console.warn('[Auto-reply Warning]', confError.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
    });
  } catch (error) {
    console.error('[Vercel Contact API Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again or contact us directly at avinzcreatives@gmail.com / 7806888047.',
      error: error.message,
    });
  }
}
