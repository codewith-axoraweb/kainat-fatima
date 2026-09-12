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
    const response = await fetch('/Kainat Fatima.pdf')
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Kainat Fatima.pdf');
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
                  I am available for remote positions, freelance projects and contract work
                </Badge>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight break-words">
                  Hi, I'm <span className="text-blue-600">Kainat Fatima</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  UX/UI Designer
                </p>

                <p className="text-base sm:text-lg text-muted-foreground max-w-lg">
                  Creative and results-driven UI/UX Designer with a Computer Science
                  background and over 4 years of experience crafting engaging user
                  experiences for web and mobile platforms. Skilled in user-centered
                  design, wireframing, interactive prototyping, and cross-functional
                  collaboration.
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
                  <Link
                    href="https://www.linkedin.com/in/kainat-fatima-b6a931243/"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                {/* Behance */}
                <Button size="icon" variant="ghost" asChild>
                  <Link
                    href="https://www.behance.net/buttkainat"
                    target="_blank"
                  >
                    <span className="font-bold text-sm">B</span>
                  </Link>
                </Button>

                {/* Email */}
                <Button size="icon" variant="ghost" asChild>
                  <Link href="mailto:buttknt@gmail.com">
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
                  alt="Kainat Fatima"
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
                I'm <span className="font-semibold text-foreground">Kainat Fatima</span>,
                a creative and results-driven UX/UI Designer with a Computer Science
                background and over 4 years of experience crafting engaging user
                experiences for web and mobile platforms.
              </p>

              <p>
                I specialize in user-centered design, wireframing, interactive
                prototyping, user research, information architecture, interaction
                design, visual design, accessibility, and design systems.
              </p>

              <p>
                My approach focuses on turning complex problems into elegant,
                user-friendly interfaces while collaborating with cross-functional
                teams to improve usability and business outcomes.
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
              Skills and expertise I use to create engaging and user-friendly digital experiences
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              "User-Centered Design (UCD)",
              "Wireframing & Prototyping",
              "User Research & Testing",
              "Information Architecture (IA)",
              "Interaction & Visual Design",
              "Accessibility & Inclusive Design",
              "Design Systems & Style Guides",
              "Project Coordination & Management",
              "Cross-Functional Collaboration",
              "Task & Resource Management",
              "Documentation & Reporting",
              "Stakeholder Communication",
              "Quality Assurance Support",
              "Figma",
              "Illustrator",
              "Canva",
              "InDesign",
              "Sketch",
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