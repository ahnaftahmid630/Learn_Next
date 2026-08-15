"use client";

import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {ArrowRight} from "lucide-react"



export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState("");
    return (
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto  max-w-6xl">
              {/* tabs are here */}
              <div className="felx gap-2 justify-center items-center mx-auto mb-8">
                  <Button onClick={()=> setActiveTab("Organize Application")} className={`rounded-lg transition-colors ${activeTab === "Organize Application" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Organize Application</Button>
                  <Button onClick={()=> setActiveTab("Get Hired")} className={`rounded-lg transition-colors ${activeTab === "Get Hired" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Get Hired</Button>
                  <Button onClick={()=> setActiveTab("Manage Boards")} className={`rounded-lg transition-colors ${activeTab === "Manage Boards" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Manage Boards</Button>
              </div >
              {/* imges */}
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                  {(activeTab=="Organize Application" &&
                    <Image src="/hero-images/hero1.png" 
                          alt="hero image 1"
                          width={1200}
                          height={800}></Image>)}

                          {(activeTab=="Get Hired" &&
                          <Image src="/hero-images/hero2.png" 
                          alt="hero image 1"
                          width={1200}
                          height={800}></Image>)}

                          {(activeTab=="Manage Boards" &&
                          <Image src="/hero-images/hero3.png" 
                          alt="hero image 1"
                          width={1200}
                          height={800}></Image>)}

              </div>
            </div>
          </div>
        </section>)
}