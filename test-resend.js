const { Resend } = require("resend");

const resend = new Resend("re_AeNRa53A_BRfCGziD7iKesMNVHEc8JRPx");

resend.emails
  .send({
    from: "onboarding@resend.dev",
    to: "vaibhavdaspute775@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  })
  .then(() => console.log("✅ Email sent successfully!"))
  .catch((error) => console.error("❌ Error:", error));
