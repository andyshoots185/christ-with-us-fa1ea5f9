import { photos } from "./images";

export type Cause = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  raised: number;
  goal: number;
  location?: string;
  beneficiaries?: string;
  body?: string[];
  gallery?: string[];
};

export const causes: Cause[] = [
  {
    slug: "education-equality",
    title: "Education Equality & Access for Every Child",
    category: "Education",
    excerpt: "Putting books, uniforms and dignity in the hands of children across rural Uganda.",
    image: photos.edu,
    raised: 40000,
    goal: 65200,
    location: "Wakiso & Mukono districts, Uganda",
    beneficiaries: "1,200+ children",
    body: [
      "Across rural Uganda, thousands of children miss school not because they lack ability — but because they lack a uniform, a textbook, or shoes. Our Education Equality program tackles those small barriers that keep children from a brighter tomorrow.",
      "We supply complete back-to-school kits, fund teacher training, and partner with 14 community schools to track attendance, performance and well-being month by month.",
      "Every $35 sponsors one child for a full school month — including meals, learning materials and a safe place to grow.",
    ],
    gallery: [photos.edu, photos.education, photos.school],
  },
  {
    slug: "healthcare-access",
    title: "Healthcare Access for Vulnerable Communities",
    category: "Emergency Health Relief",
    excerpt: "Mobile clinics and emergency health units reaching the last-mile in Kampala's outskirts.",
    image: photos.rdue,
    raised: 16800,
    goal: 40000,
    location: "Greater Kampala outskirts",
    beneficiaries: "8,500+ patients yearly",
    body: [
      "Our mobile clinics travel to the villages that hospitals never reach — providing maternal care, vaccinations, malaria treatment and chronic-disease screening.",
      "Each unit is staffed by 2 nurses and a community health worker, supported by tele-medicine links to specialists in Kampala.",
      "Your gift fuels medicines, fuel and the people who deliver hope week after week.",
    ],
    gallery: [photos.rdue, photos.together, photos.happy],
  },
  {
    slug: "nutritional-support",
    title: "Nutritional Support & Food Security",
    category: "Food Security",
    excerpt: "Daily meals, clean water and supplements for families in times of crisis.",
    image: photos.together,
    raised: 60800,
    goal: 100000,
    location: "Kampala & Lake Victoria region",
    beneficiaries: "2,400 families",
    body: [
      "Hunger is the loudest emergency we answer. We distribute fortified meals to schools, run community kitchens, and supply emergency food packs after floods or droughts.",
      "Through community-farming co-ops we also build long-term resilience — teaching families to grow what they eat.",
      "$50 feeds a family of five for an entire week.",
    ],
    gallery: [photos.together, photos.smile, photos.happy],
  },
  {
    slug: "clean-water",
    title: "Access to Clean Water for All",
    category: "Water Purification",
    excerpt: "Filtration systems, safe water distribution and hygiene education for villages.",
    image: photos.smile,
    raised: 20800,
    goal: 60000,
    location: "Northern Uganda",
    beneficiaries: "18 villages",
    body: [
      "We drill solar-powered boreholes, install community filters and run hygiene workshops so children stop missing school due to waterborne illness.",
      "Each completed well serves an average of 500 people for over a decade.",
      "Your support builds the infrastructure of dignity.",
    ],
    gallery: [photos.smile, photos.together],
  },
  {
    slug: "women-girls",
    title: "Empowering Women and Girls Through Education",
    category: "Empowerment",
    excerpt: "Skills training, mentorship and scholarships for the next generation of leaders.",
    image: photos.education,
    raised: 80000,
    goal: 85000,
    location: "Kampala & Jinja",
    beneficiaries: "640 young women",
    body: [
      "From tailoring and digital literacy to leadership coaching, we equip women with skills that translate into income — and confidence that translates into change.",
      "98% of graduates remain employed or self-employed two years after the program.",
      "Sponsor a scholar today and unlock a generational ripple.",
    ],
    gallery: [photos.education, photos.edu],
  },
  {
    slug: "young-minds-art",
    title: "Inspiring Young Minds Through the Power of Art",
    category: "Creativity",
    excerpt: "Creative workshops giving children a voice through paint, music and storytelling.",
    image: photos.school,
    raised: 52000,
    goal: 55200,
    location: "Kampala community centers",
    beneficiaries: "320 children",
    body: [
      "Art heals what words cannot reach. Our after-school studios give children space to express, imagine, and process the realities they live with.",
      "We also host an annual exhibition featuring the children's work — bringing dignity, pride and platforms.",
    ],
    gallery: [photos.school, photos.happy],
  },
];

// PROGRAMS — distinct from Causes. Long-running initiatives with timelines, milestones and outcomes.
export type Program = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  status: "Active" | "Expanding" | "New";
  participants: number;
  duration: string;
  startedYear: number;
  outcomes: string[];
  body: string[];
  gallery: string[];
};

export const programs: Program[] = [
  {
    slug: "back-to-school",
    title: "Back-to-School Scholar Program",
    category: "Long-Term Education",
    excerpt: "A 12-month sponsorship cycle pairing each scholar with mentors, supplies and weekly tutoring.",
    image: photos.education,
    status: "Active",
    participants: 1240,
    duration: "12-month cycles",
    startedYear: 2016,
    outcomes: [
      "94% scholar retention year-over-year",
      "+38% average literacy gains in cohort 2024",
      "210 graduates progressed to secondary school in 2024",
    ],
    body: [
      "Back-to-School pairs every sponsored child with a verified mentor, a complete supply kit, school-fee coverage and weekly tutoring sessions delivered by trained community teachers.",
      "We measure attendance, literacy and numeracy every term — sharing transparent dashboards with each sponsor.",
    ],
    gallery: [photos.education, photos.edu, photos.school],
  },
  {
    slug: "mobile-health-clinics",
    title: "Mobile Health Clinics on Wheels",
    category: "Healthcare Outreach",
    excerpt: "Two purpose-built clinic vans rotating across 22 villages with maternal care, vaccines and screening.",
    image: photos.rdue,
    status: "Expanding",
    participants: 8500,
    duration: "Year-round, weekly rotations",
    startedYear: 2019,
    outcomes: [
      "8,500+ patients seen annually",
      "100% of pregnant mothers receive prenatal screening",
      "Malaria mortality cut by 41% in served villages",
    ],
    body: [
      "Each van is staffed by two nurses and a community health worker, with a telemedicine uplink to specialists in Kampala. Routes are published monthly so families can plan.",
      "Funding adds a third van in 2026 — extending reach to 12 more villages.",
    ],
    gallery: [photos.rdue, photos.together, photos.happy],
  },
  {
    slug: "community-kitchens",
    title: "Community Kitchens & Nutrition",
    category: "Food Security",
    excerpt: "Six neighborhood kitchens preparing 12,000+ hot meals every month for children and elders.",
    image: photos.together,
    status: "Active",
    participants: 2400,
    duration: "Daily service, year-round",
    startedYear: 2018,
    outcomes: [
      "12,400 hot meals served monthly",
      "Childhood stunting reduced 22% in served zones",
      "65 women employed as kitchen leads",
    ],
    body: [
      "Beyond meals, our kitchens are training hubs — graduating women into paid roles as leads, nutritionists and supply coordinators.",
      "We source 80% of ingredients from local women-owned co-ops.",
    ],
    gallery: [photos.together, photos.smile],
  },
  {
    slug: "girls-rising",
    title: "Girls Rising Leadership Academy",
    category: "Women & Girls Empowerment",
    excerpt: "An 18-month residency in leadership, digital skills, financial literacy and entrepreneurship.",
    image: photos.edu,
    status: "Active",
    participants: 640,
    duration: "18-month cohorts",
    startedYear: 2020,
    outcomes: [
      "98% graduate employment or self-employment",
      "112 women-led businesses launched",
      "Average post-program income +3.4×",
    ],
    body: [
      "Girls Rising graduates leave with a starter grant, a business plan, and a peer-mentor for life. Two of our 2022 alumni now sit on our regional advisory board.",
    ],
    gallery: [photos.edu, photos.education],
  },
  {
    slug: "safe-water-wells",
    title: "Safe Water Wells & Hygiene Education",
    category: "Clean Water Infrastructure",
    excerpt: "Solar-powered boreholes paired with school hygiene clubs in 18 villages.",
    image: photos.smile,
    status: "Expanding",
    participants: 9000,
    duration: "Permanent infrastructure",
    startedYear: 2017,
    outcomes: [
      "21 boreholes installed and maintained",
      "School absenteeism down 56% post-installation",
      "Avg. water-fetch time reduced from 3hrs to 12min",
    ],
    body: [
      "Every borehole is paired with a youth-led hygiene club and a maintenance fund — so the impact compounds long after we leave.",
    ],
    gallery: [photos.smile, photos.together],
  },
  {
    slug: "creative-arts-studios",
    title: "Creative Arts After-School Studios",
    category: "Youth & Creativity",
    excerpt: "Music, painting and storytelling studios open every weekday afternoon to 320 children.",
    image: photos.school,
    status: "New",
    participants: 320,
    duration: "After-school, year-round",
    startedYear: 2023,
    outcomes: [
      "Annual exhibition reached 4,000 visitors",
      "Trauma-recovery markers improved in 78% of attendees",
      "12 children's artworks featured in Kampala galleries",
    ],
    body: [
      "Art reaches what conversation cannot. Our studios are run by working artists, art therapists and former student leads.",
    ],
    gallery: [photos.school, photos.happy],
  },
];

export type Story = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  readTime?: string;
  body?: string[];
};

export const stories: Story[] = [
  {
    slug: "hope-food-shelter",
    title: "Bringing Hope Through Food, Shelter, and Support",
    category: "Food",
    date: "Apr 9, 2025",
    image: photos.together,
    author: "Anna Smith",
    readTime: "5 min read",
    body: [
      "When the rains failed last season, three districts faced the worst food crisis in a decade. Within 72 hours, our teams mobilised emergency rations, blankets and clean water to over 800 families.",
      "But relief is only the beginning. This story is about what happens after — when neighbors become co-op members, when a tarp shelter becomes a learning center, when hope becomes infrastructure.",
      "Read on to meet Sarah, a mother of four who turned a $50 grant into a thriving vegetable stand serving her entire village.",
    ],
  },
  {
    slug: "community-farming",
    title: "Building Food Security Through Community Farming",
    category: "Agriculture",
    date: "Sep 19, 2025",
    image: photos.smile,
    author: "David Dawn",
    readTime: "6 min read",
    body: [
      "Twelve villages. One shared dream: grow enough to never go hungry again. Our community-farming co-ops are turning that dream into harvest after harvest.",
      "From drought-resistant seed to drip irrigation, we put proven practices in the hands of people who have farmed this land for generations — and we listen, because they know things no textbook teaches.",
    ],
  },
  {
    slug: "urgency-restoration",
    title: "Restoring Hope in Times of Urgency",
    category: "Relief",
    date: "Apr 7, 2025",
    image: photos.eeee,
    author: "Kyle Sam",
    readTime: "4 min read",
    body: [
      "Disaster doesn't schedule. When floods hit Mukono in March, our rapid-response team was on the ground within 18 hours.",
      "This is the playbook we've built — and how your support keeps it ready.",
    ],
  },
  {
    slug: "learning-pathways",
    title: "Learning for Life: Creating Pathways to Success",
    category: "Education",
    date: "Aug 11, 2025",
    image: photos.education,
    author: "Lily Anne",
    readTime: "7 min read",
    body: [
      "Education isn't a single event — it's a pathway. We follow our scholars from primary through to university and beyond, because the journey only matters if it leads somewhere.",
    ],
  },
  {
    slug: "education-beyond-hunger",
    title: "Education for Every Child: Hope Beyond Hunger",
    category: "Education",
    date: "Apr 8, 2025",
    image: photos.edu,
    author: "Imanji Antonia",
    readTime: "5 min read",
    body: [
      "A hungry child cannot learn. So we feed first, then teach. Here's how our school-meal program is rewriting outcomes in three districts.",
    ],
  },
  {
    slug: "water-for-life",
    title: "Water for Life: Restoring Health and Dignity",
    category: "Water",
    date: "Sep 11, 2025",
    image: photos.school,
    author: "Olivia Carter",
    readTime: "6 min read",
    body: [
      "Clean water changes everything: health, school attendance, women's safety, and the simple dignity of a glass you can trust. This is what one borehole did for the village of Kanyanya.",
    ],
  },
];

export const partners = [
  "OPENAI", "LOGOIPSUM", "UNITY", "CIRCO", "INFINITE", "LOCO", "IPSUM", "FRAMEX",
];

export const faqs = [
  { q: "What is your NGO's mission?", a: "Christ With Us is a Kampala-based, faith-driven nonprofit working to bring hope, education, healthcare, clean water and dignity to vulnerable communities across Uganda." },
  { q: "How are donations used?", a: "85% of every donation goes directly to programs on the ground. The remaining 15% covers operations, transparent reporting and infrastructure that keeps our impact compounding." },
  { q: "Can I volunteer?", a: "Absolutely — we welcome volunteers locally and internationally. Apply through our Contact page and our team will match you to a project that fits your skills." },
  { q: "Besides donating, how else can I help?", a: "Share our stories, sponsor a child's education, host a community fundraiser, or partner with us as an organization. Every action multiplies." },
  { q: "Can I sponsor a child or family?", a: "Yes. Monthly sponsorships start at $35 and cover school fees, meals and healthcare for a child for a full month." },
];

export const testimonials = [
  {
    name: "Sarah N.",
    role: "Mother, Mukono",
    rating: 5,
    quote: "Christ With Us didn't just feed my family — they helped me start a vegetable stand. Today I employ two of my neighbors.",
  },
  {
    name: "John M.",
    role: "Volunteer, USA",
    rating: 5,
    quote: "I came for a week and stayed for a month. The transparency and heart of this team is unmatched anywhere I've served.",
  },
  {
    name: "Pastor Daniel",
    role: "Community Partner",
    rating: 5,
    quote: "They listen first and act second. That is rare — and it is why our village trusts them with our children's future.",
  },
  {
    name: "Amina K.",
    role: "Scholar, Kampala",
    rating: 5,
    quote: "I was the first girl in my family to finish secondary school — because someone I'll never meet believed in me through this program.",
  },
  {
    name: "Grace T.",
    role: "Monthly Donor, Toronto",
    rating: 5,
    quote: "I get a real photo and a real letter every quarter. It feels less like charity and more like family.",
  },
  {
    name: "Daniel O.",
    role: "Corporate Partner, Berlin",
    rating: 5,
    quote: "The reporting rigor convinced our board. The field visit convinced our hearts. We've doubled our pledge twice.",
  },
  {
    name: "Lily A.",
    role: "Field Volunteer, Sydney",
    rating: 5,
    quote: "Every dollar I've ever raised showed up on the ground. That kind of integrity is rare and worth protecting.",
  },
  {
    name: "Imanji A.",
    role: "Local Coordinator, Jinja",
    rating: 5,
    quote: "Working with this team taught me that scale is just compassion repeated faithfully every single day.",
  },
];

export const sponsorTiers = [
  { tier: "Spark", monthly: 35, perks: ["1 child sponsored", "Quarterly photo update", "Personal letter"] },
  { tier: "Hope", monthly: 75, perks: ["2 children sponsored", "Monthly impact report", "Personal letters", "Annual report"] },
  { tier: "Legacy", monthly: 150, perks: ["A whole classroom", "Named recognition", "Field-visit invitation", "Direct line to coordinator"] },
];

export const accreditations = [
  "Registered NGO Uganda · Reg #INU/19421",
  "GuideStar Gold Transparency",
  "UN Global Compact Signatory",
  "Charity Navigator 4-Star",
];
