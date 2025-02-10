"use client"

import { postData } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await postData(formData);
                formRef.current?.reset();
            }}
            className="flex justify-center items-between gap-4 flex-col md:flex-row">
            <Input
                type="text"
                name="message"
                maxLength={100}
                minLength={1}
                placeholder="Your Message..."
                required
            />

            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();


    return (
        <>
            {pending ? (
                <Button disabled>
                    <Loader2 className="mr-2 hr-4 w-4 animate-spin" />
                    Please Wait
                </Button>
            ) : (
                <Button type="submit">Sign for free</Button>
            )}
        </>
    )
}