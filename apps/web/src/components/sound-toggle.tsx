"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";

import { Button } from "@akshita.dev/ui/components/button";
import { Kbd } from "@akshita.dev/ui/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@akshita.dev/ui/components/tooltip";
import { useSoundToggle } from "@/hooks/use-sound-toggle";

export const SoundToggle = () => {
  const { enabled, toggleSound } = useSoundToggle();

  const handleToggle = () => {
    toggleSound();
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon-sm" onClick={handleToggle} />
        }
      >
        {enabled ? <Volume2Icon /> : <VolumeXIcon />}
      </TooltipTrigger>
      <TooltipContent>
        Toggle Sound
        <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};
