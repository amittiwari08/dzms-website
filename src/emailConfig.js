/**
 * EmailJS configuration.
 *
 * This site is frontend-only (no backend/server), so sending the contact
 * wizard's submission to a real inbox is done through EmailJS — a service
 * that lets a browser send email directly using a public key, with no
 * server code required.
 *
 * SETUP (takes about 5 minutes, free tier is enough for this):
 *   1. Create a free account at https://www.emailjs.com/
 *   2. Add an "Email Service" (e.g. connect your Gmail) — this gives you
 *      a SERVICE_ID.
 *   3. Create an "Email Template" — this gives you a TEMPLATE_ID. In the
 *      template's "To Email" field, enter:
 *          akmth3322@gmail.com, ceo@dzms.co.in
 *      (EmailJS accepts a comma-separated list of recipients here — both
 *      addresses will receive every submission.)
 *      In the template BODY, use these variables so the fields the
 *      visitor filled in actually show up in the email:
 *          {{from_name}}, {{from_company}}, {{from_email}}, {{from_phone}},
 *          {{from_country}}, {{service}}, {{business_type}}, {{budget}},
 *          {{timeline}}, {{description}}, {{file_names}}
 *   4. Go to Account → General to find your PUBLIC_KEY.
 *   5. Paste all three values below.
 *
 * Until you fill these in, the contact wizard's animation and success
 * screen still work exactly as before — it just won't have a real inbox
 * to deliver to, and Contact.jsx will log a console warning instead of
 * throwing.
 */
export const EMAILJS_SERVICE_ID = "service_k649r0e";
export const EMAILJS_TEMPLATE_ID = "template_8mlkcjl";
export const EMAILJS_PUBLIC_KEY = "6qmyCS41ZAhTv3nji";

// Kept here too (not just in the EmailJS template) so the same list can be
// reused if you ever swap EmailJS for a different provider later.
export const NOTIFY_EMAILS = ["akmth3322@gmail.com", "ceo@dzms.co.in"];
