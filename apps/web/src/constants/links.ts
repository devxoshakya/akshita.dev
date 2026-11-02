export const GITHUB = {
  branch: "main",
  org: "shadcn-labs",
  repo: "akshita.dev",
  user: "akshitasrivastava20",
} as const;

const GITHUB_URL = `https://github.com/${GITHUB.user}`;

export const LINK = {
  BLUESKY: "https://bsky.app/profile/devxoshakya.bsky.social",
  LEETCODE: "https://leetcode.com/akshitasrivastava20",
  INSTAGRAM: "https://instagram.com/akshita8368",
  DAILYDEV: "https://daily.dev/devxoshakya",
  DISCORD: "https://discordapp.com/users/393317827186130964",
  EMAIL: "akshita.srivastava.1505@gmail.com",
  GITHUB: GITHUB_URL,
  GITHUB_REPO: `https://github.com/${GITHUB.user}/${GITHUB.repo}`,
  LICENSE: `${GITHUB_URL}/blob/${GITHUB.branch}/LICENSE`,
  LINKEDIN: "https://www.linkedin.com/in/akshitasrivastava20",
  PEERLIST: "https://peerlist.io/devxoshakya",
  RESUME: "/resume",
  SHADCN_LABS: "https://shadcn-labs.com",
  SHADCN_UI: "https://ui.shadcn.com",
  TOPMATE: "https://topmate.io/devxoshakya",
  TWITTER: "https://x.com/devxoshakya",
  X: "https://x.com/devxoshakya",
  X_SHADCN_LABS: "https://x.com/shadcnlabs",
  YOUTUBE: "https://youtube.com/@devxoshakya",
} as const;

const STORAGE_URL =
  "https://yffrvzi8zwbljfuj.public.blob.vercel-storage.com/portfolio-website";

export const ASSETS = {
  CRUD_DIALOG_ANIMATION: `${STORAGE_URL}/crud_dialog_animation.mp4`,
  FIRE: `${STORAGE_URL}/fogonovo.gif`,
  FOUNDER_LETTER_ANIMATION: `${STORAGE_URL}/founder_letter_animation.mp4`,
  MACBOOK_AIR: `${STORAGE_URL}/macbook_air.webp`,
  SAMSUNG_MONITOR: `${STORAGE_URL}/samsung_monitor.avif`,
};
