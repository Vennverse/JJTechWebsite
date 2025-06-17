import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Set API key if available
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not set, email not sent');
    return false;
  }

  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0369a1; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">
          New Contact Form Submission - JJ-Tech
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${params.firstName} ${params.lastName}</p>
          <p><strong>Email:</strong> ${params.email}</p>
          ${params.company ? `<p><strong>Company:</strong> ${params.company}</p>` : ''}
          ${params.service ? `<p><strong>Service Interest:</strong> ${params.service}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; white-space: pre-wrap;">${params.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            This email was sent from the JJ-Tech contact form. Please respond directly to ${params.email}.
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission - JJ-Tech

Contact Details:
Name: ${params.firstName} ${params.lastName}
Email: ${params.email}
${params.company ? `Company: ${params.company}` : ''}
${params.service ? `Service Interest: ${params.service}` : ''}

Message:
${params.message}

---
This email was sent from the JJ-Tech contact form. Please respond directly to ${params.email}.
    `;

    // Send to both email addresses
    const recipients = ['Info@jj-tech.co', 'JJ.tech.us.corp@gmail.com'];
    
    await mailService.send({
      to: recipients,
      from: 'noreply@jj-tech.co', // This should be a verified sender domain
      subject: `New Contact Form Submission from ${params.firstName} ${params.lastName}`,
      text: emailText,
      html: emailHtml,
      replyTo: params.email,
    });

    console.log('Contact email sent successfully to:', recipients);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}