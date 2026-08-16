import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Truck Dispatch Resources | Logist Movers",
  description:
    "Explore practical truck dispatch resources for owner-operators and fleets, including load planning, rate negotiation, broker communication, freight lanes, and dispatch strategy.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Truck Dispatch Resources | Logist Movers",
    description:
      "Practical dispatch guides and trucking resources for owner-operators and fleets across the United States.",
    url: "https://www.logistmovers.com/resources",
    type: "website",
  },
};

const resources = [
  {
    title: "How Truck Dispatch Services Help Owner-Operators Find Better Loads",
    description:
      "Learn how professional dispatch support can help with load searching, rate negotiation, broker communication, lane planning, and day-to-day coordination.",
    href: "/resources/how-truck-dispatch-services-help-owner-operators",
    tag: "Dispatch Guide",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.logistmovers.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://www.logistmovers.com/resources",
    },
  ],
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06101d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Header */}
      <header className="border-b border-white/10 bg-[#06101d]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Logist Movers Home">
            <Image
              src="/logist-movers-logo.png"
              alt="Logist Movers"
              width={230}
              height={70}
              className="h-[55px] w-auto object-contain"
            />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-10 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Trucking Knowledge
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Truck Dispatch
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Resources.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Practical guides for owner-operators and fleets covering dispatch
              strategy, load planning, rate negotiation, broker communication,
              freight lanes, and day-to-day trucking operations.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            Latest Guides
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
            Resources built around real carrier operations.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Our goal is to provide useful information that helps carriers better
            understand dispatching, freight planning, broker communication, and
            operating decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group rounded-[28px] border border-white/10 bg-[#081522] p-8 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                {resource.tag}
              </span>

              <h3 className="mt-5 text-2xl font-black leading-tight">
                {resource.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {resource.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-400">
                Read Guide
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="border-y border-white/10 bg-[#081522]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Topics We Cover
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Practical information for carriers.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Load Searching",
              "Rate Negotiation",
              "Broker Communication",
              "Freight Lane Planning",
              "Owner-Operator Dispatch",
              "Regional & OTR Strategy",
              "Equipment Dispatch",
              "Carrier Operations",
            ].map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-white/10 bg-[#06101d] px-5 py-5 font-bold text-slate-200"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[34px] border border-blue-400/20 bg-gradient-to-br from-blue-600/10 via-[#081522] to-cyan-500/10 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            Dispatch Services
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
            Looking for professional dispatch support?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            Explore Logist Movers truck dispatch services by equipment type or
            view our nationwide service areas.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              View Dispatch Services
            </Link>

            <Link
              href="/services/service-areas"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-bold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              View Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040b14]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/">
              <Image
                src="/logist-movers-logo.png"
                alt="Logist Movers"
                width={230}
                height={70}
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>

              <Link href="/services" className="hover:text-cyan-400">
                Services
              </Link>

              <Link
                href="/services/service-areas"
                className="hover:text-cyan-400"
              >
                Service Areas
              </Link>

              <Link href="/#contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </div>
          </div>

          <p className="mt-7 text-xs text-slate-400">
            © 2026 Logist Movers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}