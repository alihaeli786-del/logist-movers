"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

const equipment = [
  {
    name: "Dry Van",
    description: "General freight and nationwide dry van dispatch support.",
    image: "/equipment/dry-van.webp",
    href: "/dry-van-dispatch",
  },
  {
    name: "Reefer",
    description:
      "Temperature-controlled freight with lane-focused dispatch support.",
    image: "/equipment/reefer.webp",
    href: "/reefer-dispatch",
  },
  {
    name: "Flatbed",
    description:
      "Open-deck freight support with professional rate negotiation.",
    image: "/equipment/flatbed.webp",
    href: "/flatbed-dispatch",
  },
  {
    name: "Step Deck",
    description:
      "Specialized dispatch support for step deck freight operations.",
    image: "/equipment/step-deck.webp",
    href: "/step-deck-dispatch",
  },
  {
    name: "Power Only",
    description:
      "Power-only opportunities for carriers operating tractor units.",
    image: "/equipment/power-only.webp",
    href: "/power-only-dispatch",
  },
  {
    name: "Box Truck",
    description:
      "Load sourcing and professional dispatch support for box trucks.",
    image: "/equipment/box-truck.webp",
    href: "/box-truck-dispatch",
  },
  {
    name: "Hotshot",
    description:
      "Flexible dispatch support for regional and OTR hotshot operations.",
    image: "/equipment/hotshot.webp",
    href: "/hotshot-dispatch",
  },
  {
    name: "Gooseneck Hotshot",
    description:
      "Dispatch support for gooseneck and heavier hotshot configurations.",
    image: "/equipment/gooseneck-hotshot.webp",
    href: "/gooseneck-hotshot-dispatch",
  },
];

const services = [
  {
    title: "Load Booking",
    text: "We search for freight that fits your equipment, location, preferred lanes, and availability.",
  },
  {
    title: "Rate Negotiation",
    text: "We communicate with brokers and negotiate before presenting a load for your approval.",
  },
  {
    title: "Broker Communication",
    text: "Our team helps manage day-to-day communication with brokers throughout the dispatch process.",
  },
  {
    title: "Carrier Setup",
    text: "We assist with broker packets, confirmations, setup requirements, and dispatch paperwork.",
  },
  {
    title: "Route Planning",
    text: "We coordinate opportunities around your preferred routes and operating schedule.",
  },
  {
    title: "Dispatch Support",
    text: "Professional assistance throughout the load cycle so you can stay focused on the road.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us About Your Truck",
    text: "Share your equipment type, current location, authority information, and preferred lanes.",
  },
  {
    number: "02",
    title: "Set Your Preferences",
    text: "We understand where you want to run, what freight you prefer, and how you operate.",
  },
  {
    number: "03",
    title: "Review Load Options",
    text: "Your dispatcher searches and negotiates, then presents opportunities for your approval.",
  },
  {
    number: "04",
    title: "Keep Moving",
    text: "We continue handling dispatch coordination while you focus on hauling freight.",
  },
];

const testimonials = [
  {
    name: "Justin",
    location: "Phoenix, Arizona",
    equipment: "Carrier",
    initial: "J",
    review:
      "Logist Movers has been professional and responsive. The communication is clear, they understand my preferred lanes, and the dispatch process feels organized.",
  },
  {
    name: "Gary",
    location: "Dallas, Texas",
    equipment: "Dry Van",
    initial: "G",
    review:
      "The team is easy to communicate with and understands how I like to run. They keep the dispatch process organized and make broker communication much easier.",
  },
  {
    name: "Grace",
    location: "Ohio",
    equipment: "Box Truck",
    initial: "G",
    review:
      "I appreciate how responsive the Logist Movers team is. They listen to my preferences, help coordinate loads, and keep communication straightforward throughout the process.",
  },
  {
    name: "George",
    location: "Illinois",
    equipment: "Power Only",
    initial: "G",
    review:
      "Professional service and good communication. The team understands my Power Only operation and helps keep the dispatch side organized so I can focus on the road.",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [loadsCount, setLoadsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    let loads = 0;
    let satisfaction = 0;
    let years = 0;

    const loadsTimer = setInterval(() => {
      loads += 10;

      if (loads >= 1000) {
        loads = 1000;
        clearInterval(loadsTimer);
      }

      setLoadsCount(loads);
    }, 25);

    const satisfactionTimer = setInterval(() => {
      satisfaction += 2;

      if (satisfaction >= 98) {
        satisfaction = 98;
        clearInterval(satisfactionTimer);
      }

      setSatisfactionCount(satisfaction);
    }, 30);

    const yearsTimer = setInterval(() => {
      years += 1;

      if (years >= 10) {
        years = 10;
        clearInterval(yearsTimer);
      }

      setYearsCount(years);
    }, 150);

    return () => {
      clearInterval(loadsTimer);
      clearInterval(satisfactionTimer);
      clearInterval(yearsTimer);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 700);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      mc_number: formData.get("mc_number"),
      equipment: formData.get("equipment"),
      message: formData.get("message"),
      _subject: "New Carrier Lead - Logist Movers Website",
      _template: "table",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/logistmovers@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormStatus("success");
      form.reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 6000);
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #06101d;
        }

        @keyframes heroContent {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroPanel {
          from {
            opacity: 0;
            transform: translateX(40px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes heroBackground {
          0% {
            transform: scale(1.06) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.1) translate3d(-1%, -0.5%, 0);
          }
          100% {
            transform: scale(1.06) translate3d(0, 0, 0);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 25px rgba(37, 99, 235, .12),
              0 20px 70px rgba(0, 0, 0, .25);
          }
          50% {
            box-shadow:
              0 0 50px rgba(34, 211, 238, .19),
              0 25px 80px rgba(0, 0, 0, .3);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .45;
            transform: scale(.7);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hero-content {
          animation: heroContent .9s ease-out both;
        }

        .hero-panel {
          animation: heroPanel 1s .15s ease-out both;
        }

        .hero-bg {
          animation: heroBackground 18s ease-in-out infinite;
          will-change: transform;
        }

        .premium-glow {
          animation: glowPulse 5s ease-in-out infinite;
        }

        .status-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }

        .animated-gradient {
          background-size: 200% 200%;
          animation: gradientMove 7s ease infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(38px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.22, 1, .36, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .premium-card {
          position: relative;
        }

        .premium-card::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0;
          border-radius: inherit;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(59,130,246,.15),
              transparent 55%
            );
          transition: opacity .4s ease;
        }

        .premium-card:hover::before {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hero-content,
          .hero-panel,
          .hero-bg,
          .premium-glow,
          .status-dot,
          .animated-gradient {
            animation: none !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <main className="min-h-screen overflow-x-hidden bg-[#06101d] text-white">

        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#06101d]/85 shadow-lg shadow-black/10 backdrop-blur-2xl">
          <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-10">
            <a
  href="#home"
  className="group flex h-[78px] w-[230px] shrink-0 items-center"
>
  <Image
  src="/logist-movers-logo.png"
  alt="Logist Movers"
  width={230}
  height={70}
  className="h-[60px] w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
/>
</a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>
              <a href="/about" className="transition hover:text-cyan-400">
  About
</a>
              <div className="group relative">
  <button
    type="button"
    className="inline-flex items-center gap-1 transition hover:text-cyan-400"
  >
    Services
    <span className="text-xs transition duration-200 group-hover:rotate-180">
      ▾
    </span>
  </button>

  <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
    <div className="rounded-2xl border border-white/10 bg-[#071321] p-2 shadow-2xl shadow-black/30">
      <a
        href="/services"
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06] hover:text-cyan-300"
      >
        Services
        <span>→</span>
      </a>

      <a
        href="/services/service-areas"
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06] hover:text-cyan-300"
      >
        Service Areas
        <span>→</span>
      </a>
    </div>
  </div>
</div>
<a
  href="/resources"
  className="transition hover:text-cyan-400"
>
  Resources
</a>
              <a href="#equipment" className="transition hover:text-cyan-400">
                Equipment
              </a>
              <a href="#process" className="transition hover:text-cyan-400">
                How It Works
              </a>
              <a href="#testimonials" className="transition hover:text-cyan-400">
                Testimonials
              </a>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+12817163420"
                className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:block"
              >
                Call Now
              </a>

              <button
                type="button"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-xl lg:hidden"
              >
                {mobileMenu ? "×" : "☰"}
              </button>
            </div>
          </div>

          {mobileMenu && (
            <div className="border-t border-white/[0.07] bg-[#081523] px-5 py-5 lg:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col gap-2">
                <a
  href="#home"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  Home
</a>

<a
  href="/about"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  About
</a>

<div>
  <button
    type="button"
    onClick={() => setMobileServicesOpen((open) => !open)}
    className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
  >
    <span>Services</span>

    <span
      className={`text-xl transition duration-200 ${
        mobileServicesOpen ? "rotate-90" : ""
      }`}
    >
      →
    </span>
  </button>

  {mobileServicesOpen && (
    <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
      <a
        href="/services"
        onClick={() => setMobileMenu(false)}
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/[0.05] hover:text-cyan-300"
      >
        <span>Services</span>
        <span>→</span>
      </a>

      <a
        href="/services/service-areas"
        onClick={() => setMobileMenu(false)}
        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/[0.05] hover:text-cyan-300"
      >
        <span>Service Areas</span>
        <span>→</span>
      </a>
    </div>
  )}
  <a
  href="/resources"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  Resources
</a>
</div>

<a
  href="#equipment"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  Equipment
</a>

<a
  href="#process"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  How It Works
</a>

<a
  href="#testimonials"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  Testimonials
</a>

<a
  href="#contact"
  onClick={() => setMobileMenu(false)}
  className="rounded-xl px-4 py-3 font-semibold text-slate-300 hover:bg-white/[0.05]"
>
  Contact
</a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section
          id="home"
          className="relative isolate overflow-hidden px-5 py-20 lg:min-h-[760px] lg:px-10 lg:py-28"
        >
          <div className="hero-bg absolute inset-0 -z-30">
  <Image
    src="/hero-truck.avif"
    alt=""
    fill
    preload
    sizes="100vw"
    className="object-cover object-center"
  />
</div>

          <div className="absolute inset-0 -z-20 bg-[#06101d]/82" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06101d] via-[#06101d]/95 to-[#06101d]/55" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 backdrop-blur-xl">
                <span className="status-dot h-2 w-2 rounded-full bg-cyan-400" />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
                  Professional Truck Dispatch Services
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">
  Professional Truck
  <span className="block">Dispatch Services.</span>

  <span className="mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
    Keep Your Truck Moving.
  </span>
</h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Logist Movers provides professional dispatch support for
                owner-operators and fleets across the United States. From load
                sourcing and rate negotiation to broker communication and
                paperwork, we help keep your operation moving.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold shadow-xl shadow-blue-700/25 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Get Started
                </a>

                <a
                  href="tel:+12817163420"
                  className="rounded-xl border border-white/15 bg-white/[0.06] px-8 py-4 text-center font-bold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
                >
                  (281) 716-3420
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-300">
                <span>✓ No Forced Dispatch</span>
                <span>✓ Rate Negotiation</span>
                <span>✓ Broker Support</span>
                <span>✓ Carrier-Focused Service</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="premium-glow rounded-[30px] border border-white/10 bg-[#0a1727]/86 p-6 backdrop-blur-2xl sm:p-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-400">
                  Equipment We Dispatch
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Built For Different Operations
                </h2>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {equipment.map((truck) => (
  <a
    key={truck.name}
    href={truck.href}
    className="rounded-2xl border border-white/[0.08] bg-white/[0.045] px-3 py-4 text-center transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
  >
    {truck.name}
  </a>
))}
                </div>

                <div className="animated-gradient mt-7 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 p-6">
                  <p className="text-sm text-blue-100">Talk to a Dispatcher</p>

                  <a
                    href="tel:+12817163420"
                    className="mt-1 block text-2xl font-black"
                  >
                    (281) 716-3420
                  </a>

                  <p className="mt-2 text-sm text-blue-100">
                    logistmovers@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative border-y border-white/[0.07] bg-[#091625] px-5 py-12 lg:px-10">
          <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4">
            <div className="reveal bg-[#091625] px-5 py-9 text-center">
              <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                {loadsCount}+
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                Loads Booked
              </p>
            </div>

            <div className="reveal bg-[#091625] px-5 py-9 text-center">
              <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                {satisfactionCount}%
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                Carrier Satisfaction
              </p>
            </div>

            <div className="reveal bg-[#091625] px-5 py-9 text-center">
              <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                24/7
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                Dispatch Support
              </p>
            </div>

            <div className="reveal bg-[#091625] px-5 py-9 text-center">
              <p className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                {yearsCount}+
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                Years Experience
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section id="equipment" className="px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                Equipment
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Dispatch support for the trucks you run.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Different equipment requires different strategies. We adapt
                around your truck type, preferred lanes, and operating
                preferences.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {equipment.map((truck, index) => (
                <a
  href={"href" in truck ? truck.href : "#contact"}
                  key={truck.name}
                  className="premium-card reveal group overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0b1929] transition duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/40"
                >
                  <div className="relative h-[210px] overflow-hidden">
                    <Image
  src={truck.image}
  alt={`${truck.name} trucking`}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#081421] via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#06101d]/75 text-xs font-black text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="relative z-10 p-6">
                    <h3 className="text-2xl font-black">{truck.name}</h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                      {truck.description}
                    </p>

                    <div className="mt-5 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />

                    <span className="mt-5 inline-block text-sm font-bold text-blue-400 transition group-hover:translate-x-1">
  Get Dispatch Support →
</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-y border-white/[0.07] bg-[#091625] px-5 py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="reveal text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                More than just finding loads.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                We support the dispatch workflow so carriers can spend more
                time focused on driving, freight, and growing their operation.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="premium-card reveal rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 transition hover:-translate-y-3 hover:border-blue-500/35"
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 font-black text-blue-400">
                    0{index + 1}
                  </div>

                  <h3 className="relative z-10 mt-6 text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mt-4 leading-7 text-slate-400">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                Why Logist Movers
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Dispatch built around your operation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Every carrier operates differently. We work around your
                equipment, preferred lanes, schedule, availability, and
                operating priorities.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Speak With Our Team
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "No Forced Dispatch",
                "Dedicated Support",
                "Rate Negotiation",
                "Broker Communication",
                "Carrier Setup Assistance",
                "Multiple Equipment Types",
              ].map((item) => (
                <div
                  key={item}
                  className="premium-card reveal rounded-2xl border border-white/[0.08] bg-[#0b1929] p-6"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    ✓
                  </div>

                  <p className="relative z-10 mt-4 font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="border-y border-white/[0.07] bg-[#091625] px-5 py-24 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Getting started is simple.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="premium-card reveal rounded-3xl border border-white/[0.08] bg-[#0b1929] p-7"
                >
                  <span className="relative z-10 text-5xl font-black text-white/[0.06]">
                    {step.number}
                  </span>

                  <h3 className="relative z-10 mt-5 text-xl font-black">
                    {step.title}
                  </h3>

                  <p className="relative z-10 mt-4 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="reveal text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                Carrier Experience
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                What our carriers say.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Real carrier relationships built on communication,
                responsiveness, and professional dispatch support.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name + testimonial.location}
                  className="premium-card reveal group rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#0d1d30] to-[#091522] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-500/35 hover:shadow-2xl hover:shadow-blue-950/30"
                >
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="text-lg tracking-[0.18em] text-amber-400">
                      ★★★★★
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-300">
                      {testimonial.equipment}
                    </span>
                  </div>

                  <div className="relative z-10 mt-5 text-5xl font-black text-blue-500/25">
                    “
                  </div>

                  <p className="relative z-10 -mt-3 min-h-[150px] text-lg leading-8 text-slate-300">
                    {testimonial.review}
                  </p>

                  <div className="relative z-10 mt-7 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-lg font-black">
                      {testimonial.initial}
                    </div>

                    <div>
                      <p className="font-black">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-12 lg:px-10">
          <div className="animated-gradient premium-glow reveal mx-auto max-w-7xl rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-100">
                Ready To Get Started?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
                Let&apos;s talk about your truck and preferred lanes.
              </h2>
            </div>

            <a
              href="tel:+12817163420"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-4 font-black text-blue-700 transition hover:-translate-y-1 hover:scale-[1.02] lg:mt-0"
            >
              Call (281) 716-3420
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-5 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="reveal">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                Contact Us
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Talk to Logist Movers.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Tell us about your equipment, current location, and operating
                preferences. Our team will discuss how we can support your
                dispatch needs.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href="tel:+12817163420"
                  className="block rounded-2xl border border-white/[0.08] bg-[#0b1929] p-5"
                >
                  <p className="text-xs text-slate-500">PHONE</p>
                  <p className="mt-2 text-xl font-black">
                    (281) 716-3420
                  </p>
                </a>

                <a
                  href="mailto:logistmovers@gmail.com"
                  className="block rounded-2xl border border-white/[0.08] bg-[#0b1929] p-5"
                >
                  <p className="text-xs text-slate-500">EMAIL</p>
                  <p className="mt-2 text-xl font-black">
                    logistmovers@gmail.com
                  </p>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=6734+Blue+Ridge+Dr+Richmond+TX+77469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-white/[0.08] bg-[#0b1929] p-5"
                >
                  <p className="text-xs text-slate-500">OFFICE</p>

                  <p className="mt-2 font-bold leading-7">
                    6734 Blue Ridge Dr.
                    <br />
                    Richmond, TX 77469
                    <br />
                    United States
                  </p>

                  <p className="mt-3 text-sm font-bold text-cyan-400">
                    Open in Google Maps →
                  </p>
                </a>
              </div>
            </div>

            <div className="premium-glow reveal rounded-[30px] border border-white/[0.09] bg-[#0b1929] p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Get Started
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Carrier Information
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Complete the form and our dispatch team will receive your
                information.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid gap-5 sm:grid-cols-2"
              >
                <input
                  required
                  name="name"
                  placeholder="Full Name"
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  name="mc_number"
                  placeholder="MC Number"
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 outline-none focus:border-blue-500"
                />
<label htmlFor="equipment" className="sr-only">
  Equipment Type
</label>
                <select
  id="equipment"
  required
  name="equipment"
                  defaultValue=""
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 text-slate-300 outline-none sm:col-span-2"
                >
                  <option value="" disabled>
                    Select Equipment Type
                  </option>

                  {equipment.map((truck) => (
                    <option key={truck.name} value={truck.name}>
                      {truck.name}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about preferred lanes, current location, or dispatch requirements..."
                  className="rounded-xl border border-white/10 bg-[#06111f] px-5 py-4 outline-none focus:border-blue-500 sm:col-span-2"
                />

                <button
                  disabled={formStatus === "sending"}
                  type="submit"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-black transition hover:-translate-y-1 hover:bg-blue-500 disabled:opacity-50 sm:col-span-2"
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : "Submit Carrier Information"}
                </button>

                {formStatus === "success" && (
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-center font-bold text-emerald-300 sm:col-span-2">
                    ✓ Information submitted successfully.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-center font-bold text-red-300 sm:col-span-2">
                    Submission failed. Please call (281) 716-3420.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/[0.07] bg-[#091625] px-5 py-24 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="reveal text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-cyan-400">
                FAQ
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Frequently asked questions.
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {[
                [
                  "What equipment does Logist Movers dispatch?",
                  "Dry Van, Reefer, Flatbed, Step Deck, Power Only, Box Truck, Hotshot, and Gooseneck Hotshot.",
                ],
                [
                  "Do I have to accept every load?",
                  "No. We do not believe in forced dispatch. You remain in control of the loads you accept.",
                ],
                [
                  "Do you negotiate rates with brokers?",
                  "Yes. Rate negotiation and broker communication are part of our dispatch support.",
                ],
                [
                  "How much does dispatch service cost?",
                  "Pricing depends on equipment type and dispatch arrangement. Contact our team for current rates.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="reveal rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-500/30"
                >
                  <summary className="cursor-pointer font-bold">
                    {question}
                  </summary>

                  <p className="mt-4 leading-7 text-slate-400">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/[0.07] px-5 py-12 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <a href="#home" className="inline-flex items-center">
  <Image
    src="/logist-movers-logo.png"
    alt="Logist Movers"
    width={230}
    height={70}
    className="h-[60px] w-auto object-contain"
  />
</a>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Professional truck dispatch support for owner-operators and
                fleets across the United States.
              </p>
            </div>

            <div>
              <p className="font-bold">Office</p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                6734 Blue Ridge Dr.
                <br />
                Richmond, TX 77469
                <br />
                United States
              </p>
            </div>

            <div className="text-sm text-slate-400 md:text-right">
              <p className="font-bold text-white">Contact</p>

              <p className="mt-4 leading-7">
                (281) 716-3420
                <br />
                logistmovers@gmail.com
              </p>

              <p className="mt-6 text-xs text-slate-400">
                © 2026 Logist Movers. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING ACTIONS */}
        <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
          {showTop && (
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b1929] text-lg shadow-xl transition hover:-translate-y-1"
            >
              ↑
            </button>
          )}

          <a
  href="tel:+12817163420"
  aria-label="Call Logist Movers"
  className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-blue-600 shadow-2xl shadow-blue-600/40 transition duration-300 hover:scale-110 hover:bg-blue-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6 text-white"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.875C1.5 3.564 2.564 2.5 3.875 2.5h2.286c.894 0 1.677.596 1.917 1.457l1.041 3.747a1.99 1.99 0 0 1-.612 2.023l-1.15.958a11.045 11.045 0 0 0 5.958 5.958l.958-1.15a1.99 1.99 0 0 1 2.023-.612l3.747 1.041a1.99 1.99 0 0 1 1.457 1.917v2.286A2.375 2.375 0 0 1 19.125 22.5h-.75C9.055 22.5 1.5 14.945 1.5 5.625v-.75Z"
      clipRule="evenodd"
    />
  </svg>
</a>
        </div>
      </main>
    </>
  );
}