import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const { name, email } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"FH Group" <${process.env.MAIL_USER}>`, // sender address
    to: email, // list of receivers
    subject: "Thank You", // Subject line
    text: `Thank You ${name} for Contacting`, // plain text body
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FH Group</title>
    <link rel="shortcut icon" href="https://utfs.io/f/96aac539-2acc-4b11-98ec-56d6fc43e0ed-3enus7.png" type="image/x-icon">
</head>
<body style="margin: 0; padding: 0; color: #4B5065; text-align: center; box-sizing: border-box; font-family: 'Lato', sans-serif;">
    <div style="max-width: 900px; margin: auto;">
        <div style="padding: 20px; background-image: url('https://res.cloudinary.com/dgtk4rthy/image/upload/v1733831349/FHGROUPOC/l4nperr7ka3cx2fx7ijk.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover; display: block; align-items: center; justify-content: space-around; max-height: 100vh;">
            <div style="filter: brightness(100%)">
                <div style="text-align: center;">
                    <a href="https://www.fhgroupoc.com" target="_blank"><img src="https://utfs.io/f/96aac539-2acc-4b11-98ec-56d6fc43e0ed-3enus7.png" alt="FH GROUP OF COMPANIES" style="max-width: 50px;" /></a>
                    <p style="font-size: 18px; margin-top: 15px;">GROUP OF COMPANIES</p>
                    <h2 style="font-size: 18px; padding-top: 10px; color: #4B5065;">ONE STEP SOLUTION PROVIDING<br>& INTEGRATION</h2>
                    <p style="font-size: 15px; max-width: 600px; margin: auto;">Unlock the full potential of your business with FH Group's cutting-edge digital marketing solutions!</p>
                </div>
                <h1 style="font-size: 45px; line-height: 1; color: #7D0F2C; font-weight: 800;">THANK YOU</h1>
                <h2 style="font-size: 20px; color: #4B5065;"><span style="color: black;">${name}</span> <br>contacting us</h2>
                <p style="margin: 15px auto; max-width: 581px;">Thank you for submitting the form. We appreciate your interest and will contact you promptly.</p>
                <div style="margin-bottom: 10px;">
                    <a href="mailto:info@fhgroupoc.com" style="font-weight: 500; color: #4B5065; text-decoration: none;">info@fhgroupoc.com</a>
                </div>
                <p><a href="tel:+971521417285" style="color: #4B5065; text-decoration: none;">UAE : +97-152-141-7285</a></p>
                <div style="margin-top: 20px;">
                    <a href="https://www.facebook.com/fhgroupofcompany" target="_blank"><img src="https://utfs.io/f/e972067c-5a38-4e2e-95c5-dd4385f051a2-9agrty.png" alt="" style="width: 25px;" /></a>
                    <a href="https://www.instagram.com/fhgroupofcompany/" target="_blank"><img src="https://utfs.io/f/0b0ea39d-1d16-4f17-aecf-9bb71e808669-n93847.png" alt="" style="width: 25px;" /></a>
                    <a href="https://twitter.com/fhgroupoc" target="_blank"><img src="https://utfs.io/f/5688a8a3-359b-42a3-820e-ddab98317704-cditeb.png" alt="" style="width: 25px;" /></a>
                </div>
            </div>
            <a href="#" style="font-size: 0px; color: #4B5065; text-decoration: none;">unsubscribe</a>
            </div>
        
    </div>
</body>
</html>
`,
    // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

  return NextResponse.json({ email_sent: info.messageId });
};
