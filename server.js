const express = require("express");
const cors = require("cors");
const path = require("path");
const sgMail = require("@sendgrid/mail");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve all static files
app.use(express.static(__dirname));

// ✅ Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ SendGrid API Key (Environment Variable recommended)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ✅ API route
app.post("/sendmail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const msg = {
    to: "vaibhavdaspute775@gmail.com",  // तुझा mail
    from: "vaibhavdaspute81@gmail.com", // verified SendGrid email
    subject: "Portfolio Inquiry - Vaibhav Daspute",
    text: `
Portfolio Inquiry Received

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `,
  };

  try {
    await sgMail.send(msg);
    return res.send("Message Sent Successfully ✅");
  } catch (error) {
    console.log(error);
    return res.send("Failed to send ❌");
  }
});

// ✅ Render PORT fix
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on PORT:", PORT);
});
