"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GithubIcon,
  ArrowLeft,
  Users,
  Globe,
  Shield,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Building2,
  LinkedinIcon,
  Mail,
  PlayCircle,
} from "lucide-react";

const DOCS_URL = "https://precogly.github.io/precogly";
const DEMO_URL = "https://try.precogly.org/";

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

interface Practitioner {
  name: string;
  description: string;
  region: string;
  industries: string;
  website?: string;
  linkedin?: string;
  services: string[];
  badge?: string;
}

const practitioners: Practitioner[] = [
  {
    name: "SecureHabits",
    description:
      "AppSec consultancy helping organizations build security into products from inception. Specializing in SSDLC maturity assessments, EU Cyber Resilience Act compliance, and secure-by-design product development enablement.",
    region: "Europe",
    industries: "All Industries",
    website: "https://securehabits.nl",
    services: [
      "SSDLC Maturity Assessments",
      "Compliance & Regulatory",
      "Secure-by-Design Enablement",
      "Consulting",
    ],
  },
  {
    name: "Vikramaditya Narayan",
    description:
      "Creator of Precogly and OWASP Precogly Project Leader. Providing hands-on training, customization, integration, and consulting services to help organizations adopt and operationalize threat modeling with Precogly.",
    region: "Worldwide",
    industries: "All Industries",
    linkedin: "https://linkedin.com/in/vikramadityanarayan",
    services: [
      "Training",
      "Customization",
      "Integration",
      "Consulting",
    ],
  },
];

export default function PractitionersPage() {
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
              <a
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/precogly-logo.jpeg"
                  alt="Precogly Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-xl text-primary">
                  Precogly
                </span>
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
                href="/learn"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Learn
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
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
              >
                <PlayCircle className="w-4 h-4" />
                Live Demo
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
              <Users className="w-4 h-4" />
              Practitioner Directory
            </div>
          </FadeIn>

          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Precogly Practitioners
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Organizations and consultants offering threat modeling assessment,
              implementation services, or tools based on the Precogly framework.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-surface border border-primary/10 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-lg">
                    Important Notice
                  </h3>
                  <p className="text-muted leading-relaxed">
                    The practitioners listed below offer services related to the
                    Precogly threat modeling framework. This listing is provided
                    as a convenience and{" "}
                    <strong className="text-primary">
                      does not constitute an endorsement
                    </strong>{" "}
                    by the Precogly project or OWASP. Users must independently
                    verify practitioners&apos; qualifications, experience, and
                    suitability for their specific needs.
                  </p>
                  <p className="text-muted leading-relaxed">
                    The Precogly project is not responsible for any services
                    provided by listed practitioners. All engagement is at your
                    own discretion and risk.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Practitioners Directory */}
      <Section id="directory" className="bg-surface-alt">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Directory
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Organizations and individuals providing Precogly-related
              services.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {practitioners.map((practitioner, index) => (
              <FadeIn key={index}>
                <div className="bg-surface border border-primary/10 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Building2 className="w-6 h-6 text-accent" />
                        <h3 className="font-bold text-xl text-primary">
                          {practitioner.name}
                        </h3>
                        {practitioner.badge && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                            {practitioner.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-muted leading-relaxed mb-4">
                        {practitioner.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {practitioner.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 bg-accent/10 text-accent rounded-full"
                          >
                            <Shield className="w-3 h-3" />
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {practitioner.region}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {practitioner.industries}
                        </span>
                        {practitioner.website && (
                          <a
                            href={practitioner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent hover:text-accent-dark transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Website
                          </a>
                        )}
                        {practitioner.linkedin && (
                          <a
                            href={practitioner.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent hover:text-accent-dark transition-colors"
                          >
                            <LinkedinIcon className="w-4 h-4" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Become a Practitioner — prominent CTA */}
      <Section id="get-listed" className="bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Users className="w-4 h-4" />
              Join the Ecosystem
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become a Precogly Practitioner
            </h2>
          </FadeIn>

          <FadeIn>
            <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg">
              Do you provide threat modeling services using Precogly? Get listed
              in our practitioner directory and connect with organizations
              looking for expert help.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Requirements
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Provide threat modeling services using the Precogly tool
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Reference the official Precogly project website on your
                    service page
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  What to Include
                </h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">1.</span>
                    Organization or individual name
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">2.</span>
                    Brief description of services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">3.</span>
                    Geographic region(s) served
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">4.</span>
                    Industries served
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">5.</span>
                    Link to your website or LinkedIn
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <a
              href="https://github.com/precogly/precogly-org-website/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-lg"
            >
              <GithubIcon className="w-5 h-5" />
              Apply to Be Listed
            </a>
            <p className="text-white/50 text-sm mt-4">
              Open an issue on our GitHub repository to get started
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Removal Policy */}
      <Section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-surface-alt border border-primary/10 rounded-xl p-6 md:p-8 text-center">
              <p className="text-muted text-sm leading-relaxed max-w-2xl mx-auto">
                The Precogly project reserves the right to remove any listing at
                its discretion. Listings may be removed if the practitioner no
                longer meets the requirements, if services are misrepresented, or
                if there are community concerns about the quality of services
                provided.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-foreground text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/precogly-logo.jpeg"
                alt="Precogly Logo"
                width={40}
                height={40}
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
            <p>Built with React, Django, PostgreSQL, and Docker</p>
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
