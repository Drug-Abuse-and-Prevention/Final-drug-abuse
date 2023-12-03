const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendWhatsAppMessages(phoneNumbers, message) {
  try {
    for (const phoneNumber of phoneNumbers) {
      await client.messages.create({
        body: message,
        from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
        to: `whatsapp:${phoneNumber}`,
      });
    }
    console.log('WhatsApp messages sent successfully!');
  } catch (error) {
    console.error('Error sending WhatsApp messages:', error);
  }
}

module.exports = sendWhatsAppMessages;
