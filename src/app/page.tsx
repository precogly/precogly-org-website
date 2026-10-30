"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Users,
  Rocket,
  ChevronDown,
  BookOpen,
  Workflow,
  Library,
  FileJson,
  ShieldCheck,
  Cpu,
  Shield,
  Code,
  GraduationCap,
  ClipboardCheck,
  Terminal,
  Award,
  PlayCircle,
  HeartHandshake,
  MessageCircle,
  Slack,
  ListChecks,
  Gauge,
} from "lucide-react";

const DISCORD_URL = "https://discord.gg/uBFZGJzpYa";
const OWASP_SLACK_URL = "https://owasp.slack.com/archives/C0C1HV90L5P";
const OWASP_SLACK_INVITE_URL = "https://owasp.org/slack/invite";
const GITHUB_MILESTONES_URL = "https://github.com/precogly/precogly/milestones";
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

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
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
      {/* OWASP Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
          <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <span>Precogly is now an official <strong>OWASP Project</strong></span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-16">
            <div className="flex items-center gap-3 shrink-0">
              <Image
                src="/precogly-logo.jpeg"
                alt="Precogly Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-semibold text-xl text-primary">Precogly</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm whitespace-nowrap">
              <a href="#features" className="text-muted hover:text-primary transition-colors">
                Features
              </a>
              <a href="#get-started" className="text-muted hover:text-primary transition-colors">
                Get Started
              </a>
              <a href="#collaborators" className="hidden xl:inline text-muted hover:text-primary transition-colors">
                Collaborate
              </a>
              <a href="#faq" className="hidden xl:inline text-muted hover:text-primary transition-colors">
                FAQ
              </a>
              <Link
                href="/learn"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Learn
              </Link>
              <Link
                href="/practitioners"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <Users className="w-4 h-4" />
                Practitioners
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <HeartHandshake className="w-4 h-4" />
                Sponsors
              </Link>
              <a
                href="https://precogly.github.io/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </a>
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://app.precogly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                Try Precogly
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-42 md:pt-50 pb-16 md:pb-24">
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
              <CheckCircle2 className="w-4 h-4" />
              Now Available — Open Source under Apache 2.0
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://app.precogly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <PlayCircle className="w-5 h-5" />
                Try Precogly
              </a>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5" />
                Self-Host with Docker
              </a>
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
                Star on GitHub
              </a>
            </div>
          </FadeIn>

          {/* The demo is a shared instance that is wiped periodically, so say so
              next to the button rather than letting someone lose real work. */}
          <FadeIn>
            <p className="text-sm text-muted mt-4">
              No install required. The demo is a shared instance and its data is reset
              periodically.
            </p>
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

      {/* Product Showcase Section */}
      <Section id="showcase">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              See Precogly in Action
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="aspect-video rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/iSDU88X0XMw"
                title="A Tour of OWASP Precogly Open Source Threat Modeling Tool"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Built for Enterprise Threat Modeling
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Workflow className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Advanced DFD Editor</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Drag-and-drop component panel, trust zones, notation switching (DFD3 / Yourdon-DeMarco). Built on React Flow.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Library className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Community Library Packs</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  MITRE ATT&CK, CAPEC, CWE, MITRE ATLAS, LINDDUN, STRIDE, OWASP LLM Top 10. Packs for AWS, Azure, GCP, banking, and AI/ML.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <FileJson className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">TM-BOM Interoperability</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  CycloneDX 2.0 TM-BOM import/export. CSV and Word report generation. No vendor lock-in.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Compliance Mapping</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  DORA, CRA, ASVS, NIST CSF, SOC 2 traceability.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Cpu className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">AI-Powered Threat Modeling</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  LLM threat suggestion, DFD generation from architecture diagrams, built-in MCP server, and bring-your-own-model support.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Team Collaboration</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Workspace-based threat modeling with real-time collaboration.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Gauge className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Risk Register</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Risks with ratings, owners and responses, a kanban board, and tracking of overdue countermeasures.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <ListChecks className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Use Cases &amp; Abuse Cases</h3>
                  <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">v0.5</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Link what users do to abuse cases, threats and countermeasures, so you can analyze a system by behavior as well as by its diagram.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <ClipboardCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Review &amp; Approval</h3>
                  <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap">v0.5</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Sign-off workflow with a clear flag when a model has changed since it was approved. Review due dates and validity periods built in.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Who Is It For Section */}
      <Section id="audience">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Who Is Precogly For?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Security Architects</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Scale threat modeling across your org.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Security Engineers</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Build AI assistants on a structured CRUD foundation. REST API, OpenAPI, and built-in MCP server included.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Consultants & Trainers</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Deliver workshops with reference images, collaboration, structured programs.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-8 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <ClipboardCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Compliance Professionals</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  Link threat models to ASVS, CRA, DORA, NIST CSF, SOC 2.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Get Started Section */}
      <Section id="get-started" className="bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Get Started in 60 Seconds
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-surface p-6 rounded-xl border border-accent/20 mb-8">
              <div>
                <h3 className="font-semibold text-primary mb-1">Don&apos;t want to install anything?</h3>
                <p className="text-muted text-sm">
                  Open the hosted demo in your browser. Shared instance, reset periodically —
                  explore freely, but keep real threat models on your own deployment.
                </p>
              </div>
              <a
                href="https://app.precogly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <PlayCircle className="w-5 h-5" />
                Try Precogly
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-foreground rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-white/60" />
                <span className="text-white/60 text-sm font-mono">terminal</span>
              </div>
              <pre className="text-white font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
{`git clone --branch v0.4.0 https://github.com/precogly/precogly.git
cd precogly
docker compose up --build`}
              </pre>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-center text-muted mt-6 mb-8">
              Open{" "}
              <code className="bg-primary/5 px-2 py-1 rounded text-sm font-mono">
                http://localhost:5173
              </code>{" "}
              and log in with{" "}
              <code className="bg-primary/5 px-2 py-1 rounded text-sm font-mono">
                admin@precogly.dev / admin123
              </code>
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="https://precogly.github.io/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read the Docs
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 text-center">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Join the conversation
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 hover:border-primary/40 text-primary rounded-lg transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord
                </a>
                <a
                  href={OWASP_SLACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 hover:border-primary/40 text-primary rounded-lg transition-colors text-sm"
                >
                  <Slack className="w-4 h-4" />
                  #project-precogly on OWASP Slack
                </a>
              </div>
              <p className="text-xs text-muted mt-3">
                Not on OWASP Slack yet?{" "}
                <a
                  href={OWASP_SLACK_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Get an invite
                </a>
                .
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
                    <span className="text-foreground"><strong>Contribute</strong> to the core platform and library packs.</span>
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

            {/* For Practitioners Section */}
            <div id="practitioners">
              <FadeIn>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    For Practitioners
                  </span>
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Practitioner Directory
                </h2>
              </FadeIn>

              <FadeIn>
                <p className="text-muted mb-6 text-lg leading-relaxed">
                  Offer threat modeling services using the industry&apos;s first open-source,
                  enterprise-grade threat modeling tool. Get listed and connect with
                  organizations looking for expert help.
                </p>
              </FadeIn>

              <FadeIn>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Provide</strong> training, customization, integration, and consulting services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Get listed</strong> in our practitioner directory and grow your visibility.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Join</strong> a growing ecosystem of security professionals using Precogly.
                    </span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn>
                <Link
                  href="/practitioners"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors"
                >
                  <Users className="w-5 h-5" />
                  View Practitioners
                </Link>
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
              <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 mt-1.5 bg-green-500 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">v0.3 &mdash; DFD Editor Features <span className="text-sm font-normal text-muted">(released July 2026)</span></h3>
                  <p className="text-muted">Nested components, typed zones, boundaries and flows, notation switching, undo/redo.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 mt-1.5 bg-green-500 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">v0.4 &mdash; MCP and AI Agents Support <span className="text-sm font-normal text-muted">(released September 2026)</span></h3>
                  <p className="text-muted">AI-powered threat suggestion, DFD generation from architecture diagrams, built-in MCP server, bring-your-own-model, CycloneDX 2.0 TM-BOM, risk register, and OAuth 2.1.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm border border-yellow-500/30">
                <div className="w-3 h-3 mt-1.5 bg-yellow-500 rounded-full animate-pulse shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">v0.5 &mdash; Threat Modeling Program Management and TM-BOM Alignment <span className="text-sm font-normal text-muted">(in progress)</span></h3>
                  <ul className="text-muted mt-2 space-y-1 list-disc list-inside">
                    <li>See threat modeling coverage and risk management progress across the organization.</li>
                    <li>Report on risk ownership, treatment status and overdue actions by business unit, team and product.</li>
                    <li>Align with the Threat Modeling Manifesto&apos;s Capabilities, especially Measurement and Program Management.</li>
                    <li>Align Precogly&apos;s data model with the CycloneDX 2.0 TM-BOM (done on <code className="text-sm">main</code>, not yet released).</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 mt-1.5 bg-gray-300 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">v0.6 &mdash; Risk Management</h3>
                  <ul className="text-muted mt-2 space-y-1 list-disc list-inside">
                    <li>Record risks from vulnerabilities and assessments alongside those from threat modeling.</li>
                    <li>Assign risk owners, record treatment decisions and track residual risk.</li>
                    <li>Run risk assessments and produce reports that support compliance, including the EU CRA.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm">
                <div className="w-3 h-3 mt-1.5 bg-gray-300 rounded-full shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-primary">v0.7 &mdash; Security Controls Management</h3>
                  <ul className="text-muted mt-2 space-y-1 list-disc list-inside">
                    <li>Show auditors that security controls are in place and working, with verification steps and evidence.</li>
                    <li>Maintain control libraries at product and organization levels.</li>
                    <li>Integrate with development and security tools, starting with GitHub and DefectDojo.</li>
                    <li>Apply ISO/IEC 27034 concepts across applications, infrastructure and devices.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-center text-sm text-muted pt-2">
                Follow release work on the{" "}
                <a
                  href={GITHUB_MILESTONES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub milestones
                </a>
                .
              </p>
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
                answer="Yes. Released under Apache 2.0. Full source on GitHub."
              />
              <FAQItem
                question="How is this different from existing tools?"
                answer="Precogly is compliance-aware out of the box, ships with structured library packs (MITRE ATT&CK, STRIDE, LINDDUN, and more), includes AI-powered threat suggestion with bring-your-own-model support, a built-in MCP server for AI agent integration, CycloneDX 2.0 TM-BOM interoperability, and has no licensing fees. It fills the gap between ad-hoc open tools and expensive commercial platforms."
              />
              <FAQItem
                question="Who is behind this project?"
                answer={<><a href="https://www.linkedin.com/in/vikramadityanarayan/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vikramaditya</a> - Threat Modeling Connect Chapter Lead (Bangalore) and an experienced developer. Advised by senior practitioners from Fortune 500 enterprises.</>}
              />
              <FAQItem
                question="Can I try Precogly without installing it?"
                answer={<>Yes. <a href="https://app.precogly.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">app.precogly.org</a> is a hosted demo you can open in your browser. It is a shared instance and its data is reset periodically, so use it to evaluate the tool and self-host once you want to keep your threat models.</>}
              />
              <FAQItem
                question="What do I need to run Precogly?"
                answer="Docker and Docker Compose. Clone the repo, run docker compose up --build, and open localhost:5173. Three commands to a running instance."
              />
              <FAQItem
                question="Can I contribute?"
                answer={<>Absolutely. We welcome contributions to the core platform, library packs, documentation, and bug reports. Head to <a href="https://github.com/precogly/precogly" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a> to get started, or join the conversation on <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Discord</a> or in <a href={OWASP_SLACK_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">#project-precogly</a> on OWASP Slack (<a href={OWASP_SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">get an invite</a>).</>}
              />
              <FAQItem
                question="What frameworks does Precogly support?"
                answer="MITRE ATT&CK, CAPEC, CWE, MITRE ATLAS, LINDDUN, STRIDE, and OWASP LLM Top 10 for threat identification. DORA, CRA, ASVS, NIST CSF, and SOC 2 for compliance mapping. A vendor-neutral AI/ML threat library pack is also included. More packs are added by the community."
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
                href="https://app.precogly.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Try Precogly"
              >
                <PlayCircle className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/precogly/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://precogly.github.io/precogly"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Documentation"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={OWASP_SLACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="OWASP Slack"
              >
                <Slack className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikramadityanarayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60 space-y-2">
            <p>Built with React, Django, PostgreSQL, and Docker</p>
            <p>&copy; {new Date().getFullYear()} Precogly. All rights reserved. Licensed under Apache 2.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
