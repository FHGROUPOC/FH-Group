import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


export const POST = async (req) => {
    const { name, img, message, blogslug,emailforcomment } = await req.json();

    const transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtpout.secureserver.net",
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
    });
    
    
    // async..await is not allowed in global scope, must use a wrapper

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"FH Group" <donotreply@fhgroupoc.com>', // sender address
        to: emailforcomment,// list of receivers
        subject: `New Comment Reply from ${name}`, // Subject line
        text: `Check This Out`, // plain text body
        html: `
       <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinkedIn Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            text-align: center;
            padding: 10px 0;
        }
        
        .header img {
            max-width: 50px;
        }
        
        .message {
            text-align: center;
            margin: 20px 0;
        }
        
        .message img {
            border-radius: 50%;
            max-width: 80px;
        }
        
        .message h2 {
            font-size: 25px;
            margin: 10px 0;
            color: black;
        }
        
        .message p {
            font-size: 14px;
            color: #555;
        }
        
        .button {
            text-align: center;
            margin: 20px 0;
        }
        
        .button a {
            background-color: #0073b1;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://res.cloudinary.com/dgtk4rthy/image/upload/v1734349339/FHGROUPOC/LOGOS/vuxagfvistorxnaoqnop.png" alt="FH Logo">
        </div>
        <div class="message">
            <img src=${img} alt=${name}>
            <p>1 new comment reply awaits for your response in<b> ${blogslug}</b></p>

            <h2>${name}</h2>
            <p>${message}</p>
        </div>
        <div class="button">
            <a href=https://www.fhgroupoc.com/blog/${blogslug}#commentbox>View Comment</a>
        </div>

    </div>
</body>

</html>

`,
        // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    return NextResponse.json({ email_sent: info.messageId })

}

