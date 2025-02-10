import { Skeleton } from "./skeleton";

export function LoadingMessages() {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div><div className="flex items-center w-fyll space-x-4">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <div className="flex space-y-2 flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}

export function GuestBookFormLoading() {
    return (
        <div className="w-full">
            <Skeleton className="h-10 rounded-lg w-full"/>
        </div>
    )
}