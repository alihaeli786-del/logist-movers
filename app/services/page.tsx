import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truck Dispatch Services | Logist Movers",
  description:
    "Explore professional truck dispatch services from Logist Movers for Dry Van, Reefer, Flatbed, Step Deck, Power Only, Box Truck, Hotshot, and Gooseneck Hotshot carriers across the United States.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Truck Dispatch Services | Logist Movers",
    description:
      "Professional truck dispatch services for owner-operators and fleets across the United States.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logist Movers Truck Dispatch Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Dispatch Services | Logist Movers",
    description:
      "Professional truck dispatch services for owner-operators and fleets across the United States.",
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
      name: "Truck Dispatch Services",
      item: "https://www.logistmovers.com/services",
    },
  ],
};

const dispatchServices = [
  {
    name: "Dry Van Dispatch",
    description:
      "Professional dispatch support for general freight, nationwide lanes, broker communication, and rate negotiation.",
    image: "/equipment/dry-van.webp",
    href: "/dry-van-dispatch",
  },
  {
    name: "Reefer Dispatch",
    description:
      "Dispatch support for temperature-controlled freight, appointments, broker communication, and lane planning.",
    image: "/equipment/reefer.webp",
    href: "/reefer-dispatch",
  },
  {
    name: "Flatbed Dispatch",
    description:
      "Open-deck freight support with load searching, rate negotiation, route planning, and broker coordination.",
    image: "/equipment/flatbed.webp",
    href: "/flatbed-dispatch",
  },
  {
    name: "Step Deck Dispatch",
    description:
      "Specialized dispatch support for step deck carriers based on trailer specifications, lanes, and operating goals.",
    image: "/equipment/step-deck.webp",
    href: "/step-deck-dispatch",
  },
  {
    name: "Power Only Dispatch",
    description:
      "Power only opportunities for carriers operating tractor units, including trailer and freight coordination.",
    image: "/equipment/power-only.webp",
    href: "/power-only-dispatch",
  },
  {
    name: "Box Truck Dispatch",
    description:
      "Flexible dispatch support for box truck carriers across local, regional, and OTR freight opportunities.",
    image: "/equipment/box-truck.webp",
    href: "/box-truck-dispatch",
  },
  {
    name: "Hotshot Dispatch",
    description:
      "Carrier-focused hotshot dispatch with load searching, broker communication, lane strategy, and rate negotiation.",
    image: "/equipment/hotshot.webp",
    href: "/hotshot-dispatch",
  },
  {
    name: "Gooseneck Hotshot Dispatch",
    description:
      "Dispatch support designed around gooseneck trailer specifications, freight opportunities, and preferred lanes.",
    image: "/equipment/gooseneck-hotshot.webp",
    href: "/gooseneck-hotshot-dispatch",
  },
];

export default function ServicesPage() {
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
            Professional Truck Dispatch
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Dispatch Services Built for
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Different Trucking Operations
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Logist Movers provides professional dispatch support for
            owner-operators and fleets. From load searching and rate negotiation
            to broker communication and paperwork, our services are designed
            around your equipment, preferred lanes, and operating goals.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
            >
              Get Dispatch Support
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

      {/* EQUIPMENT SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Equipment We Dispatch
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Choose Your Truck Type
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Different equipment requires different freight strategies. Select
            your truck type to learn more about the dispatch support available
            for your operation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dispatchServices.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#091625] transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="relative h-[210px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/70 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#06111f]/90 text-xs font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black">{service.name}</h3>

                <p className="mt-3 min-h-[96px] leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-5 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

                <span className="mt-5 inline-block text-sm font-bold text-blue-400 transition group-hover:translate-x-1">
                  View Dispatch Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              What We Handle
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              More Than Just Finding Loads
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Our dispatch support covers the day-to-day tasks that take time
              away from operating your truck.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Load Searching",
                text: "We search freight opportunities based on your equipment, preferred lanes, truck availability, and operating goals.",
              },
              {
                title: "Rate Negotiation",
                text: "We communicate with brokers and negotiate rates while considering mileage, lanes, equipment, and operating requirements.",
              },
              {
                title: "Broker Communication",
                text: "Our team helps manage broker communication throughout the booking and dispatch process.",
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
                text: "We help organize rate confirmations, appointment details, load information, and common dispatch paperwork.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#06111f] p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-black text-cyan-300">
                  ✓
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Simple Process
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            How Our Dispatch Service Works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell Us About Your Truck",
              text: "Share your equipment type, preferred lanes, availability, schedule, and operating goals.",
            },
            {
              number: "02",
              title: "We Search & Negotiate",
              text: "Our team searches suitable opportunities and communicates with brokers regarding rates and load details.",
            },
            {
              number: "03",
              title: "You Approve the Load",
              text: "You remain in control. We provide the available information and you decide whether the load works for your operation.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-[#091625] p-8"
            >
              <span className="text-4xl font-black text-blue-400">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-black">{step.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Carrier-Focused Service
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Your Truck.
              <span className="text-blue-400"> Your Decision.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              We understand that every carrier operates differently. Your truck
              type, preferred lanes, home-time goals, availability, and
              operating costs all matter.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              That is why our dispatch approach focuses on carrier preferences
              instead of forcing every truck into the same strategy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No Forced Dispatch",
              "Rate Negotiation",
              "Broker Support",
              "Carrier Setup",
              "Local Loads",
              "Regional Routes",
              "OTR Opportunities",
              "Responsive Communication",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#06111f] p-5"
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
              Start Dispatching With Us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Ready to Keep Your Truck Moving?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us what equipment you operate, your preferred lanes, and
              what you need from your dispatcher.
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
                className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white/5"
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