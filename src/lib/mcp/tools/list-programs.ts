import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PROGRAMS = [
  { slug: "back-to-school", title: "Back-to-School Scholar Program", category: "Long-Term Education", status: "Active", participants: 1240, startedYear: 2016 },
  { slug: "mobile-health-clinics", title: "Mobile Health Clinics on Wheels", category: "Healthcare Outreach", status: "Expanding", participants: 8500, startedYear: 2019 },
  { slug: "community-kitchens", title: "Community Kitchens & Nutrition", category: "Food Security", status: "Active", participants: 2400, startedYear: 2018 },
  { slug: "girls-rising", title: "Girls Rising Leadership Academy", category: "Women & Girls Empowerment", status: "Active", participants: 640, startedYear: 2020 },
  { slug: "safe-water-wells", title: "Safe Water Wells & Hygiene Education", category: "Clean Water Infrastructure", status: "Expanding", participants: 9000, startedYear: 2017 },
  { slug: "creative-arts-studios", title: "Creative Arts After-School Studios", category: "Youth & Creativity", status: "New", participants: 320, startedYear: 2023 },
];

export default defineTool({
  name: "list_programs",
  title: "List programs",
  description: "List the active programs run by Arsenal Fund Uganda, including status and number of participants.",
  inputSchema: {
    status: z.string().optional().describe("Optional filter on status (e.g. Active, Expanding, New)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status }) => {
    const items = status ? PROGRAMS.filter((p) => p.status.toLowerCase() === status.toLowerCase()) : PROGRAMS;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { programs: items },
    };
  },
});
