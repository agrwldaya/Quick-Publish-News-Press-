import nodemailer from 'nodemailer';

export const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT || 587,
      secure: false,   
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    let info = await transporter.sendMail({
      from: '"AapkiNews" <no-reply@aapkinews.com>',
      to: email,
      subject: title,
      html: body,
    });

    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error occurred while sending email: ', error);
    throw error;
  }
};
