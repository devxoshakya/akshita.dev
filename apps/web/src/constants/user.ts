import { LINK } from "@/constants/links";
import { getBaseUrl } from "@/constants/url";

export const USER = {
  address: {
    country: "India",
    locality: "Meerut",
  },
  avatar: "https://cdn2.devxoshakya.xyz/folio/avatar-akshi.webp",
  company: "Xebo.ai",
  email: LINK.EMAIL,
  firstName: "Akshita",
  jobTitle: "Technical Trainee",
  lastName: "Srivastava",
  roles: ["Full Stack Developer", "Software Engineer", "AI Engineer"],
  username: "akshitasrivastava20",
  website: getBaseUrl(),
};

export const NAME = `${USER.firstName} ${USER.lastName}`;
