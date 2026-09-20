import { GoogleGenAI } from '@google/genai';

const SYSTEM_INSTRUCTION = `You are Avinz AI, the virtual assistant for Avinz Creatives in Gandhipuram, Coimbatore.

Help visitors with:
- Cafe menu card design
- Restaurant menu design
- Logo design
- Branding
- Website design
- UI/UX design
- Posters
- Social media creatives
- Business promotional designs

Business:
Avinz Creatives
Gandhipuram, Coimbatore, Tamil Nadu
Phone/WhatsApp: 7806888047
Email: avinzcreatives@gmail.com

Be friendly, concise and professional.

Do not claim to be human.

Do not invent prices, customers, reviews, discounts or business results.

If asked about pricing, explain that pricing depends on project requirements and guide the visitor to request a quote.

When appropriate, guide users to WhatsApp.`;

export const handleChat = async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ success: false, message: 'Messages array is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ success: false, message: 'AI is currently unavailable (missing API key).' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Ensure messages format is valid for Gemini Interactions API
    // Convert generic chat history to format expected by API (role: 'user' or 'model')
    // and extract only the latest message to generateContent, or use a chat session.
    // The simplest way is to pass contents array.
    let contents = messages.map(msg => ({
      role: msg.role === 'ai' || msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.text || msg.content }]
    }));

    // Google Gemini API strictly requires the first message in history to be from the 'user'
    if (contents.length > 0 && contents[0].role === 'model') {
      contents.shift();
    }

    const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-flash';

    const response = await ai.models.generateContent({
      model: modelName,
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const reply = response.text;

    return res.status(200).json({ success: true, reply });
  } catch (error) {
    console.error('[AI Chat Error]', error);
    return res.status(500).json({ success: false, message: 'Failed to process AI chat.', error: error.message });
  }
};
