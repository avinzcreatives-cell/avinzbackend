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
    const { messages } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ success: false, message: 'Messages array is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const systemPrompt = `You are Avinz AI, the friendly and professional virtual assistant for Avinz Creatives located in Gandhipuram, Coimbatore, Tamil Nadu, India.
We specialize in:
- Cafe menu card design
- Restaurant menu design
- Logo & Brand Identity design
- Website & Web Application Design & Development
- UI/UX Design
- Posters, Social Media Creatives & Marketing Graphics

Contact details:
Phone / WhatsApp: 7806888047
Email: avinzcreatives@gmail.com
Address: Gandhipuram, Coimbatore, Tamil Nadu, India

Guidelines:
- Be warm, concise, creative, and professional.
- Do not invent prices or fake reviews. For pricing, guide them to request a quote or contact on WhatsApp (+91 7806888047).
- Encourage visitors to start a project with us!`;

    // Map messages to Gemini API format
    const contents = messages.map(msg => ({
      role: msg.role === 'ai' || msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text || msg.content || '' }]
    }));

    if (contents.length > 0 && contents[0].role === 'model') {
      contents.shift();
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const apiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
        }
      })
    });

    const data = await apiRes.json();

    if (!apiRes.ok) {
      console.error('[Gemini API Error]', data);
      return res.status(200).json({
        success: true,
        reply: "Hello! Our team at Avinz Creatives is excited to assist you. You can connect directly with us at +91 7806888047 or avinzcreatives@gmail.com!"
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you for reaching out to Avinz Creatives! How can we assist you today?";

    return res.status(200).json({ success: true, reply });
  } catch (error) {
    console.error('[Vercel AI Chat Error]', error);
    return res.status(200).json({
      success: true,
      reply: "Thank you for your message! For immediate assistance, feel free to contact us on WhatsApp at +91 7806888047."
    });
  }
}
