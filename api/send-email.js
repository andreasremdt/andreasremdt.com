import http from "http";

function send(options, data) {
  return new Promise((resolve, reject) => {
    const request = http.request(options, (response) => {
      response.on("data", () => resolve(response.statusCode === 200));
    });

    request.on("error", reject);

    request.write(data);
    request.end();
  });
}

export default async function handler(req, res) {
  const { name, email, message, honeypot } = req.body;

  // If we think that a spam bot filled out the form, we pretend that the email
  // was sent.
  if (honeypot || message.length < 30) {
    return res.status(200).json({ message: "OK" });
  }

  if (!name || !email || !message) {
    return res.status(422).json({ message: "Invalid form data" });
  }

  const data = JSON.stringify({
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
    accessToken: process.env.EMAILJS_ACCESS_TOKEN,
    template_params: {
      name,
      email,
      message,
    },
  });

  try {
    const success = await send(
      {
        hostname: "api.emailjs.com",
        port: 80,
        path: "/api/v1.0/email/send",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data.length,
        },
      },
      data
    );

    if (!success) {
      throw new Error("something went wrong, please try again");
    }

    res.status(200).json({ message: "OK" });
  } catch (ex) {
    res.status(500).json({ message: ex.message });
  }
}
