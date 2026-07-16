import { defineMcp } from "@lovable.dev/mcp-js";
import listCauses from "./tools/list-causes";
import listPrograms from "./tools/list-programs";
import getContactInfo from "./tools/get-contact-info";
import listSponsorTiers from "./tools/list-sponsor-tiers";

export default defineMcp({
  name: "arsenal-fund-uganda-mcp",
  title: "Arsenal Fund Uganda MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Arsenal Fund Uganda — a Uganda-based charity founded by Arsenal FC supporters. Use `list_causes` and `list_programs` to explore the initiatives, `list_sponsor_tiers` for sponsorship options, and `get_contact_info` for how to donate or reach the team.",
  tools: [listCauses, listPrograms, listSponsorTiers, getContactInfo],
});
