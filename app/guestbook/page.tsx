import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";
import prisma from "../lib/db";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Suspense } from "react";
import { GuestBookFormLoading, LoadingMessages } from "@/components/ui/LoadingState";

async function getGuestBookEntry() {
    try {
        const data = await prisma.guestBookEntry.findMany({
            include: {
                User: true, // Include all User fields
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 30,
        });

        return data;
    } catch (error) {
        console.error("Error fetching guestbook entries:", error);
        return [];
    }
}

export default function GuestbookPage() {
    return (
        <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
            <h1 className="text-4xl font-semibold lg:text-5xl pt-5">GuestBook</h1>
            <p className="leading-7 text-muted-foreground mt-2">Sign My GuestBook!</p>
            <Card className="mt-10">
                <CardHeader className="flex flex-col w-full">
                    <Label className="mb-1">Message</Label>
                    <Suspense fallback={<GuestBookFormLoading />}>
                        <GuestBookForm />
                    </Suspense>

                    <ul className="space-y-6 flex flex-col pt-5">
                        <Suspense fallback={<LoadingMessages />}>
                            <GuestBookEntries />
                        </Suspense>
                    </ul>
                </CardHeader>
            </Card>
        </section>
    );
}

async function GuestBookEntries() {
    const data = await getGuestBookEntry();

    if (data.length === 0) {
        return (
            <div className="text-center text-muted-foreground py-10">
                No messages yet. Be the first to sign the guestbook!
            </div>
        );
    }

    return data.map((entry) => (
        <li key={entry.id} className="border-b pb-6 last:border-none">
            <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                    {entry.User?.profileImage ? (
                        <AvatarImage
                            src={entry.User.profileImage}
                            alt={`${entry.User.firstname}'s profile`}
                        />
                    ) : (
                        <AvatarFallback>
                            {entry.User?.firstname?.[0]?.toUpperCase() || "?"}
                        </AvatarFallback>
                    )}
                </Avatar>
                <div>
                    <p className="font-medium">
                        {entry.User
                            ? `${entry.User.firstname} ${entry.User.lastname}`
                            : "Anonymous"}
                    </p>
                    <p className="text-muted-foreground mt-1">{entry.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        {new Date(entry.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </div>
        </li>
    ));
}

async function GuestBookForm() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (user) {
        return <Form />;
    }

    return (
        <div className="flex justify-between gap-4 flex-col md:flex-row">
            <Input type="text" placeholder="Your Message..." disabled />
            <RegisterLink>
                <Button className="w-full">Sign in to comment</Button>
            </RegisterLink>
        </div>
    );
}
