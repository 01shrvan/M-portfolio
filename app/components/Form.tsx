import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export function Form() {
    return (
        <form className="flex justify-center items-between gap-4 flex-col md:flex-row">
            <Input
                type="text"
                name="message"
                maxLength={100}
                minLength={1}
                placeholder="Your Message..."
                required
            />
        </form>
    );
}

// function SubmitButton() {
//     const { } = useFormStatus();
// }