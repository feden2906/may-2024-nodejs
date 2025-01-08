import path from "node:path";

import nodemailer, { Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

import { config } from "../configs/config";
import { emailConstants } from "../constants/email.constants";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailTypeToPayloadType } from "../types/email-type-to-payload.type";

class EmailService {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      from: "",
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });

    const hbsOptions = {
      viewEngine: {
        extname: ".hbs",
        layoutsDir: path.join(process.cwd(), "src", "templates", "layouts"),
        partialsDir: path.join(process.cwd(), "src", "templates", "partials"),
        defaultLayout: "main",
      },
      viewPath: path.join(process.cwd(), "src", "templates", "views"),
      extName: ".hbs",
    };

    this.transporter.use("compile", hbs(hbsOptions));
  }

  public async sendEmail<T extends EmailTypeEnum>(
    type: T,
    email: string,
    context: EmailTypeToPayloadType[T],
  ): Promise<void> {
    const { subject, template } = emailConstants[type];
    const options = { to: email, subject, template, context };
    await this.transporter.sendMail(options);
  }
}

export const emailService = new EmailService();
