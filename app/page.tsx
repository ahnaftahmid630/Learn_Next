import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import {ArrowRight} from "lucide-react"
import signUp from "./signUp/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white ">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className=" mx-auto max-w-4xl text-4xl font-bold sm:text-5xl"><h1 className="text-black">a better way to track your jobn application</h1>
              <p className="text-muted-foreground mb-10 text-xl">Capture , organize and manage your job search in one place</p>
              <div>
                <Link href="/signUp"><Button>Start for Free <ArrowRight/></Button></Link>
               
               <p>
                free forver. no credit card requird
               </p>
              </div>
              </div>
              
        </section>

      </main>
      </div>
    
  );
}
