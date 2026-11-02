import "server-only";
import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/about/contribution-graph";
import { GITHUB } from "@/constants/links";

interface GitHubContributionsResponse {
  contributions: Activity[];
}

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB.user}?y=last`
    );
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
  },
  ["github-contributions"],
  { revalidate: 86_000 }
);
