import { LINK } from "@/constants/links";

import type { Contact } from "@/types/contacts";

export const CONTACTS = [
  {
    icon: "github",
    link: {
      display: "@akshitasrivastava20",
      url: LINK.GITHUB,
    },
    title: "GitHub",
  },
  {
    icon: "linkedin",
    link: {
      display: "@akshitasrivastava20",
      url: LINK.LINKEDIN,
    },
    title: "LinkedIn",
  },
  {
    icon: "leetcode",
    link: {
      display: "@akshitasrivastava20",
      url: LINK.LEETCODE,
    },
    title: "LeetCode",
  },
  {
    icon: "instagram",
    link: {
      display: "@akshita8368",
      url: LINK.INSTAGRAM,
    },
    title: "Instagram",
  },
] as const satisfies readonly Contact[];