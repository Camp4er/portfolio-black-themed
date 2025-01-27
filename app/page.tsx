"use client";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Skills/>
      <Projects/>
      <Experience/>
    </main>
  );
}
