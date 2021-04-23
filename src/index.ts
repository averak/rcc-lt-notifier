import { MailClient } from "./client";
import { NotifierService } from "./service";

declare const global: {
  [x: string]: any;
};

// mail settings
const mailClient = new MailClient();
const mailTo: string = NotifierService.getMailTo();
const subject: string = NotifierService.getSubject();
const fromName: string = NotifierService.getFromName();
const message: string = NotifierService.getMessage();

// preview button
global.preview = () => {
  NotifierService.preview(message);
};

// send button
global.sendMail = () => {
  mailClient.send(mailTo, subject, fromName, message);
  NotifierService.setFinalSendTime();
};
