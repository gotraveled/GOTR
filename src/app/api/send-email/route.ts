import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // Email configuration
    const toEmail = 'info@gotraveled.com';
    const ccEmail = 'vijay0262@gmail.com';

    let subject = '';
    let emailBody = '';

    // Format email based on type
    switch (type) {
      case 'contact':
        subject = `Contact Form: ${data.subject}`;
        emailBody = `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from GoTraveled Contact Form
        `;
        break;

      case 'tour-inquiry':
        subject = `Tour Inquiry: ${data.tourName} - ${data.destination}`;
        emailBody = `
New Tour Inquiry

Tour Package: ${data.tourName}
Destination: ${data.destination}

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Travel Details:
Preferred Travel Date: ${data.travelDate || 'Not specified'}
Number of Travelers: ${data.travelers}

Additional Information:
${data.message || 'None provided'}

---
Please provide pricing and availability for this tour package.
Sent from GoTraveled Tour Inquiry Form
        `;
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        );
    }

    // In a production environment, you would use a service like SendGrid, AWS SES, or Nodemailer
    // For now, we'll create a mailto link that can be handled client-side
    
    // Since we can't send emails directly from Edge runtime without external services,
    // we'll return success and handle via mailto on client side
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      mailto: {
        to: toEmail,
        cc: ccEmail,
        subject,
        body: emailBody,
      },
    });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
