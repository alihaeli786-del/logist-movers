import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Power Only Dispatch Services | Logist Movers",
  description:
    "Professional power only dispatch services for owner-operators and fleets across the USA. Load searching, rate negotiation, broker communication, trailer opportunities, and dispatch support.",
  alternates: {
    canonical: "/power-only-dispatch",
  },
  openGraph: {
    type: "website",
    url: "/power-only-dispatch",
    title: "Power Only Dispatch Services | Logist Movers",
    description:
      "Professional power only dispatch support for owner-operators and fleets across the United States.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logist Movers Power Only Dispatch Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Only Dispatch Services | Logist Movers",
    description:
      "Professional power only dispatch support for owner-operators and fleets across the United States.",
    images: ["/og-image.jpg"],
  },
};

export default function PowerOnlyDispatchPage() {
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
              Power Only Dispatch
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Keep your tractor moving with professional power only dispatch
              support. Logist Movers helps power only carriers search for
              suitable trailer and freight opportunities, negotiate rates,
              communicate with brokers, and coordinate dispatch across the
              United States.
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
                src="/equipment/power-only.webp"
                alt="Power only truck dispatch services"
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
            Power Only Dispatch Support
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            We Handle the Dispatch Work,
            <span className="text-blue-400"> You Focus on Driving</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Power only operations can involve different trailer types,
            drop-and-hook opportunities, dedicated routes, and varying lane
            requirements. Our dispatch team helps you evaluate suitable options
            and manage broker communication.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Load Searching",
              text: "We search power only opportunities based on your preferred lanes, tractor availability, schedule, and operating goals.",
            },
            {
              title: "Rate Negotiation",
              text: "We communicate with brokers and negotiate rates while considering route distance and operating costs.",
            },
            {
              title: "Trailer Opportunities",
              text: "We help evaluate power only opportunities involving available trailers and suitable freight movements.",
            },
            {
              title: "Broker Communication",
              text: "Our team helps manage broker communication throughout the booking and dispatch process.",
            },
            {
              title: "Carrier Setup",
              text: "We assist with broker setup packets and commonly required carrier documents before booking loads.",
            },
            {
              title: "Dispatch Support",
              text: "Get responsive help with load details, appointments, paperwork, and communication.",
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

      {/* OPERATIONS */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Built for Power Only Carriers
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Dispatch Support Based on
              <span className="text-blue-400"> Your Operation</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Power only carriers can operate across local, regional, and OTR
              lanes while working with different trailer and freight
              opportunities. Your availability, route preferences, schedule,
              and operating costs all matter when evaluating loads.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Our team focuses on finding suitable opportunities and maintaining
              clear communication instead of simply sending random loads.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Local Loads",
              "Regional Routes",
              "OTR Freight",
              "Rate Negotiation",
              "Trailer Opportunities",
              "Broker Setup",
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
            How Our Power Only Dispatch Works
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell Us Your Preferences",
              text: "Share your preferred lanes, tractor availability, schedule, and operating goals.",
            },
            {
              number: "02",
              title: "We Search & Negotiate",
              text: "Our team searches suitable power only opportunities and communicates with brokers on your behalf.",
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
        Power Only Dispatch FAQs
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
        Common questions carriers ask about our power only dispatch services.
      </p>
    </div>

    <div className="mt-12 space-y-4">
      {[
        {
          question: "What does a power only dispatcher do?",
          answer:
            "A power only dispatcher helps carriers search for suitable trailer and freight opportunities, communicate with brokers, negotiate rates, coordinate load details, and assist with dispatch paperwork.",
        },
        {
          question: "Do I need to own a trailer for power only dispatch?",
          answer:
            "Not necessarily. Power only operations can involve pulling trailers provided by shippers, brokers, or other parties depending on the specific load opportunity.",
        },
        {
          question: "Can you find local, regional, and OTR power only loads?",
          answer:
            "Yes. We can search local, regional, and OTR power only opportunities based on your preferred lanes, tractor availability, schedule, and operating goals.",
        },
        {
          question: "Do I have to accept every load you find?",
          answer:
            "No. You remain in control of your tractor. We provide the load details and rate information, and you decide whether the opportunity works for your operation.",
        },
        {
          question: "Do you negotiate power only rates with brokers?",
          answer:
            "Yes. Our dispatch team communicates with brokers and negotiates rates while considering mileage, lane, operating costs, and your preferences.",
        },
        {
          question: "Do you help with broker setup and paperwork?",
          answer:
            "Yes. We can assist with broker setup packets, rate confirmations, load information, and other common dispatch paperwork.",
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
              Ready to Keep Your Tractor Moving?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Talk with Logist Movers about your tractor, preferred lanes, and
              power only dispatch needs.
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