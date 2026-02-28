import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const recipients = [
  { firstName: "Joseph", email: "labuguenkarl35@gmail.com" },
  { firstName: "Francis", email: "amoncio.francis_ge@hnu.edu.ph" },
];

const sendBulkEmails = async () => {
  for (const recipient of recipients) {
    const emailMessage = {
      from: `Sheila Labuguen <${process.env.EMAIL}>`,
      to: recipient.email,
      subject: "IYOT",
      text: `HEllo bitch, ${recipient.firstName}. ayaw nag inquire`,
    };

    await transporter.sendMail(emailMessage);
    console.log("Email sent");
  }
};

sendBulkEmails();
