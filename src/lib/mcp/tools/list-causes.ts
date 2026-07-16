import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CAUSES = [
  { slug: "education-equality", title: "Education Equality & Access for Every Child", category: "Education", raised: 40000, goal: 65200, location: "Wakiso & Mukono districts, Uganda", beneficiaries: "1,200+ children" },
  { slug: "healthcare-access", title: "Healthcare Access for Vulnerable Communities", category: "Emergency Health Relief", raised: 16800, goal: 40000, location: "Greater Kampala outskirts", beneficiaries: "8,500+ patients yearly" },
  { slug: "nutritional-support", title: "Nutritional Support & Food Security", category: "Food Security", raised: 60800, goal: 100000, location: "Kampala & Lake Victoria region", beneficiaries: "2,400 families" },
  { slug: "clean-water", title: "Access to Clean Water for All", category: "Water Purification", raised: 20800, goal: 60000, location: "Northern Uganda", beneficiaries: "18 villages" },
  { slug: "women-girls", title: "Empowering Women and Girls Through Education", category: "Empowerment", raised: 80000, goal: 85000, location: "Kampala & Jinja", beneficiaries: "640 young women" },
];

export default defineTool({
  name: "list_causes",
  title: "List causes",
  description: "List the charitable causes Arsenal Fund Uganda currently supports, with fundraising progress and location.",
  inputSchema: {
    category: z.string().optional().describe("Optional case-insensitive category filter (e.g. Education, Food Security)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = category
      ? CAUSES.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()))
      : CAUSES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { causes: items },
    };
  },
});
