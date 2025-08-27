import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rajvardhanj2000@gmail.com", // your email
        pass: "tenlxcagjtqvnvtk", // use App Password for Gmail tenl xcag jtqv nvtk
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "rajvardhanj2000@gmail.com",
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Email sending failed" }), {
      status: 500,
    });
  }
}
