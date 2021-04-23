import { MailClient } from "./client";
import { MessageGenerator } from "./message";

declare const global: {
  [x: string]: any;
};

const mailClient = new MailClient();
const messageGenerator = new MessageGenerator();

// preview button
global.preview = () => {
  messageGenerator.preview();
};

// send button
global.sendMail = () => {
  mailClient.send("hello");
};
