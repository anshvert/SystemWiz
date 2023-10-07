import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ServerPage() {
    const session = await getServerSession(options)
    console.log("in server ")
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/server")
    }
    return (<div>Hello form server</div>)
}