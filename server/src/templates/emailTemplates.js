/**
 * Avinz Creatives - HTML Email Templates
 */

export const getAdminNotificationTemplate = ({ type, data }) => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let title = 'New Website Inquiry';
  let badgeColor = '#1e40af';
  let detailsHtml = '';

  if (type === 'contact') {
    title = '📩 New Contact Form Message';
    badgeColor = '#2563eb';
    detailsHtml = `
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Full Name:</td><td style="color: #0f172a; font-weight: 600;">${data.name}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td><td style="color: #2563eb;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone Number:</td><td style="color: #0f172a;">${data.phone || 'Not provided'}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject / Service:</td><td style="color: #0f172a;">${data.subject || 'General Inquiry'}</td></tr>
      <tr><td style="padding: 12px 0 4px; color: #64748b; font-weight: 600;" colspan="2">Message:</td></tr>
      <tr><td colspan="2" style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 12px 16px; border-radius: 4px; color: #334155; line-height: 1.6;">${data.message.replace(/\n/g, '<br/>')}</td></tr>
    `;
  } else if (type === 'quote') {
    title = '💼 New Project Quote Request';
    badgeColor = '#059669';
    detailsHtml = `
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td><td style="color: #0f172a; font-weight: 600;">${data.name}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td><td style="color: #2563eb;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone Number:</td><td style="color: #0f172a;">${data.phone || 'Not provided'}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Services Needed:</td><td style="color: #0f172a; font-weight: 600;">${data.service || data.services || 'Multiple Services'}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Estimated Budget:</td><td style="color: #059669; font-weight: 700;">${data.budget || 'Flexible / To Discuss'}</td></tr>
      <tr><td style="padding: 8px 0; color: #64748b; font-weight: 600;">Target Timeline:</td><td style="color: #0f172a;">${data.timeline || 'Standard'}</td></tr>
      <tr><td style="padding: 12px 0 4px; color: #64748b; font-weight: 600;" colspan="2">Project Scope / Details:</td></tr>
      <tr><td colspan="2" style="background: #f8fafc; border-left: 4px solid #059669; padding: 12px 16px; border-radius: 4px; color: #334155; line-height: 1.6;">${(data.details || data.message || 'No additional details provided').replace(/\n/g, '<br/>')}</td></tr>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .header { background: #0b1b4f; padding: 24px 32px; color: #ffffff; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
        .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
        .body { padding: 32px; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: ${badgeColor}; color: #ffffff; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
        .table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Avinz Creatives</h1>
          <p>Creative Design Agency</p>
        </div>
        <div class="body">
          <span class="badge">${title}</span>
          <table class="table">
            ${detailsHtml}
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">Received at: ${timestamp}</p>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Avinz Creatives. All rights reserved. • Coimbatore, Tamil Nadu, India
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getUserConfirmationTemplate = ({ name, type, item }) => {
  let subjectGreeting = 'Thank you for contacting Avinz Creatives!';
  let description = `We have received your message and our team will get back to you within 24 hours.`;

  if (type === 'quote') {
    subjectGreeting = `Project Quote Request Received`;
    description = `Thank you for considering Avinz Creatives for your project. Our technical design team is reviewing your requirements and will get in touch with an estimated proposal and timeline.`;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0b1b4f 0%, #1e40af 100%); padding: 32px; color: #ffffff; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
        .body { padding: 32px; color: #334155; line-height: 1.6; }
        .cta-box { background: #eff6ff; border: 1px solid #bfdbfe; padding: 16px; border-radius: 8px; margin: 24px 0; }
        .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        .contact-pill { display: inline-block; margin: 4px; padding: 6px 12px; background: #f1f5f9; border-radius: 6px; font-size: 12px; font-weight: 600; color: #1e293b; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>AVINZ CREATIVES</h1>
          <p style="margin: 6px 0 0; color: #93c5fd; font-size: 14px;">Creative Design & Web Solutions</p>
        </div>
        <div class="body">
          <h2 style="color: #0f172a; margin-top: 0;">Hello ${name},</h2>
          <p>${description}</p>
          <div class="cta-box">
            <h4 style="margin: 0 0 8px; color: #1e40af;">Quick Contact Options:</h4>
            <p style="margin: 0; font-size: 13px; color: #475569;">
              Need urgent assistance? Reach us directly via phone or WhatsApp:
            </p>
            <div style="margin-top: 12px;">
              <a href="tel:7806888047" class="contact-pill">📞 7806888047</a>
              <a href="mailto:avinzcreatives@gmail.com" class="contact-pill">✉️ avinzcreatives@gmail.com</a>
            </div>
          </div>
          <p style="margin-bottom: 0; font-size: 14px;">
            Warm regards,<br />
            <strong>Team Avinz Creatives</strong><br />
            Coimbatore, Tamil Nadu, India
          </p>
        </div>
        <div class="footer">
          © ${new Date().getFullYear()} Avinz Creatives. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
