import { NextResponse } from "next/server"
import LimMailer from "lim-mailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Example configuration
    const mailerConfig = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "gowdakaran939@gmail.com",
        pass: "spywobbvhtbkswyi",
      },
      alias: "Karan's Portfolio",
    }
    const inbox = {
      to: ["karan.programmer.cs@gmail.com"],
      cc: [],
    }
    const mailer: any = new LimMailer(mailerConfig, inbox)

    // Send the email
    const info = await mailer.sendMail({
      subject: `From portfolio - ${name} - ${email}`, // Subject line
      text: `${message}`, // Plain text body\
      html: `<h1> From Karan's Portfolio</h1> <p> ${message} <p> `,
    })

    return NextResponse.json({
      status: "ok",
    })
  } catch (ex: any) {
    console.error(ex.message)
    console.error(ex)

    return NextResponse.json({
      error: {
        msg: ex.message,
        error: ex,
      },
    })
  }
}
