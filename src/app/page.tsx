"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Users,
  Building2,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-accent transition-colors"
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/precogly-logo.jpeg"
                alt="Precogly Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-xl text-primary">Precogly</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#why" className="text-muted hover:text-primary transition-colors">
                Why Precogly
              </a>
              <a href="#collaborators" className="text-muted hover:text-primary transition-colors">
                Collaborate
              </a>
              <a href="#partners" className="text-muted hover:text-primary transition-colors">
                Partners
              </a>
              <a href="#faq" className="text-muted hover:text-primary transition-colors">
                FAQ
              </a>
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <Image
                src="/precogly-logo.jpeg"
                alt="Precogly Logo"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Open-source, enterprise-grade threat modeling.
            </h1>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
              <span className="text-lg md:text-xl font-semibold text-foreground">Free forever.</span>
              <span className="text-lg md:text-xl font-semibold text-foreground">Community-driven.</span>
              <span className="text-lg md:text-xl font-semibold text-foreground">Community-owned.</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Rocket className="w-4 h-4" />
              Public Alpha Code Drop: February 12, 2026
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center">
              <p className="text-muted mb-4">Support the Mission</p>
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why Precogly Section */}
      <Section id="why" className="bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              The Tooling Gap
            </h2>
          </FadeIn>

          <FadeIn>
            <p className="text-center text-muted mb-12 text-lg">
              Teams today often face a difficult trade-off:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Manual & Ad-hoc</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Using whiteboards or simple diagramming tools that don&apos;t scale or integrate
                  with code.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Closed & Expensive</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Using powerful commercial platforms that are locked behind high licensing fees.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-xl border border-accent/20">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Precogly fills the gap</h3>
              </div>
              <p className="text-center text-lg text-foreground max-w-2xl mx-auto">
                We provide an open foundation that supports enterprise scale without sacrificing
                accessibility or developer freedom.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* For Collaborators Section */}
      <Section id="collaborators">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    For Collaborators
                  </span>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Architect the Standard
                </h2>
              </FadeIn>

              <FadeIn>
                <p className="text-muted mb-6 text-lg leading-relaxed">
                  Don&apos;t just consume the tools. Build them. We&apos;re inviting select security
                  engineers to define the primitives of the next generation of threat modeling.
                </p>
              </FadeIn>

              <FadeIn>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground"><strong>Influence</strong> the core architecture and data models.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground"><strong>Shape</strong> workflows before they&apos;re set in stone.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground"><strong>Get early access</strong> to the Feb 12 alpha.</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn>
                <a
                  href="https://calendly.com/vikramsnarayan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Join the Technical Council
                </a>
              </FadeIn>
            </div>

            {/* For Partners Section */}
            <div id="partners">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    For Partners
                  </span>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Founding Partner Program
                </h2>
              </FadeIn>

              <FadeIn>
                <p className="text-muted mb-6 text-lg leading-relaxed">
                  Equip your consultancy with the industry&apos;s first open-source, enterprise-grade
                  threat modeling platform. Be the first to bring a modern, AI-ready alternative to your clients.
                </p>
              </FadeIn>

              <FadeIn>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Monetize</strong> support and integration services for your clients.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground"><strong>Deliver</strong> authorized training and certifications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Win deals</strong> against expensive legacy vendors.
                    </span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn>
                <a
                  href="https://calendly.com/vikramsnarayan/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Apply for the Partner Network
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section className="bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Project Roadmap
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn>
              <div className="flex items-center gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-semibold text-primary">Platform</h3>
                  <p className="text-muted">Under active development</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-primary">Code Release</h3>
                  <p className="text-muted">February 12, 2026 (Public GitHub Launch)</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-primary">Ecosystem</h3>
                  <p className="text-muted">Partner network currently forming</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-primary/5">
              <FAQItem
                question="Is Precogly open source?"
                answer="Yes. It will be released under a standard open-source license."
              />
              <FAQItem
                question="How is this different from existing tools?"
                answer='Existing tools are either "toys" (simple drawing tools) or "products" (expensive closed platforms). Precogly is an open platform: free to use, but architected for enterprise scale, supported by a network of partners.'
              />
              <FAQItem
                question="Who is behind this project?"
                answer="Vikramaditya - Threat Modeling Connect Chapter Lead (Bangalore) & Security Architect. Advised by senior practitioners from Fortune 500 enterprises."
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/precogly-logo.jpeg"
                alt="Precogly Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="font-semibold text-xl">Precogly</span>
                <p className="text-sm text-white/70">Open-source threat modeling</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikramaditya-narayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Precogly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
