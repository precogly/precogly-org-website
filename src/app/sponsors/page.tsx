"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GithubIcon,
  ArrowLeft,
  Users,
  Globe,
  Lightbulb,
  HeartHandshake,
  Heart,
  Check,
  Minus,
  Mail,
  PlayCircle,
  Server,
  Library,
  GraduationCap,
  Wrench,
  Info,
  ExternalLink,
} from "lucide-react";

const DOCS_URL = "https://precogly.github.io/precogly";
const DEMO_URL = "https://app.precogly.org/";
const OWASP_PROJECT_URL = "https://owasp.org/www-project-precogly/";
const OWASP_DONATE_URL =
  "https://owasp.org/donate/?reponame=www-project-precogly&title=OWASP+Precogly";
const SPONSOR_CONTACT_EMAIL = "vikram@precogly.org";
const SPONSOR_CONTACT_URL = `mailto:${SPONSOR_CONTACT_EMAIL}?subject=Sponsoring%20OWASP%20Precogly`;

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

const sponsorBenefitReasons = [
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "Associate your brand with an official OWASP project and an open threat modeling platform used by security and engineering teams worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Thought Leadership",
    description:
      "Show that your organization invests in secure-by-design engineering and helps make threat modeling accessible to every team, not just those with large budgets.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Connect with practitioners, contributors, and enterprise adopters who are shaping the next generation of open threat modeling.",
  },
];

const fundedWorkAreas = [
  {
    icon: Wrench,
    title: "Core platform development",
    description: "Features, integrations, and long-term maintenance of the core platform.",
  },
  {
    icon: Library,
    title: "Library packs and taxonomies",
    description: "Curating threat, component, and countermeasure packs and compliance mappings.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Hosting for app.precogly.org, documentation, CI, and community tooling.",
  },
  {
    icon: GraduationCap,
    title: "Documentation and outreach",
    description: "Guides, training material, talks, and community events.",
  },
];

type SponsorTierName = "Platinum" | "Gold" | "Silver" | "Bronze" | "Community";

interface SponsorTier {
  name: SponsorTierName;
  contribution: string;
  contributionPeriod: string;
  summary: string;
  accentClassName: string;
}

const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum",
    contribution: "Custom grant",
    contributionPeriod: "per year",
    summary: "Fund a dedicated piece of roadmap work, with the amount agreed with the project.",
    accentClassName: "border-slate-400 bg-slate-100 text-slate-700",
  },
  {
    name: "Gold",
    contribution: "$10,000+",
    contributionPeriod: "per year",
    summary: "Prominent placement across the site and priority access to the core team.",
    accentClassName: "border-yellow-400 bg-yellow-50 text-yellow-700",
  },
  {
    name: "Silver",
    contribution: "$5,000+",
    contributionPeriod: "per year",
    summary: "Logo and link on this page plus recognition in release announcements.",
    accentClassName: "border-gray-300 bg-gray-50 text-gray-600",
  },
  {
    name: "Bronze",
    contribution: "$1,000+",
    contributionPeriod: "per year",
    summary: "Logo and link on this page and a listing in the practitioner directory.",
    accentClassName: "border-orange-300 bg-orange-50 text-orange-700",
  },
  {
    name: "Community",
    contribution: "Under $1,000",
    contributionPeriod: "one-time",
    summary: "Your name listed in the community supporters section.",
    accentClassName: "border-accent/30 bg-accent/10 text-accent",
  },
];

// Each benefit maps a tier name to either true (included), false (not included),
// or a short string describing a tier-specific variant of the benefit.
interface SponsorBenefit {
  description: string;
  availabilityByTier: Record<SponsorTierName, boolean | string>;
}

const sponsorBenefits: SponsorBenefit[] = [
  {
    description: "Input on sponsored work, aligned with the Precogly roadmap",
    availabilityByTier: { Platinum: true, Gold: false, Silver: false, Bronze: false, Community: false },
  },
  {
    description: "Priority support from the core team",
    availabilityByTier: { Platinum: true, Gold: true, Silver: false, Bronze: false, Community: false },
  },
  {
    description: "Logo on the Precogly homepage",
    availabilityByTier: { Platinum: "Top placement", Gold: true, Silver: false, Bronze: false, Community: false },
  },
  {
    description: "Logo in the GitHub README",
    availabilityByTier: { Platinum: true, Gold: true, Silver: false, Bronze: false, Community: false },
  },
  {
    description: "Logo and link on this Sponsors page",
    availabilityByTier: { Platinum: "Largest", Gold: "Large", Silver: "Medium", Bronze: "Small", Community: "Name only" },
  },
  {
    description: "Listing in the Practitioner directory",
    availabilityByTier: { Platinum: "Priority", Gold: "Priority", Silver: true, Bronze: true, Community: false },
  },
  {
    description: "Recognition in release announcements",
    availabilityByTier: { Platinum: "Headline", Gold: true, Silver: true, Bronze: false, Community: false },
  },
];

interface Sponsor {
  name: string;
  tier: SponsorTierName;
  website: string;
  logoPath?: string;
}

// Add sponsors here once their contribution has been received through OWASP.
// Place logo files in /public/sponsors and reference them as "/sponsors/<file>".
const currentSponsors: Sponsor[] = [];

function BenefitCell({ availability }: { availability: boolean | string }) {
  if (availability === true) {
    return <Check className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />;
  }
  if (availability === false) {
    return <Minus className="w-4 h-4 text-muted/50 mx-auto" aria-label="Not included" />;
  }
  return <span className="text-xs font-medium text-primary">{availability}</span>;
}

export default function SponsorsPage() {
  const sponsorsGroupedByTier = sponsorTiers
    .map((sponsorTier) => ({
      tier: sponsorTier,
      sponsors: currentSponsors.filter((sponsor) => sponsor.tier === sponsorTier.name),
    }))
    .filter((tierGroup) => tierGroup.sponsors.length > 0);

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
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image
                  src="/precogly-logo.jpeg"
                  alt="Precogly Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold text-xl text-primary">Precogly</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </Link>
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
                Try Precogly
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
              <HeartHandshake className="w-4 h-4" />
              Sponsorship
            </div>
          </FadeIn>

          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Show your commitment to security by sponsoring Precogly
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Precogly is a free, open-source OWASP project built by volunteers.
              Sponsorship keeps enterprise-grade threat modeling open and
              accessible to every organization.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#become-a-sponsor"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors"
              >
                <Heart className="w-5 h-5" />
                Become a Sponsor
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 hover:border-primary/40 text-primary font-semibold rounded-lg transition-colors"
              >
                View Sponsorship Tiers
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why Sponsor */}
      <Section id="why-sponsor" className="bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Why sponsor Precogly?
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Sponsors help an open standard for threat modeling grow, and get
              recognized for it.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorBenefitReasons.map((benefitReason) => (
              <FadeIn key={benefitReason.title}>
                <div className="bg-surface border border-primary/10 rounded-xl p-6 h-full">
                  <benefitReason.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-lg text-primary mb-2">{benefitReason.title}</h3>
                  <p className="text-muted leading-relaxed">{benefitReason.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Support the Evolution */}
      <Section id="funded-work">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Support the evolution of Precogly
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Precogly is developed and maintained by volunteers. Sponsorship
              funds the work that volunteer time alone cannot sustain.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {fundedWorkAreas.map((fundedWorkArea) => (
              <FadeIn key={fundedWorkArea.title}>
                <div className="flex items-start gap-4 bg-surface border border-primary/10 rounded-xl p-6 h-full">
                  <fundedWorkArea.icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{fundedWorkArea.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{fundedWorkArea.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Sponsorship Tiers */}
      <Section id="tiers" className="bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Sponsorship tiers
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Sponsorship is an annual contribution made through the OWASP
              Foundation. Tiers step down each year without renewal.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {sponsorTiers.map((sponsorTier) => (
              <FadeIn key={sponsorTier.name}>
                <div className="bg-surface border border-primary/10 rounded-xl p-5 h-full flex flex-col">
                  <span
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border ${sponsorTier.accentClassName}`}
                  >
                    {sponsorTier.name}
                  </span>
                  <p className="text-2xl font-bold text-primary mt-4">{sponsorTier.contribution}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">
                    {sponsorTier.contributionPeriod}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{sponsorTier.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-surface border border-primary/10 rounded-xl overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left font-semibold text-primary p-4">Benefit</th>
                    {sponsorTiers.map((sponsorTier) => (
                      <th key={sponsorTier.name} className="font-semibold text-primary p-4 text-center">
                        {sponsorTier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sponsorBenefits.map((sponsorBenefit) => (
                    <tr key={sponsorBenefit.description} className="border-b border-primary/5 last:border-b-0">
                      <td className="p-4 text-muted">{sponsorBenefit.description}</td>
                      {sponsorTiers.map((sponsorTier) => (
                        <td key={sponsorTier.name} className="p-4 text-center">
                          <BenefitCell availability={sponsorBenefit.availabilityByTier[sponsorTier.name]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Current Sponsors */}
      <Section id="sponsors">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Our sponsors
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Thank you to the organizations and individuals who support
              Precogly.
            </p>
          </FadeIn>

          {sponsorsGroupedByTier.length === 0 ? (
            <FadeIn>
              <div className="border-2 border-dashed border-primary/15 rounded-xl p-10 text-center">
                <HeartHandshake className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl text-primary mb-2">Become a founding sponsor</h3>
                <p className="text-muted max-w-xl mx-auto mb-6">
                  Precogly does not have any sponsors yet. Be the first to put
                  your name behind open, enterprise-grade threat modeling.
                </p>
                <a
                  href="#become-a-sponsor"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Sponsor Precogly
                </a>
              </div>
            </FadeIn>
          ) : (
            <div className="space-y-12">
              {sponsorsGroupedByTier.map((tierGroup) => (
                <FadeIn key={tierGroup.tier.name}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted text-center mb-6">
                    {tierGroup.tier.name}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {tierGroup.sponsors.map((sponsor) => (
                      <a
                        key={sponsor.name}
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-surface border border-primary/10 rounded-xl px-6 py-4 hover:shadow-lg transition-shadow"
                      >
                        {sponsor.logoPath && tierGroup.tier.name !== "Community" ? (
                          <Image
                            src={sponsor.logoPath}
                            alt={`${sponsor.name} logo`}
                            width={160}
                            height={64}
                            className="object-contain h-12 w-auto"
                          />
                        ) : (
                          <span className="font-semibold text-primary">{sponsor.name}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Become a Sponsor CTA */}
      <Section id="become-a-sponsor" className="bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              Sponsor Today
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to become a sponsor</h2>
          </FadeIn>

          <FadeIn>
            <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg">
              Sponsorships are processed by the OWASP Foundation, a US 501(c)(3)
              nonprofit, and directed to the Precogly project.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
            {[
              {
                stepNumber: 1,
                title: "Get in touch",
                description: "Email us with the tier you are interested in, or the work you would like to fund. We will confirm the amount and renewal date.",
              },
              {
                stepNumber: 2,
                title: "Donate through OWASP",
                description: "Make your annual contribution on the OWASP donation page for the Precogly project.",
              },
              {
                stepNumber: 3,
                title: "Get recognized",
                description: "Send us your logo and link, and we will add you to this page and the relevant channels.",
              },
            ].map((sponsorshipStep) => (
              <FadeIn key={sponsorshipStep.stepNumber}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold text-sm mb-4">
                    {sponsorshipStep.stepNumber}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{sponsorshipStep.title}</h3>
                  <p className="text-white/70 leading-relaxed">{sponsorshipStep.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SPONSOR_CONTACT_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us to Sponsor
              </a>
              <a
                href={OWASP_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Donate via OWASP
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4">
              Questions? Write to{" "}
              <a href={SPONSOR_CONTACT_URL} className="underline hover:text-white">
                {SPONSOR_CONTACT_EMAIL}
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Sponsorship Terms */}
      <Section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-surface-alt border border-primary/10 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-4 text-sm text-muted leading-relaxed">
                  <h3 className="font-semibold text-primary text-lg">Sponsorship terms</h3>
                  <p>
                    <strong className="text-primary">Roadmap alignment.</strong>{" "}
                    Sponsored work must align with the Precogly roadmap. Benefits
                    may change as the project evolves.
                  </p>
                  <p>
                    <strong className="text-primary">Historic donations.</strong>{" "}
                    Sponsors move down one tier each year without a new
                    contribution. Community supporters remain listed indefinitely.
                  </p>
                  <p>
                    <strong className="text-primary">Vendor neutrality.</strong>{" "}
                    Sponsorship does not constitute an endorsement of any product
                    or service by the Precogly project or the{" "}
                    <a
                      href={OWASP_PROJECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      OWASP Foundation
                    </a>
                    , and does not grant control over the project.
                  </p>
                  <p>
                    <strong className="text-primary">Conduct.</strong>{" "}
                    The project leaders may demote or remove a sponsor whose
                    actions harm the project or its community.
                  </p>
                </div>
              </div>
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
