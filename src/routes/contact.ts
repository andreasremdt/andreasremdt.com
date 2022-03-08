import type { RequestEvent } from "@sveltejs/kit/types/internal";

const {
  VITE_EMAIL_JS_SERVICE_ID,
  VITE_EMAIL_JS_TEMPLATE_ID,
  VITE_EMAIL_JS_USER_ID,
  VITE_EMAIL_JS_ACCESS_TOKEN,
} = import.meta.env;

export async function post({ request }: RequestEvent) {
  const { name, email, message, honeypot } = await request.json();

  // If we think that a spam bot filled out the form, we pretend that the email
  // was sent.
  if (honeypot) {
    return {
      status: 200,
    };
  }

  if (!name || !email || !message) {
    return {
      status: 422,
    };
  }

  const body = JSON.stringify({
    template_params: {
      name,
      email,
      message,
    },
    service_id: VITE_EMAIL_JS_SERVICE_ID,
    template_id: VITE_EMAIL_JS_TEMPLATE_ID,
    user_id: VITE_EMAIL_JS_USER_ID,
    accessToken: VITE_EMAIL_JS_ACCESS_TOKEN,
  });

  const response = await global.fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return {
      status: 200,
    };
  }

  return {
    status: response.status,
  };
}

export async function get() {
  return {
    body: {},
  };
}
