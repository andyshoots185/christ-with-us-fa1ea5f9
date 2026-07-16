import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return public contact details for Arsenal Fund Uganda: phone, WhatsApp, email, address, and donation link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      organization: "Arsenal Fund Uganda",
      founded: 2025,
      phone_local: "0731234815",
      phone_international: "+256731234815",
      whatsapp: "https://wa.me/256731234815",
      email: "hello@arsenalfunduganda.org",
      address: "Kampala, Uganda",
      donate_url: "https://wa.me/256731234815?text=" + encodeURIComponent("Hello Arsenal Fund Uganda 👋 I'd love to make a donation and support the cause. Please share the next steps."),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
