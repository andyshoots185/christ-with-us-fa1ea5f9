import { defineTool } from "@lovable.dev/mcp-js";

const TIERS = [
  { name: "Spark", price_usd: 120, description: "Sponsor essentials for one child for a school term.", perks: ["Monthly progress updates", "Personal thank-you letter", "Impact certificate"] },
  { name: "Hope", price_usd: 280, description: "Full sponsorship for a child including meals, tuition and materials.", perks: ["Quarterly video updates", "Two personal letters/year", "Named on donor wall", "Annual report"] },
  { name: "Legacy", price_usd: 550, description: "Deep partnership funding a child plus community program contribution.", perks: ["Direct mentor pairing", "Site visit invitation", "Recognition plaque", "Full transparency dashboard"] },
];

export default defineTool({
  name: "list_sponsor_tiers",
  title: "List sponsor tiers",
  description: "Return the sponsorship tiers (Spark, Hope, Legacy) with prices in USD and included perks.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TIERS, null, 2) }],
    structuredContent: { tiers: TIERS },
  }),
});
