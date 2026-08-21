import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Search, ArrowRight, Plane, RotateCcw, Navigation2,
  Briefcase, Building2, Star, ShieldCheck, Clock, BadgeCheck, Menu, X,
} from "lucide-react";
import heroCar from "@/assets/hero-car.png";
import aboutDriver from "@/assets/about-driver.jpg";
import tourManali from "@/assets/tour-manali.jpg";
import tourAmritsar from "@/assets/tour-amritsar.jpg";
import tourShimla from "@/assets/tour-shimla.jpg";
import tourJaipur from "@/assets/tour-jaipur.jpg";

export const Route = createFileRoute("/")({ component: Landing });

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Tour Packages", href: "#tours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Booking />
      <Tours />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 bg-secondary rounded-md grid place-items-center">
            <span className="font-display text-primary text-lg">D</span>
          </div>
          <span className="font-display text-xl tracking-tight">DRIVEWAY<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="link-underline hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="tel:+918808998089" className="btn-shine hidden sm:flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all hover:scale-[1.03]">
          <span className="h-7 w-7 grid place-items-center rounded-full bg-primary text-primary-foreground"><Phone className="h-3.5 w-3.5" /></span>
          XXXXXXXXXX
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{n.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-20">
        <div className="relative rounded-3xl bg-primary/95 overflow-hidden border-2 border-secondary/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
          {/* decorative checkers */}
          <div className="absolute top-6 right-6 w-16 h-12 checker opacity-90 hidden md:block" />
          <div className="absolute bottom-10 left-1/2 w-20 h-14 checker opacity-90 hidden md:block" />
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cream/40 blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-14">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> 24/7 cab service
              </span>
              <h1 className="mt-5 font-display text-[14vw] sm:text-7xl lg:text-[8rem] leading-[0.85] text-secondary">
                Drive<br/>way
              </h1>
              <p className="mt-6 max-w-md text-secondary/80 text-base">
                Enjoy the ride — not just the destination. Well-maintained vehicles, courteous drivers and flexible plans that make every journey memorable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#booking" className="btn-shine inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-secondary/90 transition-all hover:scale-[1.04] hover:shadow-xl">
                  Book a Cab <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 bg-background/90 text-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-background transition border border-secondary/10 hover:border-secondary/40 hover:-translate-y-0.5">
                  Our Services
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { v: "12k+", l: "Happy riders" },
                  { v: "350+", l: "Cities served" },
                  { v: "4.9★", l: "Avg rating" },
                ].map(s => (
                  <div key={s.l}>
                    <div className="font-display text-2xl text-secondary">{s.v}</div>
                    <div className="text-xs text-secondary/70">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] lg:min-h-[480px]">
              <div className="absolute inset-0 hero-blob opacity-60 float-soft" />
              <img
                src={heroCar}
                alt="White sedan ready for booking"
                width={1280}
                height={896}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl float-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Outstation", "Airport Transfer", "Round Trip", "Local City Tour", "Wedding Cabs", "Corporate Travel"];
  return (
    <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden border-y-2 border-primary marquee-mask">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-xl uppercase tracking-wider flex items-center gap-12 hover:text-primary transition-colors">
            {t} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -top-6 -left-6 w-32 h-24 checker opacity-90 hidden md:block" />
          <div className="img-reveal rounded-3xl border-4 border-primary shadow-xl">
            <img
              src={aboutDriver}
              alt="Professional driver on the road"
              width={1024}
              height={768}
              loading="lazy"
              className="relative w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl transition-transform group-hover:scale-105 group-hover:rotate-2">
            <div className="font-display text-3xl">10+</div>
            <div className="text-xs font-semibold uppercase">Years on the road</div>
          </div>
        </div>
        <div>
          <span className="text-primary font-display uppercase tracking-widest text-sm">About us</span>
          <h2 className="mt-2 font-display text-4xl lg:text-6xl leading-tight">Your Journey<br/>Starts Here</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We're more than just a taxi service — we're your reliable travel partner for every outstation journey. Whether you're planning a weekend getaway, a business trip, or a family vacation, we make your ride smooth, safe and hassle-free from start to finish. With professional drivers, clean vehicles and 24/7 support, your comfort and satisfaction are always our top priorities.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {[
              { i: ShieldCheck, t: "Verified Drivers", d: "Background-checked and trained" },
              { i: Clock, t: "Always On Time", d: "Pickup precision guaranteed" },
              { i: BadgeCheck, t: "Transparent Fares", d: "No hidden charges, ever" },
              { i: Phone, t: "24/7 Support", d: "We're a call away" },
            ].map(f => (
              <div key={f.t} className="group flex gap-3 p-4 rounded-xl bg-card border border-border card-lift hover:border-primary">
                <f.i className="h-5 w-5 text-primary shrink-0 mt-0.5 icon-pop" />
                <div>
                  <div className="font-semibold text-sm">{f.t}</div>
                  <div className="text-xs text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: Navigation2, title: "One-way taxi", desc: "Travelling one way? No problem. Book a one-way ride to your destination with ease — pay only for one side." },
  { icon: RotateCcw, title: "Round trip taxi", desc: "Need to come back? Our round-trip service ensures your ride back is just as comfortable as the ride there." },
  { icon: Plane, title: "Airport transfer", desc: "Timely pickups and drop-offs to all major airports — because your journey starts before the flight." },
  { icon: Briefcase, title: "Tour packages", desc: "Explore scenic destinations with customisable tour packages and a taxi service that knows the roads well." },
  { icon: Building2, title: "Local city tour", desc: "From quick errands to full-day bookings, we make local rides smooth and efficient." },
  { icon: ShieldCheck, title: "Corporate travel", desc: "Reliable, professional fleet for business travel, employee transport and event logistics." },
];

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-10 right-10 w-24 h-16 checker opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-display uppercase tracking-widest text-sm">Our Services</span>
            <h2 className="mt-2 font-display text-4xl lg:text-6xl">Every ride is a<br/>smooth journey</h2>
          </div>
          <p className="max-w-md text-secondary-foreground/70">
            From quick airport hops to multi-day tour packages — pick the service that fits your plan.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(s => (
            <div key={s.title} className="group glow-ring relative bg-card text-card-foreground rounded-2xl p-6 border border-border card-lift hover:border-primary">
              <div className="h-2 w-full checker opacity-80 rounded-full mb-5" />
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center mb-4 icon-pop">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a href="#booking" className="btn-shine mt-5 inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-all hover:gap-3">
                Book now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BOOKING ---------- */
function Booking() {
  const [tab, setTab] = useState<"oneway" | "round" | "airport" | "tour">("oneway");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="text-primary font-display uppercase tracking-widest text-sm">Book your ride</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl leading-tight">Reserve in 60<br/>seconds.</h2>
            <p className="mt-4 text-muted-foreground">Pick your route, choose a vehicle, and we'll confirm with the driver's details on WhatsApp.</p>
            <div className="mt-6 space-y-3 text-sm">
              {[
                "Instant confirmation",
                "Free cancellation up to 1 hour before pickup",
                "Pay online or by cash to the driver",
              ].map(p => (
                <div key={p} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" />{p}</div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-secondary/10">
              <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
                {([
                  ["oneway", "Oneway Cab"],
                  ["round", "Round Trip"],
                  ["airport", "Airport"],
                  ["tour", "Tour Package"],
                ] as const).map(([k, l]) => (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg transition relative ${tab === k ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {l}
                    {tab === k && <span className="absolute -bottom-px left-0 right-0 h-1 bg-primary rounded-full" />}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="h-14 w-14 mx-auto rounded-full bg-primary grid place-items-center mb-4">
                    <BadgeCheck className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl">Request received!</h3>
                  <p className="text-muted-foreground text-sm mt-2">We'll call you within 5 minutes to confirm your ride.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-sm font-semibold text-primary underline">Make another booking</button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <Field icon={<MapPin className="h-4 w-4" />} label="Pick-up city" placeholder="e.g. Chandigarh" />
                  <Field icon={<MapPin className="h-4 w-4" />} label="Drop-off city" placeholder="e.g. Manali" />
                  <Field type="date" label="Pickup date" />
                  <Field type="time" label="Pickup time" />
                  <Field label="Your name" placeholder="Full name" />
                  <Field label="Phone" type="tel" placeholder="+91" />
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5 text-muted-foreground">Vehicle type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Sedan", "SUV", "Tempo", "Luxury"].map(v => (
                        <label key={v} className="cursor-pointer">
                          <input type="radio" name="veh" defaultChecked={v === "Sedan"} className="peer sr-only" />
                          <div className="text-center text-sm font-semibold py-2.5 rounded-lg border border-border peer-checked:bg-primary peer-checked:border-primary peer-checked:text-primary-foreground transition">{v}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn-shine sm:col-span-2 mt-2 bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-[1.01] inline-flex items-center justify-center gap-2">
                    <Search className="h-4 w-4" /> Search Cabs
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon, label, ...rest }: { icon?: React.ReactNode; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5 text-muted-foreground">{label}</label>
      <div className="flex items-center gap-2 bg-input/40 border border-border rounded-lg px-3 py-3 focus-within:border-primary focus-within:bg-card transition">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <input {...rest} className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground/70" />
      </div>
    </div>
  );
}

/* ---------- TOURS ---------- */
const TOURS = [
  { img: tourManali, title: "Chandigarh to Manali", price: "2,000", duration: "10–12 hrs" },
  { img: tourAmritsar, title: "Chandigarh to Amritsar", price: "1,200", duration: "5 hrs" },
  { img: tourShimla, title: "Delhi to Shimla", price: "1,800", duration: "7–8 hrs" },
  { img: tourJaipur, title: "Delhi to Jaipur", price: "1,500", duration: "5–6 hrs" },
];

function Tours() {
  return (
    <section id="tours" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-display uppercase tracking-widest text-sm">Tour Packages</span>
          <h2 className="mt-2 font-display text-4xl lg:text-6xl">Popular getaways</h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Curated outstation routes with experienced drivers and flexible stops along the way.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOURS.map(t => (
            <article key={t.title} className="group bg-card rounded-2xl overflow-hidden border border-border card-lift hover:border-primary">
              <div className="img-reveal relative aspect-[4/3]">
                <img src={t.img} alt={t.title} width={800} height={640} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">{t.duration}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl group-hover:text-primary transition-colors">{t.title}</h3>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Starts from</div>
                    <div className="font-display text-2xl text-primary">₹{t.price}<span className="text-sm text-muted-foreground font-body font-normal">/day</span></div>
                  </div>
                  <a href="#booking" className="btn-shine bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-full hover:bg-secondary/90 transition-all hover:scale-105">Book now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
const SEED_REVIEWS = [
  { name: "Priya Sharma", city: "Chandigarh → Manali", rating: 5, text: "Driver was punctual and the car spotless. Made our family trip stress-free — booking again next month!" },
  { name: "Rahul Verma", city: "Airport transfer, Delhi", rating: 5, text: "Reached on time despite heavy traffic. Transparent fare, no surprises. Highly recommended." },
  { name: "Anjali Mehta", city: "Delhi → Jaipur", rating: 4, text: "Comfortable ride and friendly driver. The flexible stops made the long drive enjoyable." },
];

function Reviews() {
  const [list, setList] = useState(SEED_REVIEWS);
  const [form, setForm] = useState({ name: "", city: "", rating: 5, text: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    setList([{ ...form }, ...list]);
    setForm({ name: "", city: "", rating: 5, text: "" });
  };

  const avg = (list.reduce((a, b) => a + b.rating, 0) / list.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <span className="text-primary font-display uppercase tracking-widest text-sm">Reviews & Ratings</span>
            <h2 className="mt-2 font-display text-4xl lg:text-5xl leading-tight">What our riders say</h2>
            <div className="mt-6 flex items-center gap-3">
              <div className="font-display text-5xl">{avg}</div>
              <div>
                <Stars value={Math.round(Number(avg))} />
                <div className="text-xs text-muted-foreground mt-1">{list.length} verified reviews</div>
              </div>
            </div>

            <form onSubmit={submit} className="mt-8 bg-card rounded-2xl p-5 border border-border space-y-3">
              <h3 className="font-display text-xl">Leave a review</h3>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-3 py-2.5 rounded-lg border border-border bg-input/40 text-sm outline-none focus:border-primary" />
              <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Route or service (e.g. Delhi → Agra)" className="w-full px-3 py-2.5 rounded-lg border border-border bg-input/40 text-sm outline-none focus:border-primary" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5 text-muted-foreground">Rating</label>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(n => (
                    <button type="button" key={n} onClick={() => setForm({ ...form, rating: n })}>
                      <Star className={`h-6 w-6 ${n <= form.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <textarea value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="Share your experience…" rows={3} className="w-full px-3 py-2.5 rounded-lg border border-border bg-input/40 text-sm outline-none focus:border-primary resize-none" />
              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition">Submit review</button>
            </form>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {list.map((r, i) => (
              <div key={i} className="group bg-card rounded-2xl p-5 border border-border card-lift hover:border-primary">
                <Stars value={r.rating} />
                <p className="mt-3 text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary grid place-items-center font-display text-primary-foreground icon-pop">{r.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.city || "Verified rider"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(n => (
        <Star key={n} className={`h-4 w-4 ${n <= value ? "fill-primary text-primary" : "text-muted-foreground/40"}`} />
      ))}
    </div>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-10 lg:p-16">
          <div className="absolute top-6 right-6 w-32 h-20 checker opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-6xl leading-tight">Ready to hit<br/>the road?</h2>
              <p className="mt-4 text-secondary-foreground/70 max-w-md">Call us now or book online — your next ride is a tap away.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href="tel:+918808998089" className="btn-shine inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-[1.04] hover:shadow-2xl">
                <Phone className="h-4 w-4" /> XXXXXXXXXX
              </a>
              <a href="#booking" className="btn-shine inline-flex items-center justify-center gap-2 bg-background text-foreground font-semibold px-7 py-4 rounded-full hover:bg-background/90 transition-all hover:scale-[1.04]">
                Book Online <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl">DRIVEWAY<span className="text-primary">.</span></div>
          <p className="mt-3 text-sm text-secondary-foreground/70">Your reliable travel partner for every outstation journey across India.</p>
        </div>
        <div>
          <div className="font-display uppercase text-sm text-primary mb-3">Services</div>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li>One-way taxi</li><li>Round trip</li><li>Airport transfer</li><li>Tour packages</li>
          </ul>
        </div>
        <div>
          <div className="font-display uppercase text-sm text-primary mb-3">Company</div>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><a href="#about" className="link-underline">About</a></li><li><a href="#tours" className="link-underline">Tours</a></li><li><a href="#reviews" className="link-underline">Reviews</a></li><li><a href="#contact" className="link-underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display uppercase text-sm text-primary mb-3">Get in touch</div>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> XXXXXXXXXX</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Chandigarh, India</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-secondary-foreground/60">
        <div>© {new Date().getFullYear()} Driveway Cabs. All rights reserved.</div>
        <div>crafted for journeys that matter.</div>
      </div>
    </footer>
  );
}
