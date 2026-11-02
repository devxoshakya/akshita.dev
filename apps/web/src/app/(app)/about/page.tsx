import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";

import PolaroidPhoto from "@/components/about/Poloroid";
import { CopyLink } from "@/components/copy-link";
import { inspirationWebsites, iconData } from "@/constants/about";
import { Section } from "@akshita.dev/ui/components/section";
import { Title } from "@akshita.dev/ui/components/title";
import { BreadcrumbJsonLd } from "@/seo/json-id";
import { createMetadata } from "@/seo/metadata";

export const metadata = createMetadata({
    title: "About",
    description:
        "Learn more about Akshita Srivastava, the work behind this portfolio, and the tools that shape it.",
    canonical: "/about",
    category: "about",
});

const p1 = "https://cdn2.devxoshakya.xyz/folio/avatar-akshi.webp";
const p2 = "https://cdn2.devxoshakya.xyz/folio/card.webp";
const p3 = "https://cdn2.devxoshakya.xyz/folio/tree.webp";

const birthDate = new Date(2005, 9, 15);
const today = new Date();
const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today <
    new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? 1
        : 0);

function SectionHeading({ children }: { children: React.ReactNode }) {
    const label = String(children).replace(".", "");
    const id = label.toLowerCase().replaceAll(" ", "-");

    return (
        <div className="group/about-heading flex items-center gap-1">
            <Title
                className="text-xl font-medium italic"
                render={<h2 id={id}>{children}</h2>}
            />
            <CopyLink
                title={label}
                className="hidden group-hover/about-heading:inline-flex"
            />
        </div>
    );
}

const AboutPage = () => (
    <Section id="about" className="space-y-12">
        <BreadcrumbJsonLd
            items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
        />
        <div className="space-y-2">
            <SectionHeading>about.</SectionHeading>

            <div className="flex flex-wrap items-center justify-center lg:-ml-12 gap-10 py-4 md:gap-8">
                <PolaroidPhoto altText="image" imageSrc={p1} rotation={-7} />
                <PolaroidPhoto altText="image" imageSrc={p2} rotation={5} />
                <PolaroidPhoto altText="image" imageSrc={p3} rotation={2} />
            </div>

            <div className="prose prose-neutral dark:prose-invert group max-w-none text-sm mt-8 leading-6">
                <p className="transition-colors duration-300 hover:text-foreground">
                    Hey there! I&apos;m Akshita Srivastava, a {age}-year-old software
                    engineer who enjoys building fast, well-crafted products
                    across{" "}
                    <Link
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        Next.js
                    </Link>
                    , backend systems, cloud infrastructure, and AI.
                </p>
                <p className="transition-colors duration-300 hover:text-foreground">
                    My journey started early — back in the 9th grade, writing
                    my first{" "}
                    <Link
                        href="https://www.java.com/en/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        Java
                    </Link>{" "}
                    programs. That&apos;s where{" "}
                    <Link
                        href="https://www.w3schools.com/java/java_oop.asp"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        OOP
                    </Link>{" "}
                    clicked for me: classes, objects, and the satisfaction of
                    modelling messy problems with clean structure.
                </p>
                <p className="transition-colors duration-300 hover:text-foreground">
                    In senior high school I picked up{" "}
                    <Link
                        href="https://www.python.org"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        Python
                    </Link>
                    , and with it the freedom to script, automate, and build
                    things outside the classroom.
                </p>
                <p className="transition-colors duration-300 hover:text-foreground">
                    In college it became official — proper{" "}
                    <Link
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        development
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://aws.amazon.com/devops/what-is-devops/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        DevOps
                    </Link>
                    , shipping real projects and running the infrastructure
                    underneath them. These days I&apos;m deep into{" "}
                    <Link
                        href="https://ollama.com"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                    >
                        AI engineering
                    </Link>
                    , exploring how scalable backend systems and intelligent
                    products come together.
                </p>
            </div>
        </div>

        <div>
            <div className="group/about-site-heading flex items-center gap-1">
                <Title
                    className="text-xl font-medium italic"
                    render={<h2 id="about-this-site">about this site.</h2>}
                />
                <CopyLink
                    title="about this site"
                    className="hidden group-hover/about-site-heading:inline-flex"
                />
            </div>
            <div className="mt-0">
                <p className="my-3">
                    This site is crafted with Next.js, Tailwind CSS, and MDX,
                    with Vercel handling the hosting.
                </p>
                <div className="grid grid-cols-4 grid-rows-2 content-center gap-10 p-3">
                    {iconData.map(
                        ({ Component, href, className, label }, index) => (
                            <div
                                key={index}
                                className="group relative w-fit pb-3"
                            >
                                <Link
                                    href={href as Route}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Component className={className} />
                                </Link>
                                <span className="pointer-events-none absolute top-full left-1/2 z-10  w-20 -translate-x-1/2 -mt-2 px-2 text-center text-xs font-semibold opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-none">
                                    {label}
                                </span>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>

        <div className="space-y-3">
            <SectionHeading>inspirations.</SectionHeading>
            <p className="text-muted-foreground text-sm leading-6">
                I&apos;m thankful to the fantastic websites below for sparking
                the inspiration behind this site.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
                {inspirationWebsites.map((site) => (
                    <li key={site.url}>
                        <Link
                            href={site.url as Route}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground bg-linear-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-size-[0%_2px] bg-bottom-left bg-no-repeat underline-offset-4 transition-all duration-500 hover:bg-size-[100%_2px]"
                        >
                            {site.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className="space-y-6">
            <SectionHeading>typography.</SectionHeading>
            <div className="grid grid-cols-1 border border-dashed border-border sm:grid-cols-2">
                <p className="border-b border-dashed border-border p-4 text-center text-sm sm:border-r">
                    Sans
                </p>
                <p className="border-b border-dashed border-border p-4 text-center font-heading text-lg">
                    Instrument Serif
                </p>
                <p className="p-4 text-center font-mono text-sm sm:border-r">
                    Monospace
                </p>
                <p className="p-4 text-center text-sm font-medium text-muted-foreground">
                    Muted UI text
                </p>
            </div>
        </div>
    </Section>
);

export default AboutPage;
