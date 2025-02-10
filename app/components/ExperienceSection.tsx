import Image from "next/image";
import gamestation from "../../public/gamestation.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExperienceSection() {
    return (
        <div className="container mx-auto px-4 lg:px-8 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
                <div className="w-full relative col-span-1 flex">
                    <Image
                        src={gamestation}
                        alt="Work Experience"
                        className="h-full w-full object-cover rounded-2xl bg-gray-100"
                    />
                </div>
                <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                    <Card className="bg-gray-100 border-none h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>Work & Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-grow">
                            <p className="text-lg text-gray-700">
                                I work as a <strong>Web Developer & UI/UX Designer</strong> at 
                                <span className="text-primary font-semibold"> DreamSkrin</span>, crafting seamless digital experiences 
                                through modern web technologies and intuitive design.
                            </p>
                            <p className="text-lg text-gray-700 mt-4">
                                My journey includes freelance work, open-source contributions, and professional collaborations, 
                                refining my expertise in building interactive and scalable web applications.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
