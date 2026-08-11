import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Navbar(){
    return <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center px-4">
            
            <Link href="/" className="felx items-center gap-2 front-semibold text-primary text-xl"><Briefcase></Briefcase></Link>
        </div>
        <div>
            <Link href="/signIn">Log In</Link>
            <Link href="/signUp">
            <Button>Starts for Free</Button>
            </Link>
        </div>
    </nav>
}