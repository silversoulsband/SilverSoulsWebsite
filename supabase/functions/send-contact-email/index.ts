import { corsHeaders } from '../_shared/cors.ts';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-align: center;">
            🎵 New Contact Form Submission - Silver Souls
          </h1>
        </div>
        
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Name:</strong>
            <p style="margin: 5px 0; color: #1f2937; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Email:</strong>
            <p style="margin: 5px 0; color: #1f2937; font-size: 16px;">
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Message:</strong>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 5px; border-left: 4px solid #6b7280;">
              <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This message was sent from the Silver Souls website contact form on ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Silver Souls Website <noreply@silversouls.com>',
        to: ['silversouls.ca@gmail.com'],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResult.id 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});