import { Client, MailClient } from "./client";

const mailClient: Client = new MailClient();
mailClient.send("hello");
