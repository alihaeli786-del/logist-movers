import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Dispatch Service Areas | Logist Movers",
  description:
    "Logist Movers provides professional truck dispatch support for owner-operators and fleets across the USA, including key Midwest, Southeast, and Mid-Atlantic freight markets.",
  alternates: {
    canonical: "/services/service-areas",
  },
  openGraph: {
    title: "Truck Dispatch Service Areas | Logist Movers",
    description:
      "Nationwide truck dispatch support across key Midwest, Southeast, and eastern U.S. freight markets.",
    url: "https://www.logistmovers.com/services/service-areas",
    type: "website",
  },
};

const regions = [
  {
    name: "Midwest",
    description:
      "Dispatch support for carriers operating throughout major Midwest freight markets with strong connections to regional and OTR lanes across the country.",
    states: [
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Michigan",
      "Minnesota",
      "Missouri",
      "Nebraska",
      "North Dakota",
      "Ohio",
      "South Dakota",
      "Wisconsin",
    ],
  },
  {
    name: "Southeast",
    description:
      "Support for carriers running throughout key Southeast freight markets with regional and OTR dispatch coordination.",
    states: [
      "Alabama",
      "Florida",
      "Georgia",
      "Kentucky",
      "Mississippi",
      "North Carolina",
      "South Carolina",
      "Tennessee",
    ],
  },
  {
    name: "Northeast",
    description:
      "Dispatch support for carriers operating across major Northeast freight markets and connecting with Midwest, Mid-Atlantic, and national lanes.",
    states: [
      "Connecticut",
      "Maine",
      "Massachusetts",
      "New Hampshire",
      "New Jersey",
      "New York",
      "Pennsylvania",
      "Rhode Island",
      "Vermont",
    ],
  },
  {
    name: "Mid-Atlantic",
    description:
      "Support for carriers moving through important Mid-Atlantic freight corridors and connecting to Northeast, Midwest, and Southern markets.",
    states: [
      "Delaware",
      "Maryland",
      "Virginia",
      "West Virginia",
    ],
  },
  {
    name: "South Central & Southwest",
    description:
      "Dispatch support across major southern and southwestern freight markets for carriers running regional and long-haul lanes.",
    states: [
      "Arizona",
      "Arkansas",
      "Louisiana",
      "New Mexico",
      "Oklahoma",
      "Texas",
    ],
  },
  {
    name: "Mountain West",
    description:
      "Support for carriers operating across western freight markets with regional and OTR connections throughout the United States.",
    states: [
      "Colorado",
      "Idaho",
      "Montana",
      "Nevada",
      "Utah",
      "Wyoming",
    ],
  },
  {
    name: "Pacific",
    description:
      "Dispatch support for carriers operating throughout major West Coast freight markets and connecting with nationwide lanes.",
    states: [
      "California",
      "Oregon",
      "Washington",
    ],
  },
];

const equipment = [
  {
    name: "Dry Van",
    href: "/dry-van-dispatch",
  },
  {
    name: "Reefer",
    href: "/reefer-dispatch",
  },
  {
    name: "Flatbed",
    href: "/flatbed-dispatch",
  },
  {
    name: "Step Deck",
    href: "/step-deck-dispatch",
  },
  {
    name: "Power Only",
    href: "/power-only-dispatch",
  },
  {
    name: "Box Truck",
    href: "/box-truck-dispatch",
  },
  {
    name: "Hotshot",
    href: "/hotshot-dispatch",
  },
  {
    name: "Gooseneck Hotshot",
    href: "/gooseneck-hotshot-dispatch",
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
      name: "Services",
      item: "https://www.logistmovers.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Service Areas",
      item: "https://www.logistmovers.com/services/service-areas",
    },
  ],
};

export default function ServiceAreasPage() {
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

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <Link href="/" className="transition hover:text-cyan-400">
              Home
            </Link>

            <Link href="/about" className="transition hover:text-cyan-400">
              About
            </Link>

            <Link href="/services" className="text-cyan-400">
              Services
            </Link>

            <Link
              href="/#equipment"
              className="transition hover:text-cyan-400"
            >
              Equipment
            </Link>

            <Link
              href="/#contact"
              className="rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/services"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 md:hidden"
          >
            Services
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-10 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 transition hover:text-cyan-300"
            >
              ← Back to Services
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">
              Nationwide Coverage
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Truck Dispatch
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Service Areas.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Logist Movers provides professional truck dispatch support for
              owner-operators and fleets operating across the United States,
              with a strong focus on key freight regions throughout the
              Midwest, Southeast, and eastern markets.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
              >
                Talk to a Dispatcher
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-bold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Nationwide Dispatch Support
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Dispatch support wherever your operation takes you.
            </h2>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-8">
            <p className="leading-8 text-slate-300">
              Trucking does not stop at state lines. Our dispatch support is
              built around your equipment, preferred lanes, current location,
              operating authority, and business goals. Whether you prefer
              regional freight or OTR movement, our team works to help keep
              your truck moving.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="border-y border-white/10 bg-[#081522]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Key Freight Regions
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Coverage across important carrier markets.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              We support carriers nationwide while maintaining a strong focus
              on important freight regions across the United States.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {regions.map((region) => (
              <article
                key={region.name}
                className={`rounded-[28px] border border-white/10 bg-[#06101d] p-7 transition hover:border-blue-400/30 ${
  region.name === "Pacific" ? "lg:col-start-2" : ""
}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black">{region.name}</h3>

                  <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300">
                    Service Area
                  </span>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {region.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {region.states.map((state) => (
                    <span
                      key={state}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Midwest */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-blue-400/20 bg-gradient-to-br from-blue-600/15 via-[#081522] to-[#06101d] p-8 sm:p-10 lg:p-14">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Midwest Freight Support
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Built around your preferred freight lanes.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The Midwest connects carriers with a wide range of regional and
              OTR freight markets. Our dispatch team helps drivers evaluate
              available load options, negotiate rates, communicate with
              brokers, and plan the next move based on their preferred lanes
              and operating strategy.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Illinois",
                "Indiana",
                "Ohio",
                "Michigan",
                "Wisconsin",
                "Missouri",
                "Iowa",
                "Minnesota",
              ].map((state) => (
                <div
                  key={state}
                  className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4 font-bold text-slate-200"
                >
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            Equipment Dispatch
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
            Dispatch support for the equipment you run.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Explore our dedicated dispatch services based on your truck and
            trailer type.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((truck) => (
            <Link
              key={truck.name}
              href={truck.href}
              className="group rounded-[22px] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <h3 className="text-lg font-black">{truck.name}</h3>

              <span className="mt-4 block text-sm font-bold text-cyan-400">
                View Dispatch Service{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Help */}
      <section className="border-y border-white/10 bg-[#081522]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              How We Help
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              More than simply searching for a load.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Load Search",
                text: "We search for freight opportunities based on your truck, location, preferences, and availability.",
              },
              {
                title: "Rate Negotiation",
                text: "We communicate with brokers and negotiate rates before presenting available load options to you.",
              },
              {
                title: "Broker Communication",
                text: "We help manage broker communication and dispatch coordination throughout the process.",
              },
              {
                title: "Route Planning",
                text: "We consider your preferred operating areas and next move rather than focusing only on a single load.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-white/10 bg-[#06101d] p-7"
              >
                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
            Truck dispatch service areas.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              question:
                "Do you provide truck dispatch services nationwide?",
              answer:
                "Yes. Logist Movers works with owner-operators and fleets operating across the United States, depending on equipment type, authority, operating preferences, and individual carrier requirements.",
            },
            {
              question: "Do you offer truck dispatch services near me?",
              answer:
                "Our dispatch operation works remotely with carriers across the USA. Contact our team to discuss your current location, equipment type, preferred lanes, and operating goals.",
            },
            {
              question: "Which Midwest states do you support?",
              answer:
                "Our coverage includes carriers operating in Illinois, Indiana, Ohio, Michigan, Wisconsin, Missouri, Iowa, Minnesota, and other U.S. markets.",
            },
            {
              question:
                "Do you provide dispatch services in Georgia and the Carolinas?",
              answer:
                "Yes. We work with carriers operating in Georgia, North Carolina, South Carolina, Alabama, Tennessee, and other Southeast markets.",
            },
            {
              question:
                "Can you help with both regional and OTR dispatch?",
              answer:
                "Yes. Dispatch strategy can be based around regional or OTR preferences depending on your equipment, current location, available freight, and operating goals.",
            },
          ].map((faq) => (
            <article
              key={faq.question}
              className="rounded-[24px] border border-white/10 bg-[#081522] p-7"
            >
              <h3 className="text-lg font-black">{faq.question}</h3>

              <p className="mt-3 leading-7 text-slate-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[34px] border border-blue-400/20 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-9 text-center sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
              Ready to Get Started?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Tell us where you want to run.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Share your truck type, current location, preferred lanes, and
              operating goals with the Logist Movers dispatch team.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              Get Dispatch Support
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040b14]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" aria-label="Logist Movers Home">
              <Image
                src="/logist-movers-logo.png"
                alt="Logist Movers"
                width={230}
                height={70}
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-300">
              <Link href="/" className="transition hover:text-cyan-400">
                Home
              </Link>

              <Link
                href="/about"
                className="transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="transition hover:text-cyan-400"
              >
                Services
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-cyan-400"
              >
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