// Data Profil Anda (Untuk HomePage dan Header)
export const userProfile = {
  name: "Yohanes Dimas Atma Nugraha",
  surname: "Dimas Nugraha",
  title: "Peran Utama Anda | Spesialisasi Anda", // Contoh: Frontend Developer | React Performance Enthusiast
  tagline:
    "Membangun antarmuka pengguna yang cepat, efisien, dan menyenangkan.",
  email: "emailanda@mail.com",
  linkedin: "url_linkedin_anda",
  github: "url_github_anda",
};

// Data Pengalaman Karir (Untuk ExperiencePage)
export const experienceCardData = [
  {
    id: 1,
    title: "Networking",
    description:
      "Building a secure, scalable network architecture. Focusing on infrastructure segmentation and management.",
    experience: "Network Planner, Segmentation, Network Management",
    items: ["Draw.io", "MikroTik", "Charts"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Content and Design",
    description:
      "Compelling visual narratives and content to engage audiences. Combining copywriting with professional graphic design.",
    experience: "Analysis Content, Content Designer, Copywriting",
    items: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Wondershare Filmora",
      "Canva",
      "Figma",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Web Design and Development",
    description:
      "Transforming ideas into fully functional web applications. Translating business requirements into intuitive, data-driven user interfaces.",
    experience: "UI/UX Web Design, Database Management, Fullstack Developer",
    items: [
      "Figma Design",
      "Gitmind",
      "Tailwind",
      "React",
      "NextJS",
      "Github",
      "VSCode",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
];

// Data Proyek (Untuk PortfolioPage)
export const projects = [
  {
    id: 101,
    title: "Nama Proyek Terbaik Anda",
    description:
      "Deskripsi singkat tentang tantangan dan solusi di proyek ini.",
    image: "/assets/images/proyek1-preview.png", // Simpan gambar di public/assets
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "url_live_demo",
    repoUrl: "url_repository_github",
  },
];

// Daftar Keahlian (Untuk AboutPage)
export const skills = {
  frontend: [
    "HTML Semantik",
    "CSS (Flexbox/Grid)",
    "JavaScript",
    "React",
    "Vite",
    "Next.js",
  ],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "Figma", "Webpack"],
};
