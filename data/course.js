import config from "../course.json";

const DEFAULT_CONFIG = {
  author: {
    name: "ThePrimeagen",
    company: "TheStartup, Try Harder",
  },
  title: "Developer Productivity, v2",
  subtitle: "become the dev that confuses everyone else",
  frontendMastersLink:
    "https://frontendmasters.com/workshops/developer-productivity-v2/",
  description:
    "The purpose of this course is to set the foundation for how to approach creating a highly tuned environment for your needs. This is not suppose to be prescriptive but illuminating.",
  keywords: [
    "ThePrimeagen",
    "Live Coding",
    "TypeScript",
    "JavaScript",
    "Golang",
    "RustLang",
    "Go",
    "Rust",
    "TS",
    "JS",
  ],
  social: {
    twitter: "ThePrimeagen",
    twitch: "ThePrimeagen",
    youtube: "ThePrimeagen",
  },
  productionBaseUrl: "/",
};

export default function getCourseConfig() {
  return Object.assign({}, DEFAULT_CONFIG, config);
}
