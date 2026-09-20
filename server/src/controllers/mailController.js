import nodemailer from 'nodemailer';
import { getAdminNotificationTemplate, getUserConfirmationTemplate } from '../templates/emailTemplates.js';

let transporter = null;

// Initialize or get transporter
const getTransporter = async () => {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (SMTP_USER && SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST || 'smtp.gmail.com',
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
    console.log(`[Email] Configured custom SMTP with host: ${SMTP_HOST || 'smtp.gmail.com'}`);
  } else {
    // Fallback Ethereal test account for local testing & development
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`[Email] Using Ethereal Mail fallback for development (${testAccount.user})`);
    } catch (err) {
      console.warn('[Email] Could not create Ethereal account, falling back to simulated mail logger.', err.message);
      transporter = {
        sendMail: async (options) => {
          console.log('\n--- [SIMULATED EMAIL DISPATCH] ---');
          console.log(`To: ${options.to}`);
          console.log(`Subject: ${options.subject}`);
          console.log(`Time: ${new Date().toISOString()}`);
          console.log('-----------------------------------\n');
          return { messageId: 'simulated-' + Date.now() };
        }
      };
    }
  }

  return transporter;
};

/**
 * Handle Contact Form Submission
 */
export const handleContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    const mailer = await getTransporter();
    const adminEmail = process.env.CONTACT_EMAIL || 'avinzcreatives@gmail.com';

    // 1. Send Notification to Admin
    const adminMailOptions = {
      from: `"Avinz Creatives Website" <${process.env.SMTP_USER || 'noreply@avinzcreatives.in'}>`,
      to: adminEmail,
      replyTo: email,
      subject: `[Contact Form] ${subject || 'New Message'} - from ${name}`,
      html: getAdminNotificationTemplate({
        type: 'contact',
        data: { name, email, phone, subject, message },
      }),
    };

    const info = await mailer.sendMail(adminMailOptions);
    const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;

    // 2. Send Auto-confirmation to User (Non-blocking)
    mailer.sendMail({
      from: `"Avinz Creatives" <${process.env.SMTP_USER || 'avinzcreatives@gmail.com'}>`,
      to: email,
      subject: `We've received your message - Avinz Creatives`,
      html: getUserConfirmationTemplate({ name, type: 'contact' }),
    }).catch(err => console.error('[Email Auto-Reply Error]', err.message));

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
      previewUrl,
    });
  } catch (error) {
    console.error('[handleContact Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or reach out directly at avinzcreatives@gmail.com.',
      error: error.message,
    });
  }
};

/**
 * Handle Project Quote Request
 */
export const handleQuote = async (req, res) => {
  try {
    const { name, email, phone, services, budget, timeline, details } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required for a quote request.' });
    }

    const mailer = await getTransporter();
    const adminEmail = process.env.CONTACT_EMAIL || 'avinzcreatives@gmail.com';

    const adminMailOptions = {
      from: `"Avinz Creatives Quotes" <${process.env.SMTP_USER || 'noreply@avinzcreatives.in'}>`,
      to: adminEmail,
      replyTo: email,
      subject: `[Project Quote Request] from ${name} - ${services || 'Custom Project'}`,
      html: getAdminNotificationTemplate({
        type: 'quote',
        data: { name, email, phone, services, budget, timeline, details },
      }),
    };

    const info = await mailer.sendMail(adminMailOptions);
    const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;

    // Confirmation to client
    mailer.sendMail({
      from: `"Avinz Creatives" <${process.env.SMTP_USER || 'avinzcreatives@gmail.com'}>`,
      to: email,
      subject: `Your Project Quote Request - Avinz Creatives`,
      html: getUserConfirmationTemplate({ name, type: 'quote' }),
    }).catch(err => console.error('[Email Auto-Reply Error]', err.message));

    return res.status(200).json({
      success: true,
      message: 'Quote request received! Our solution architect will contact you within 24 hours.',
      previewUrl,
    });
  } catch (error) {
    console.error('[handleQuote Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit quote request. Please try again.',
      error: error.message,
    });
  }
};

