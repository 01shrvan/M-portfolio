import Image from "next/image";
import sky from "../../public/sky.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import canva from "../../public/tech-icons/canva.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import github from "../../public/tech-icons/github.svg";
import discord from "../../public/tech-icons/discord.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import notion from "../../public/tech-icons/notion.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
    canva,
    figma,
    chatgpt,
    github,
    discord,
    chrome,
    notion,
];

const socialMedia = [
    {
        id: 1,
        icon: insta,
        name: "Instagram",
        username: "@juxt.shrvan",
        link: "https://www.instagram.com/juxt.shrvan?igsh=MW91aW9tcDc5ZnhnYg==",
    },
    {
        id: 2,
        icon: twitter,
        name: "X / Twitter",
        username: "@01shrvan",
        link: "https://x.com/01shrvan",
    },
    {
        id: 3,
        icon: linkedin,
        name: "Linkedin",
        username: "@shrvanbenke",
        link: "https://www.linkedin.com/in/shrvanbenke/",
    },
];

export function SectionTwo() {
    return (
        <div className="container mx-auto px-4 lg:px-8 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="w-full relative col-span-1">
                    <Image
                        src={sky}
                        alt="square"
                        className="col-span-1 h-[420px] object-cover rounded-2xl"
                    />
                </div>
                <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                    <Card className="bg-gray-100 border-none">
                        <CardHeader>
                            <CardTitle>Explore my stack</CardTitle>
                            <CardDescription>Check out the tools I use daily</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-4">
                            {icons.map((item, index) => (
                                <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
                            ))}
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                        {socialMedia.map((item) => (
                            <Card
                                key={item.id}
                                className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
                            >
                                <Image src={item.icon} alt="Icon" className="w-16 h-16" />
                                <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                                <p className="text-muted-foreground">{item.username}</p>
                                <Button className="mt-4" size="sm" asChild>
                                    <a href={item.link}>Follow</a>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
