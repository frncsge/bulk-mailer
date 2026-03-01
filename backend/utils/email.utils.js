import transporter from "../config/email.config.js";

export const sendBulkEmails = async ({
  sender,
  recipients = [],
  subject,
  body,
  attachments,
}) => {
  for (const recipient of recipients) {
    const personalizedBody = body.replace(/{{name}}/g, recipient.name);

    const emailMessage = {
      from: `${sender} <${process.env.EMAIL}>`,
      to: recipient.email,
      subject: `${subject}`,
      html: personalizedBody,
      attachments,
    };

    await transporter.sendMail(emailMessage);
    console.log(`Email sent to ${recipient.email}`);
  }
};

export const createEmailAttachments = (files) => {
  return files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
    contentType: file.mimetype,
  }));
};
