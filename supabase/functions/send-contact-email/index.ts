Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const body = await req.json().catch(() => null);

    if (!body?.name || !body?.email || !body?.message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    console.log("ENV TEST:", RESEND_API_KEY);

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    // =========================
    // EMAIL #1 → YOU (LEAD NOTIFICATION)
    // =========================
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: `${Deno.env.get("COMPANY_NAME")} <${Deno.env.get("FROM_EMAIL")}>`,
        to: Deno.env.get("OWNER_EMAIL"),
        subject: "New Contact Form Submission",

        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #111;">
            <h1 style="margin-bottom: 24px;">
              New Contact Form Submission
            </h1>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; font-weight: bold; width: 180px; border-bottom: 1px solid #ddd;">
                  Name
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  ${body.name}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">
                  Email
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  ${body.email}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">
                  Phone Number
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  ${body.phone || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">
                  Address
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  ${body.address || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #ddd;">
                  Service Type
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">
                  ${body.serviceType || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding: 12px; font-weight: bold; vertical-align: top;">
                  Message
                </td>
                <td style="padding: 12px; white-space: pre-wrap;">
                  ${body.message || "No message provided"}
                </td>
              </tr>
            </table>
          </div>
        `,
      }),
    });

    const result = await emailResponse.json();

    // =========================
    // EMAIL #2 → CUSTOMER CONFIRMATION
    // =========================
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: `${Deno.env.get("COMPANY_NAME")} <${Deno.env.get("FROM_EMAIL")}>`,
        to: body.email,
        subject: "We received your message",

        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; color: #111;">
            <h2>Thanks ${body.name}!</h2>

            <p>
              We received your message and will be in contact with you soon.
            </p>

            <p style="margin-top: 20px;">
            — ${Deno.env.get("COMPANY_NAME")}
            </p>
          </div>
        `,
      }),
    });

    const customerResult = await customerEmailResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        leadEmail: result,
        customerEmail: customerResult,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Server error",
        details: String(error),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});