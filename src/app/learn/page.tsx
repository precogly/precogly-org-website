"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GithubIcon,
  ArrowLeft,
  Clock,
  User,
  CheckCircle2,
  GraduationCap,
  Shield,
  Code,
  ClipboardCheck,
  Users,
  Briefcase,
  Laptop,
  FileText,
  ExternalLink,
  Download,
  Rocket,
  Settings,
  Link2,
  Sparkles,
  ImageIcon,
  Building2,
  FileJson,
  AlertTriangle,
  Library,
  GitBranch,
} from "lucide-react";

const DOCS_URL = "https://precogly.github.io/precogly";

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

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* OWASP Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
          <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <span>
            Precogly is now an official <strong>OWASP Project</strong>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/precogly-logo.jpeg"
                  alt="Precogly Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-xl text-primary">Precogly</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="/"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </a>
              <a
                href={DOCS_URL}
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-42 md:pt-50 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4" />
              Learning Resources
            </div>
          </FadeIn>

          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Learn OWASP Precogly
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              From first install to enterprise deployment — documentation,
              guides, and hands-on training to help you master open-source
              threat modeling.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read the Docs
              </a>
              <a
                href="#training"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Professional Training
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Getting Started */}
      <Section className="bg-surface-alt">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Getting Started
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Download, title: "Installation", path: "/getting-started/installation/" },
              { icon: Rocket, title: "Quickstart", path: "/getting-started/quickstart/" },
              { icon: Settings, title: "Configuration", path: "/getting-started/configuration/" },
            ].map((item, index) => (
              <FadeIn key={index}>
                <a
                  href={`${DOCS_URL}${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface p-6 rounded-xl shadow-sm border border-primary/5 hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted mt-2">
                    <ExternalLink className="w-3 h-3" />
                    <span>Documentation</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Concepts */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Core Concepts
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="text-center text-muted mb-12 text-lg">
              Understand the building blocks of Precogly&apos;s threat modeling
              platform.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Library, title: "Library Packs", slug: "library-packs" },
              { icon: Code, title: "DFD Editor", slug: "dfd-editor" },
              { icon: AlertTriangle, title: "Threat Analysis", slug: "threat-analysis" },
              { icon: FileJson, title: "Threat Model as Code", slug: "threat-model-as-code" },
              { icon: Shield, title: "Zone Protections", slug: "zone-protections" },
              { icon: Settings, title: "Platform Controls", slug: "platform-controls" },
              { icon: CheckCircle2, title: "Completion Status", slug: "completion-status" },
              { icon: ImageIcon, title: "Reference Images", slug: "reference-images" },
              { icon: Building2, title: "Org Hierarchy", slug: "org-hierarchy" },
              { icon: Users, title: "Roles & Permissions", slug: "roles-and-permissions" },
              { icon: Link2, title: "Connected Systems", slug: "connected-systems" },
              { icon: Sparkles, title: "Magic Links", slug: "magic-links" },
            ].map((item, index) => (
              <FadeIn key={index}>
                <a
                  href={`${DOCS_URL}/concepts/${item.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-primary/5 hover:border-accent/30 hover:bg-surface transition-all group"
                >
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors text-sm">
                    {item.title}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Guides, Recipes & More */}
      <Section className="bg-surface-alt">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Guides, Recipes & More
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn>
              <div className="bg-surface p-6 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Guides</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { title: "Creating a Threat Model", path: "/guides/creating-a-threat-model/" },
                    { title: "Importing & Exporting", path: "/guides/importing-and-exporting/" },
                    { title: "Compliance Mapping", path: "/guides/compliance-mapping/" },
                  ].map((guide, index) => (
                    <li key={index}>
                      <a
                        href={`${DOCS_URL}${guide.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        <span>{guide.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface p-6 rounded-xl shadow-sm border border-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Recipes</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { title: "IEC 62443", path: "/recipes/iec-62443/" },
                    { title: "EU Banking", path: "/recipes/eu-banking/" },
                  ].map((recipe, index) => (
                    <li key={index}>
                      <a
                        href={`${DOCS_URL}${recipe.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        <span>{recipe.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href={`${DOCS_URL}/api-reference/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                API Reference
              </a>
              <a
                href={`${DOCS_URL}/changelog/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Changelog
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Contributing */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Contributing
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`${DOCS_URL}/contributing/development-setup/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/10 hover:border-accent/30 hover:bg-surface transition-all text-muted hover:text-accent"
              >
                <GitBranch className="w-4 h-4" />
                Development Setup
              </a>
              <a
                href={`${DOCS_URL}/contributing/creating-library-packs/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/10 hover:border-accent/30 hover:bg-surface transition-all text-muted hover:text-accent"
              >
                <Library className="w-4 h-4" />
                Creating Library Packs
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Visual Separator */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          Professional Training Section
          ═══════════════════════════════════════════════════════════════ */}
      <div id="training">
        {/* Training Header */}
        <Section className="pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
                <GraduationCap className="w-4 h-4" />
                Independent Professional Training
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Hands-on, LLM-Assisted Threat Modeling with OWASP Precogly
              </h2>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center justify-center gap-2 text-muted mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-lg font-medium">2-Day Course</span>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex items-center justify-center gap-3 text-muted">
                <User className="w-5 h-5 text-primary" />
                <span className="text-lg">
                  Instructor:{" "}
                  <strong className="text-primary">Vikramaditya Narayan</strong>
                </span>
              </div>
              <p className="text-muted mt-1 mb-6">
                Creator and Project Leader, OWASP Precogly
              </p>
            </FadeIn>

            <FadeIn>
              <div className="bg-surface-alt text-sm text-muted text-center max-w-xl mx-auto p-4 rounded-lg">
                OWASP Precogly is free and open-source. Professional training is
                offered independently by the project creator. Contact{" "}
                <a
                  href="mailto:vikram@precogly.org"
                  className="text-accent hover:underline"
                >
                  vikram@precogly.org
                </a>{" "}
                for more info.
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* About This Course (merged from Overview + About) */}
        <Section className="bg-surface-alt pt-12 md:pt-16">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
                About This Course
              </h2>
            </FadeIn>
            <FadeIn>
              <div className="space-y-6 text-muted leading-relaxed text-lg">
                <p>
                  This hands-on course will teach you to combine the power of
                  LLMs with open-source tooling to scale threat modeling in your
                  organization without increasing the workload for your security
                  team.
                </p>
                <p>
                  Scaling threat modeling is one of the hardest problems in
                  application security. Open-source tools often lack the depth
                  needed for enterprise use, while commercial platforms come with
                  vendor lock-in, steep licensing costs, and the loss of data
                  sovereignty. OWASP Precogly bridges this gap as a fully
                  open-source platform that rivals commercial tools in capability
                  without the trade-offs. In this two-day, hands-on course,
                  participants will learn to use Precogly to unblock the
                  bottlenecks that slow down threat modeling programs: building
                  reusable threat libraries with LLM assistance, mapping threats to
                  industry taxonomies (STRIDE, MITRE ATT&CK, CWE, CAPEC), tracing
                  countermeasures to compliance standards and regulations (NIST
                  CSF, SOC 2, DORA, ASVS), and generating reports that serve
                  security, compliance, and executive stakeholders alike.
                </p>
                <p>
                  A key focus of the course is how Precogly integrates AI
                  responsibly. Rather than letting LLMs generate entire threat
                  models at runtime, where hallucinated components, data flows, and
                  threats are a real risk, Precogly uses LLMs at build time to
                  generate curated library packs that humans vet before use.
                  Participants will learn to author these packs themselves, creating
                  vetted chains of components to threats, threats to
                  countermeasures, and countermeasures to regulatory frameworks. The
                  course also covers Precogly&apos;s reporting capabilities, from
                  compliance coverage reports to penetration testing plans that
                  support threat-led pentesting engagements. And because Precogly
                  supports threat-model-as-code with git integration, participants
                  will see how developers can work from their IDE while security
                  teams, compliance officers, and executives interact through the
                  web interface, making threat modeling a collaborative practice
                  rather than a siloed exercise.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* What You Will Learn */}
        <Section className="bg-surface-alt">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                What You Will Learn
              </h2>
            </FadeIn>
            <FadeIn>
              <ul className="space-y-4">
                {[
                  "Build structured, compliance-traceable threat models using OWASP Precogly",
                  "Use LLMs to author reusable library packs with human-vetted threat intelligence",
                  "Map threats to industry taxonomies: STRIDE, MITRE ATT&CK, CWE, CAPEC",
                  "Trace countermeasures to compliance standards and regulations: NIST CSF, SOC 2, DORA, ASVS",
                  "Model system architecture using data flow diagrams with trust zones and boundaries",
                  "Generate reports for executives, auditors, and penetration testers",
                  "Integrate threat models into version control using threat-model-as-code",
                  "Apply a repeatable, AI-augmented threat modeling methodology to your organization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Section>

        {/* Course Outline */}
        <Section id="outline">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Course Outline
              </h2>
            </FadeIn>

            {/* Day 1 */}
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Day 1 — Foundations and Core Concepts
                  </h3>
                </div>

                <div className="space-y-6 ml-4 md:ml-13">
                  {/* Morning */}
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                      Morning
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Foundations (2 Hours)
                    </h4>
                    <ul className="space-y-2 text-muted mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Introduction to threat modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>The Four Questions Framework</span>
                      </li>
                      <ul className="ml-6 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary/20 mt-1.5">&#9675;</span>
                          <span>What are we working on?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary/20 mt-1.5">&#9675;</span>
                          <span>What can go wrong?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary/20 mt-1.5">&#9675;</span>
                          <span>What are we going to do about it?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary/20 mt-1.5">&#9675;</span>
                          <span>Did we do a good enough job?</span>
                        </li>
                      </ul>
                    </ul>

                    <div className="border-t border-primary/10 pt-4 mb-6 text-sm text-muted italic">
                      Break
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Core Concepts (90 Minutes)
                    </h4>
                    <ul className="space-y-2 text-muted mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          DFD elements: actors, processes, data stores, trust
                          zones, data flows
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Taxonomies: STRIDE, MITRE ATT&CK, CWE, CAPEC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Methodologies: STRIDE, PASTA, LINDDUN, VAST, OCTAVE
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Standards and laws: NIST CSF, SOC 2, DORA, ASVS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          PWNISMS: A developer-friendly threat modeling framework
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>The Threat Modeling Manifesto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Threat modeling capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>The risks of AI-powered threat modeling</span>
                      </li>
                    </ul>

                    <div className="border-t border-primary/10 pt-4">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Quiz (30 Minutes)
                      </h4>
                    </div>
                  </div>

                  {/* Afternoon */}
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                      Afternoon
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Building with LLMs — Hands-on Lab (3 Hours)
                    </h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Author a library pack with an LLM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Build your first threat model with OWASP Precogly
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Day 2 */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Day 2 — Operationalizing and Capstone
                  </h3>
                </div>

                <div className="space-y-6 ml-4 md:ml-13">
                  {/* Morning */}
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                      Morning
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Operationalizing Threat Models — Hands-on Lab (3 Hours)
                    </h4>
                    <ul className="space-y-2 text-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Build paved roads with platform controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Create business units and teams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Integrate with git and meet the developers where they
                          live
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>Set up changelog and drift detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Generate reports for executives, auditors, and
                          penetration testers
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Verify implementation of countermeasures with penetration
                          test plans
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Verify implementation of countermeasures with SARIF
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Afternoon */}
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                      Afternoon
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Capstone Exercise — Hands-on Lab (3 Hours)
                    </h4>
                    <ul className="space-y-2 text-muted mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Group Exercise: Work through a simulated threat model
                          lifecycle
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Teams are assigned a realistic system scenario
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Model the system architecture in Precogly using DFDs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Use LLM-authored library packs to identify threats and
                          apply countermeasures
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Generate compliance and penetration testing reports
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary/40 mt-1.5">&#9679;</span>
                        <span>
                          Teams present findings and defend their threat models
                        </span>
                      </li>
                    </ul>

                    <div className="border-t border-primary/10 pt-4">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Final Exam (Optional)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Certificate of Proficiency */}
        <Section className="bg-surface-alt">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 md:p-10 rounded-xl border border-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Certificate of Proficiency
                  </h2>
                </div>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    A certificate of proficiency exam is available as an optional
                    add-on. The proficiency exam is a standalone practical assessment
                    administered after the Day 2 capstone exercise. Students are
                    given a system scenario and must independently produce a threat
                    model in Precogly, including system architecture, threat
                    identification using LLM-authored library packs, countermeasure
                    mapping with compliance traceability, and a final report.
                  </p>
                  <p>
                    Students must score at least <strong className="text-primary">70%</strong> across
                    the evaluation criteria to pass. Certificate participants will
                    also receive written feedback from the instructor with specific
                    recommendations for improving their threat modeling practice.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Who Should Attend */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Who Should Attend
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security Architects",
                  description:
                    "Scaling threat modeling across their organization",
                },
                {
                  icon: Code,
                  title: "AppSec Engineers",
                  description:
                    "Looking to integrate AI into their workflow",
                },
                {
                  icon: Laptop,
                  title: "DevSecOps Practitioners",
                  description:
                    "Adopting threat-model-as-code practices",
                },
                {
                  icon: ClipboardCheck,
                  title: "Compliance Professionals",
                  description:
                    "Mapping controls to regulatory frameworks",
                },
                {
                  icon: Briefcase,
                  title: "Security Consultants",
                  description:
                    "Delivering threat modeling engagements",
                },
                {
                  icon: Users,
                  title: "Team Leads",
                  description:
                    "Building a repeatable threat modeling program",
                },
              ].map((persona, index) => (
                <FadeIn key={index}>
                  <div className="flex items-start gap-4 bg-surface p-6 rounded-xl shadow-sm border border-primary/5">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <persona.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {persona.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">
                        {persona.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* Prerequisites + What to Bring + What Instructor Provides */}
        <Section className="bg-surface-alt">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      Prerequisites
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">
                    Basic familiarity with threat modeling concepts (e.g., STRIDE,
                    data flow diagrams) is helpful but not required. Students
                    should be comfortable navigating web applications and have a
                    general understanding of application security concepts such as
                    authentication, encryption, and access control. Students must
                    install Docker Desktop on their laptops prior to the course.
                    Detailed setup instructions will be provided two weeks before
                    the course.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn>
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Laptop className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        What to Bring
                      </h3>
                    </div>
                    <p className="text-muted leading-relaxed">
                      A laptop with a modern web browser (Chrome, Firefox, or Edge)
                      and Docker Desktop installed. Minimum specs: 16GB RAM, 20GB
                      free disk space, admin/root access to install software. Both
                      macOS and Windows are supported.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn>
                  <div className="bg-surface p-6 md:p-8 rounded-xl shadow-sm border border-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        What the Instructor Will Provide
                      </h3>
                    </div>
                    <p className="text-muted leading-relaxed">
                      Access to all course materials including slides, lab guides,
                      sample library packs, and exercise materials. Students will
                      run OWASP Precogly locally on their own machines via Docker
                      Compose.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Section>

        {/* About the Instructor */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
                About the Instructor
              </h2>
            </FadeIn>
            <FadeIn>
              <div className="bg-surface p-8 md:p-10 rounded-xl shadow-sm border border-primary/5">
                <p className="text-muted leading-relaxed text-lg">
                  <strong className="text-primary">Vikramaditya Narayan</strong>{" "}
                  is the creator and project leader of OWASP Precogly and a
                  Certified Threat Modeling Professional. He leads the Bangalore
                  chapter of Threat Modeling Connect.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>

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
                <p className="text-sm text-white/70">
                  Open-source threat modeling
                </p>
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
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Documentation"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60 space-y-2">
            <p>
              Built with React, Django, PostgreSQL, and Docker
            </p>
            <p>
              &copy; {new Date().getFullYear()} Precogly. All rights reserved.
              Licensed under Apache 2.0.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
