import { Section } from "@akshita.dev/ui/components/section";
import { Title } from "@akshita.dev/ui/components/title";
import { CopyLink } from "@/components/copy-link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@akshita.dev/ui/components/tooltip";
import { Button } from "@akshita.dev/ui/components/button";
import { Upload } from "lucide-react";
import Pins from "./pins";
import Link from "next/link";
import type { Route } from "next";

const PinsSection = () => {
    return (
        <TooltipProvider>
            <Section id="pins">
                <header className="flex items-center justify-between">
                    <span className="group/social flex items-center gap-1">
                        <Title
                            className="text-xl font-medium italic"
                            render={<h2>{"pins."}</h2>}
                        />
                        <CopyLink
                            title={"pins"}
                            className="hidden group-hover/social:inline-flex"
                        />
                    </span>
                    <Tooltip>
                        <TooltipTrigger
                            render={
                                <Button
                                    render={<Link href={"/upload" as Route} />}
                                    variant="ghost"
                                    nativeButton={false}
                                    size="icon"
                                    aria-label="Upload pins"
                                >
                                    <Upload />
                                </Button>
                            }
                        />
                        <TooltipContent>Upload pins</TooltipContent>
                    </Tooltip>
                </header>
                <Pins />
            </Section>
        </TooltipProvider>
    );
};

export default PinsSection;
