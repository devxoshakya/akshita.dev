"use client";

import { Icons } from "@/components/icons";
import { Button } from "@akshita.dev/ui/components/button";
import { Kbd } from "@akshita.dev/ui/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@akshita.dev/ui/components/tooltip";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

export const ModeToggle = () => {
  const { theme, toggleTheme } = useThemeToggle();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon-sm" onClick={handleToggle} />
        }
      >
        <Icons.theme />
      </TooltipTrigger>
      <TooltipContent>
        Toggle Mode
        <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};
