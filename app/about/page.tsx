import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Logist Movers | Professional Truck Dispatch Services",
  description:
    "Learn about Logist Movers, a professional truck dispatch company helping owner-operators and fleets with load searching, rate negotiation, broker communication, carrier setup, and dispatch support across the United States.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Logist Movers | Professional Truck Dispatch Services",
    description:
      "Learn more about Logist Movers and our professional dispatch support for owner-operators and fleets across the United States.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logist Movers Professional Truck Dispatch Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Logist Movers | Professional Truck Dispatch Services",
    description:
      "Professional truck dispatch support for owner-operators and fleets across the United States.",
    images: ["/og-image.jpg"],
  },
};

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
      name: "About Logist Movers",
      item: "https://www.logistmovers.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* NAVBAR */}
      <header className="border-b border-white/10 bg-[#06111f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logist-movers-logo.png"
              alt="Logist Movers"
              width={230}
              height={70}
              className="h-[58px] w-auto object-contain"
              priority
            />
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-blue-400/40 px-5 py-3 text-sm font-bold text-blue-300 transition hover:bg-blue-400/10"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/5" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center lg:px-10 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            About Logist Movers
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Dispatch Support Built Around
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Carriers & Their Goals
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Logist Movers provides professional truck dispatch support for
            owner-operators and fleets across the United States. Our goal is to
            help carriers spend less time searching for freight and handling
            broker communication, and more time focused on operating their
            trucks.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
            >
              Get Started
            </Link>

            <a
              href="tel:+12817163420"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white/5"
            >
              Call (281) 716-3420
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            More Than Just
            <span className="text-blue-400"> Finding Loads</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Truck dispatch is not only about finding available freight. The
            right load also needs to make sense for your equipment, preferred
            lanes, schedule, operating costs, and business goals.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            That is why Logist Movers focuses on communication, rate
            negotiation, broker coordination, paperwork support, and lane
            strategy as part of the dispatch process.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Whether you operate one truck or manage a growing fleet, our
            approach is built around understanding how you want to operate and
            supporting you accordingly.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              number: "1000+",
              label: "Loads Booked",
            },
            {
              number: "98%",
              label: "Carrier Satisfaction",
            },
            {
              number: "24/7",
              label: "Dispatch Support",
            },
            {
              number: "10+",
              label: "Years Experience",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#091625] p-6 text-center"
            >
              <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent">
                {stat.number}
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Support Throughout the
              <span className="text-blue-400"> Dispatch Process</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our services are designed to reduce the everyday dispatch workload
              for carriers while keeping you in control of your operation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Load Searching",
                text: "We search freight opportunities based on equipment, preferred lanes, truck availability, and operating goals.",
              },
              {
                title: "Rate Negotiation",
                text: "We communicate with brokers and negotiate rates while considering mileage, lanes, and operating requirements.",
              },
              {
                title: "Broker Communication",
                text: "Our team helps manage communication with brokers throughout the booking and dispatch process.",
              },
              {
                title: "Carrier Setup",
                text: "We assist with broker setup packets and commonly required carrier documents.",
              },
              {
                title: "Route & Lane Planning",
                text: "We help evaluate local, regional, and OTR opportunities based on how you prefer to operate.",
              },
              {
                title: "Paperwork Support",
                text: "We help organize rate confirmations, load information, appointments, and common dispatch paperwork.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#06111f] p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-black text-cyan-300">
                  ✓
                </div>

                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Our Approach
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Carrier-Focused Dispatch Support
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Understand Your Operation",
              text: "We learn about your equipment, preferred lanes, schedule, home-time goals, and operating preferences.",
            },
            {
              number: "02",
              title: "Search & Communicate",
              text: "We search suitable freight opportunities and communicate with brokers regarding rates and load details.",
            },
            {
              number: "03",
              title: "You Stay in Control",
              text: "We provide the available information, but the final decision to accept or decline a load remains with you.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-white/10 bg-[#091625] p-8"
            >
              <span className="text-4xl font-black text-blue-400">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-black">{item.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT LINKS */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Equipment We Dispatch
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Dispatch Services for Different Operations
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dry Van Dispatch",
                href: "/dry-van-dispatch",
              },
              {
                name: "Reefer Dispatch",
                href: "/reefer-dispatch",
              },
              {
                name: "Flatbed Dispatch",
                href: "/flatbed-dispatch",
              },
              {
                name: "Step Deck Dispatch",
                href: "/step-deck-dispatch",
              },
              {
                name: "Power Only Dispatch",
                href: "/power-only-dispatch",
              },
              {
                name: "Box Truck Dispatch",
                href: "/box-truck-dispatch",
              },
              {
                name: "Hotshot Dispatch",
                href: "/hotshot-dispatch",
              },
              {
                name: "Gooseneck Hotshot Dispatch",
                href: "/gooseneck-hotshot-dispatch",
              },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="rounded-2xl border border-white/10 bg-[#06111f] p-5 text-center font-bold text-slate-200 transition hover:-translate-y-1 hover:border-blue-400/40 hover:text-cyan-300"
              >
                {service.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Why Logist Movers
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Built Around
              <span className="text-blue-400"> Carrier Choice</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Every carrier has different priorities. Some prefer local freight,
              others regional routes, while others focus on OTR opportunities.
              Our role is to support your operation instead of forcing you into
              a fixed dispatch strategy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No Forced Dispatch",
              "Carrier-Focused Service",
              "Rate Negotiation",
              "Broker Support",
              "Local Opportunities",
              "Regional Routes",
              "OTR Freight",
              "Responsive Communication",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#091625] p-5"
              >
                <span className="font-black text-cyan-300">✓</span>
                <span className="font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center">
          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 px-6 py-14 sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Work With Logist Movers
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Ready to Talk About Your Operation?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us what truck you are running, your preferred lanes, and what
              you need from your dispatcher.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+12817163420"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-black text-[#06111f]"
              >
                Call Now
              </a>

              <Link
                href="/#contact"
                className="rounded-xl border border-white/20 px-8 py-4 font-bold hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#040b13]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row lg:px-10">
          <p>© 2026 Logist Movers. All rights reserved.</p>

          <Link href="/" className="text-slate-400 hover:text-white">
            www.logistmovers.com
          </Link>
        </div>
      </footer>
    </main>
  );
}