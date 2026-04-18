// Centralized real photography assets — swap files in src/assets/photos/ to update across the site.
import happy from "@/assets/photos/happy.jpg";
import edu from "@/assets/photos/edu.jpg";
import education from "@/assets/photos/education.jpg";
import eeee from "@/assets/photos/eeee.jpg";
import rdue from "@/assets/photos/rdue.jpg";
import school from "@/assets/photos/school.jpg";
import smile from "@/assets/photos/smile.jpg";
import together from "@/assets/photos/together.jpg";

// Themed imagery — each represents a distinct cause/program for visual differentiation.
import water from "@/assets/photos/water.jpg";
import health from "@/assets/photos/health.jpg";
import nutrition from "@/assets/photos/nutrition.jpg";
import women from "@/assets/photos/women.jpg";
import arts from "@/assets/photos/arts.jpg";
import farming from "@/assets/photos/farming.jpg";
import relief from "@/assets/photos/relief.jpg";
import scholar from "@/assets/photos/scholar.jpg";

// Team portraits
import anne from "@/assets/team/anne.jpg";
import dan from "@/assets/team/dan.jpg";
import imanji from "@/assets/team/imanji.jpg";
import lily from "@/assets/team/lily.jpg";
import legacyGroup from "@/assets/team/legacy-group.jpg";

export const photos = {
  happy, edu, education, eeee, rdue, school, smile, together,
  water, health, nutrition, women, arts, farming, relief, scholar,
};

export const team = { anne, dan, imanji, lily, legacyGroup };

// Rotation set used by the homepage Programs section (changes on scroll).
export const programGallery = [together, scholar, health, water, women, arts, nutrition, farming];
