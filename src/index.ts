import { MailClient } from "./client";
import { NotifierService } from "./service";

declare const global: {
  [x: string]: any;
};

const mailClient = new MailClient();
const notifierService = new NotifierService();

// mail
const mailTo: string = notifierService.getMailTo();
const subject: string = notifierService.getSubject();
const fromName: string = notifierService.getFromName();
const message: string = notifierService.getMessage();

// preview button
global.preview = () => {
  notifierService.preview(message);
};

// send button
global.sendMail = () => {
  mailClient.send(mailTo, subject, fromName, message);
};
