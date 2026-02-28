import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { inquiryEmail } from "./emailOptions/inquiryEmail.js";
import { recipients } from "./emailOptions/recipients.js";
import transporter from "./emailOptions/mailerConfig.js";

dotenv.config();

const attachmentsFolder = path.join(process.cwd(), "attachments");
const attachments = fs.readdirSync(attachmentsFolder).map((file) => ({
  filename: file,
  path: path.join(attachmentsFolder, file),
}));

const sendBulkEmails = async () => {
  for (const recipient of recipients) {
    const emailMessage = {
      from: `Sheila Labuguen <${process.env.EMAIL}>`,
      to: recipient.email,
      subject: "Modan Loft",
      html: inquiryEmail(recipient.firstName),
      attachments: attachments,
    };

    await transporter.sendMail(emailMessage);
    console.log(`Email sent to ${recipient.email}`);
  }
};

sendBulkEmails();
