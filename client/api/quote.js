import nodemailer from 'nodemailer';
import { getAdminNotificationTemplate, getUserConfirmationTemplate } from './emailTemplates.js';

export default async function handler(req, res) {
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
    const { name, email, phone, services, service, budget, timeline, details, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required.'
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

    await transporter.sendMail({
      from: `"Avinz Creatives Quotes" <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `[Quote Request] from ${name} - ${service || services || 'Custom Project'}`,
      html: getAdminNotificationTemplate({
        type: 'quote',
        data: { name, email, phone, services: service || services, budget, timeline, details: details || message },
      }),
    });

    try {
      await transporter.sendMail({
        from: `"Avinz Creatives" <${smtpUser}>`,
        to: email,
        subject: `Your Project Quote Request - Avinz Creatives`,
        html: getUserConfirmationTemplate({ name, type: 'quote' }),
      });
    } catch (confError) {
      console.warn('[Auto-reply Warning]', confError.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Quote request received! Our solution architect will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('[Vercel Quote API Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit quote request. Please try again.',
      error: error.message,
    });
  }
}
