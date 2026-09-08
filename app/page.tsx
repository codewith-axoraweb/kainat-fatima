"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  Youtube,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const handleDownloadResume = async () => {
    const response = await fetch('/rida.pdf')
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'rida.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit max-w-full text-left whitespace-normal">
                  Available for freelance writing projects
                </Badge>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight break-words">
                  Hi, I'm <span className="text-blue-600">Rida Nadeem</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  AI Copywriter | Content Strategist
                </p>

                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  I specialize in shaping raw AI-generated drafts into polished,
                  on-brand content with precision, speed, and consistency.
                  Experienced across diverse genres and industries.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/portfolio">
                    View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/contact">Contact Me</Link>
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  onClick={handleDownloadResume}
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="flex space-x-2">
                {/* LinkedIn */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="#" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                {/* Medium */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="https://medium.com/cub3d/with-bitcoins-fall-what-will-be-the-next-significant-trend-a097eb572840" target="_blank">
                    <span className="font-bold text-sm">M</span>
                  </Link>
                </Button>

                {/* Email */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="mailto:virgo.rida24@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse" />

                <Image
                  src="/contentwriterhomepage.jpeg?height=400&width=400"
                  alt="Rida Nadeem"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-background shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}

      {/* About Me Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">

            {/* Small Blue Line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1 bg-blue-600 rounded-full" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              About <span className="text-blue-600">Me</span>
            </h2>

            {/* Content */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                I'm <span className="font-semibold text-foreground">Rida Nadeem</span>,
                an AI Copywriter and Content Strategist with a Computer Science
                background, specializing in creating polished, precise, and
                on-brand content.
              </p>

              <p>
                I have produced 150+ AI-refined blog posts and eBooks in 12 months
                with a 95%+ first-pass approval rate. My experience includes AI
                content refinement, high-volume copywriting, technical writing,
                SEO writing, research, editing, and multi-genre content.
              </p>

              <p>
                My approach combines precision editing, research, brand voice
                consistency, and strategic content development to deliver
                informative, engaging, and publication-ready work.
              </p>
            </div>

            {/* Small Bottom Accent */}
            <div className="mt-6 flex gap-2">
              <div className="w-16 h-1 bg-blue-600 rounded-full" />
              <div className="w-3 h-1 bg-blue-600/40 rounded-full" />
              <div className="w-3 h-1 bg-blue-600/20 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground">
              Skills and expertise I use to deliver precise, high-quality content
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "AI Content Refinement",
              "ChatGPT Workflows",
              "High-Volume Copywriting",
              "Brand Voice Consistency",
              "Precision Editing",
              "Technical Writing",
              "News & Narrative Writing",
              "Content Strategy",
              "Research & Analysis",
              "SEO Writing",
              "Proofreading",
              "Academic Writing",
              "Philosophical Writing",
              "Case Study Development",
              "Complex Topic Simplification",
              "Evidence-Based Writing",
              "Bilingual Writing",
              "Communication Excellence",
            ].map((skill) => (
              <Card
                key={skill}
                className="p-3 sm:p-4 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-blue font-bold text-base sm:text-lg">
                      {skill.charAt(0)}
                    </span>
                  </div>

                  <p className="font-medium text-xs sm:text-sm leading-tight break-words">
                    {skill}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}