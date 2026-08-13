import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dry Van Dispatch Services | Logist Movers",
  description:
    "Professional dry van dispatch services for owner-operators and fleets across the USA. Load booking, rate negotiation, broker communication, and dispatch support.",
  alternates: {
    canonical: "/dry-van-dispatch",
  },
  openGraph: {
    type: "website",
    url: "/dry-van-dispatch",
    title: "Dry Van Dispatch Services | Logist Movers",
    description:
      "Professional dry van dispatch support for owner-operators and fleets across the United States.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logist Movers Dry Van Dispatch Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dry Van Dispatch Services | Logist Movers",
    description:
      "Professional dry van dispatch support for owner-operators and fleets across the United States.",
    images: ["/og-image.jpg"],
  },
};

export default function DryVanDispatchPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Professional Truck Dispatch
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Dry Van Dispatch
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Keep your dry van moving with professional dispatch support.
              Logist Movers helps owner-operators and fleets with load
              searching, rate negotiation, broker communication, paperwork,
              and route planning across the United States.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+12817163420"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 font-black text-[#06111f] transition hover:scale-[1.02]"
              >
                Call (281) 716-3420
              </a>

              <a
                href="mailto:logistmovers@gmail.com"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/5"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#091625] shadow-2xl">
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src="/equipment/dry-van.webp"
                alt="Dry van truck dispatch services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06111f]/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Dry Van Dispatch Support
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            We Handle the Dispatch Work,
            <span className="text-blue-400"> You Focus on Driving</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Our dispatch team works to help keep your truck productive while
            reducing the time you spend searching for loads and communicating
            with brokers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Load Searching",
              text: "We search available freight opportunities based on your preferred lanes, equipment, and schedule.",
            },
            {
              title: "Rate Negotiation",
              text: "We communicate with brokers and negotiate rates with your operating costs and route preferences in mind.",
            },
            {
              title: "Broker Communication",
              text: "Our team helps manage broker communication so you can stay focused on the road.",
            },
            {
              title: "Carrier Setup",
              text: "We assist with broker setup packets and the documents commonly required before booking loads.",
            },
            {
              title: "Route Planning",
              text: "We help evaluate local, regional, and OTR opportunities to support efficient truck movement.",
            },
            {
              title: "Dispatch Support",
              text: "Get responsive dispatch assistance for load details, appointments, paperwork, and communication.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-[#091625] p-7 transition hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl font-black text-cyan-300">
                ✓
              </div>

              <h3 className="text-xl font-black">{service.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DRY VAN */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Built for Dry Van Carriers
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Dispatch Support Based on
              <span className="text-blue-400"> Your Operation</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Every carrier operates differently. Your preferred lanes, weekly
              goals, home-time requirements, truck availability, and operating
              costs all matter when evaluating freight opportunities.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              That is why our team focuses on communication and lane strategy
              instead of simply sending random loads.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Local Loads",
              "Regional Routes",
              "OTR Freight",
              "Rate Negotiation",
              "Broker Setup",
              "Paperwork Support",
              "Load Coordination",
              "Carrier Communication",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#06111f] p-5"
              >
                <span className="text-lg font-black text-cyan-300">✓</span>
                <span className="font-bold text-slate-200">{item}</span>
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
            How Our Dry Van Dispatch Works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell Us Your Preferences",
              text: "Share your preferred lanes, truck availability, equipment details, and operating goals.",
            },
            {
              number: "02",
              title: "We Search & Negotiate",
              text: "Our team searches for suitable opportunities and communicates with brokers on your behalf.",
            },
            {
              number: "03",
              title: "You Approve the Load",
              text: "You remain in control. We provide the load details and you decide whether you want to take it.",
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
{/* FAQ */}
<section className="border-t border-white/10 bg-[#091625]">
  <div className="mx-auto max-w-5xl px-5 py-20 lg:px-10">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
        Frequently Asked Questions
      </p>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl">
        Dry Van Dispatch FAQs
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
        Common questions owner-operators and carriers ask about our dry van
        dispatch services.
      </p>
    </div>

    <div className="mt-12 space-y-4">
      {[
        {
          question: "What does a dry van dispatcher do?",
          answer:
            "A dry van dispatcher helps carriers search for freight, communicate with brokers, negotiate rates, coordinate load details, assist with paperwork, and plan routes based on the carrier's preferences.",
        },
        {
          question: "Do I have to accept every load you find?",
          answer:
            "No. You remain in control of your truck. We provide the load details and rate information, and you decide whether the load works for your operation.",
        },
        {
          question: "Can you find local, regional, and OTR dry van loads?",
          answer:
            "Yes. We can search for local, regional, and OTR opportunities based on your preferred lanes, schedule, home-time goals, and truck availability.",
        },
        {
          question: "Do you negotiate rates with brokers?",
          answer:
            "Yes. Our dispatch team communicates with brokers and negotiates rates while considering factors such as mileage, lane, operating costs, and your preferences.",
        },
        {
          question: "Do you help with broker setup and paperwork?",
          answer:
            "Yes. We can assist with broker setup packets, rate confirmations, load information, and other common dispatch paperwork.",
        },
        {
          question: "Can owner-operators use Logist Movers?",
          answer:
            "Yes. Logist Movers provides dispatch support for owner-operators as well as small and growing fleets across the United States.",
        },
      ].map((faq) => (
        <div
          key={faq.question}
          className="rounded-2xl border border-white/10 bg-[#06111f] p-6 sm:p-7"
        >
          <h3 className="text-lg font-black text-white">
            {faq.question}
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {faq.answer}
          </p>
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
              Ready to Keep Your Dry Van Moving?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Talk with Logist Movers about your truck, preferred lanes, and
              dispatch needs.
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