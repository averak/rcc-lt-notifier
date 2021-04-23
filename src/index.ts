import { MailClient } from "./client";
import { NotifierService, PICService } from "./service";

declare const global: {
  [x: string]: any;
};

const mailClient = new MailClient();
const notifierService = new NotifierService();
const picService = new PICService();

// mail
const mailTo: string = notifierService.getMailTo();
const subject: string = notifierService.getSubject();
const fromName: string = notifierService.getFromName();
const message: string = notifierService.getMessage();

// preview button
global.preview = () => {
  notifierService.preview(message);
  picService.loadPIC();
};

// send button
global.sendMail = () => {
  mailClient.send(mailTo, subject, fromName, message);
  notifierService.setFinalSendTime();
};
