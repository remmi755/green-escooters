import { transporter, smtpEmail } from "../../../utils/nodemailer";
import { NextRequest } from "next/server";

export async function POST(req) {
  await console.log("POST finally started!!!");

  // if (!req.body) {
  //   return Response.json({ message: "req.body is undefined" }, { status: 400 });
  // }

  const { name, email, message } = await req.json();

  // if (!name || !email || !message) {
  //   return Response.json(
  //     { message: "One or more fields are missing" },
  //     { status: 400 }
  //   );
  // }
  // console.log("req: ", );

  console.log(name, email, message);

  const options = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    // subject: `Contact form submission from ${name}`,
    subject: `Contact form submission from ${name}`,
    html:
      `<p><strong>Name:</strong> ${name}</p>` +
      `<p><strong>Email:</strong> ${email}</p>` +
      `<p><strong>Message:</strong> ${message}</p>`,
  };

  // await transporter.sendMail(options, function (err, data) {
  //   if (err) {
  //     console.log("Error " + err);
  //   } else {
  //     console.log("Email sent successfully!!!");
  //   }
  // });

  try {
    await transporter.sendMail(options);
    return Response.json(
      { message: "Your message was sent successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      { message: "Could not send the email. Your message was not sent" },
      {
        status: 500,
      }
    );
  }
}
