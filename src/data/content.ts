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
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
    raised: 40000,
    goal: 65200,
    location: "Wakiso & Mukono districts, Uganda",
    beneficiaries: "1,200+ children",
    body: [
      "Across rural Uganda, thousands of children miss school not because they lack ability — but because they lack a uniform, a textbook, or shoes. Our Education Equality program tackles those small barriers that keep children from a brighter tomorrow.",
      "We supply complete back-to-school kits, fund teacher training, and partner with 14 community schools to track attendance, performance and well-being month by month.",
      "Every $35 sponsors one child for a full school month — including meals, learning materials and a safe place to grow.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "healthcare-access",
    title: "Healthcare Access for Vulnerable Communities",
    category: "Emergency Health Relief",
    excerpt: "Mobile clinics and emergency health units reaching the last-mile in Kampala's outskirts.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    raised: 16800,
    goal: 40000,
    location: "Greater Kampala outskirts",
    beneficiaries: "8,500+ patients yearly",
    body: [
      "Our mobile clinics travel to the villages that hospitals never reach — providing maternal care, vaccinations, malaria treatment and chronic-disease screening.",
      "Each unit is staffed by 2 nurses and a community health worker, supported by tele-medicine links to specialists in Kampala.",
      "Your gift fuels medicines, fuel and the people who deliver hope week after week.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "nutritional-support",
    title: "Nutritional Support & Food Security",
    category: "Food Security",
    excerpt: "Daily meals, clean water and supplements for families in times of crisis.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    raised: 60800,
    goal: 100000,
    location: "Kampala & Lake Victoria region",
    beneficiaries: "2,400 families",
    body: [
      "Hunger is the loudest emergency we answer. We distribute fortified meals to schools, run community kitchens, and supply emergency food packs after floods or droughts.",
      "Through community-farming co-ops we also build long-term resilience — teaching families to grow what they eat.",
      "$50 feeds a family of five for an entire week.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "clean-water",
    title: "Access to Clean Water for All",
    category: "Water Purification",
    excerpt: "Filtration systems, safe water distribution and hygiene education for villages.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
    raised: 20800,
    goal: 60000,
    location: "Northern Uganda",
    beneficiaries: "18 villages",
    body: [
      "We drill solar-powered boreholes, install community filters and run hygiene workshops so children stop missing school due to waterborne illness.",
      "Each completed well serves an average of 500 people for over a decade.",
      "Your support builds the infrastructure of dignity.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "women-girls",
    title: "Empowering Women and Girls Through Education",
    category: "Empowerment",
    excerpt: "Skills training, mentorship and scholarships for the next generation of leaders.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    raised: 80000,
    goal: 85000,
    location: "Kampala & Jinja",
    beneficiaries: "640 young women",
    body: [
      "From tailoring and digital literacy to leadership coaching, we equip women with skills that translate into income — and confidence that translates into change.",
      "98% of graduates remain employed or self-employed two years after the program.",
      "Sponsor a scholar today and unlock a generational ripple.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "young-minds-art",
    title: "Inspiring Young Minds Through the Power of Art",
    category: "Creativity",
    excerpt: "Creative workshops giving children a voice through paint, music and storytelling.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    raised: 52000,
    goal: 55200,
    location: "Kampala community centers",
    beneficiaries: "320 children",
    body: [
      "Art heals what words cannot reach. Our after-school studios give children space to express, imagine, and process the realities they live with.",
      "We also host an annual exhibition featuring the children's work — bringing dignity, pride and platforms.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    ],
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
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
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
    quote: "Christ With Us didn't just feed my family — they helped me start a vegetable stand. Today I employ two of my neighbors.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "John M.",
    role: "Volunteer, USA",
    quote: "I came for a week and stayed for a month. The transparency and heart of this team is unmatched anywhere I've served.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pastor Daniel",
    role: "Community Partner",
    quote: "They listen first and act second. That is rare — and it is why our village trusts them with our children's future.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
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
