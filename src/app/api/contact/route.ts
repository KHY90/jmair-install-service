import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, phone, postcode, address, addressDetail, inquiry } = await request.json();

  if (!name || !phone || !address || !inquiry) {
    return NextResponse.json(
      { message: "모든 필수 필드를 입력해주세요." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const fullAddress = `${address} ${addressDetail || ''}`.trim();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `[문의 접수] ${name}님의 문의 사항`,
    html: `
  <div style="
    font-family: 'Apple SD Gothic Neo', Arial, sans-serif;
    color: #111418;
    line-height: 1.6;
  ">
    <h1 style="
      font-size: 2rem;
      margin-bottom: 1rem;
    ">
      새로운 문의가 접수되었습니다.
    </h1>

    <p style="
      font-size: 1.125rem;
      margin: 0.5rem 0;
    ">
      <strong>이름:</strong> ${name}
    </p>

    <p style="
      font-size: 1.125rem;
      margin: 0.5rem 0;
    ">
      <strong>연락처:</strong> ${phone}
    </p>

    <p style="
      font-size: 1.125rem;
      margin: 0.5rem 0;
    ">
      <strong>주소:</strong> (${postcode}) ${fullAddress}
    </p>

    <p style="
      font-size: 1.125rem;
      margin: 1rem 0 0.5rem;
    ">
      <strong>문의 내용:</strong>
    </p>

    <p style="
      font-size: 1rem;
      margin: 0;
    ">
      ${inquiry.replace(/\n/g, "<br>")}
    </p>
  </div>
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "문의가 성공적으로 접수되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "메일 전송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
