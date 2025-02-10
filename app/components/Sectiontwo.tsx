import Image from "next/image";
import sky from "../../public/sky.jpg";

export function SectionTwo() {
    return (
        <div className=" container grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 px-6 mx-6">
            <div className="w-full relative col-span-1">
                <Image src={sky} alt="illustration" className="w-full h-[500px] object-cover rounded-2xl" />
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4 ">
                <Card></Card>
            </div>
        </div>
    )
}