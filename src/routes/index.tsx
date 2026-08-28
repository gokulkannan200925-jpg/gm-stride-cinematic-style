import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/gm/Reveal";
import { Sticker } from "@/components/gm/Sticker";
import heroSneaker from "@/assets/hero-sneaker.jpg";
import showroom from "@/assets/showroom.jpg";
import shotCloseup from "@/assets/shot-closeup.jpg";
import shotStreet from "@/assets/shot-street.jpg";
import shotAction from "@/assets/shot-action.jpg";
import catSneaker from "@/assets/cat-sneaker.jpg";
import catSport from "@/assets/cat-sport.jpg";
import catCasual from "@/assets/cat-casual.jpg";
import catSandal from "@/assets/cat-sandal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GM Stride — Premium Footwear Showroom Concept" },
      {
        name: "description",
        content:
          "GM Stride: a premium sneaker showroom and sportswear campaign concept with cinematic product visuals, bold posters and street-style branding.",
      },
      { property: "og:title", content: "GM Stride — Premium Footwear Showroom Concept" },
      {
        property: "og:description",
        content:
          "Cinematic footwear campaign concept: illuminated showroom, floating sneaker shelves, bold posters and streetwear graphics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display inline-flex items-baseline gap-1.5 ${className}`}>
      <span className="bg-gradient-brand grid size-8 place-items-center rounded-lg text-brand-foreground shadow-glow">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M3 16h11l6-4-6-4" />
          <path d="M3 8h5" />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-ink">
        GM<span className="text-gradient-brand"> STRIDE</span>
      </span>
    </span>
  );
}

const posters = [
  { line1: "STEP INTO", line2: "YOUR STYLE", tag: "SS/26", tone: "brand" as const },
  { line1: "MOVE. STYLE.", line2: "STRIDE.", tag: "CAMPAIGN 01", tone: "flash" as const },
  { line1: "BUILT FOR", line2: "EVERY STEP", tag: "PERFORMANCE", tone: "chrome" as const },
  { line1: "NEW", line2: "COLLECTION", tag: "IN STORE NOW", tone: "chrome" as const },
  { line1: "LIMITED", line2: "DROP", tag: "48 HOURS", tone: "flash" as const },
  { line1: "FIND YOUR", line2: "STRIDE", tag: "GM STRIDE", tone: "brand" as const },
];

const posterSkin: Record<"brand" | "flash" | "chrome", string> = {
  brand: "bg-gradient-brand text-brand-foreground",
  flash: "bg-flash text-flash-foreground",
  chrome: "bg-gradient-chrome text-ink",
};

const categories = [
  { name: "Sneakers", img: catSneaker, note: "Street icons", badge: "JUST DROPPED" },
  { name: "Sports", img: catSport, note: "Engineered speed", badge: "TRENDING" },
  { name: "Casual", img: catCasual, note: "Everyday clean", badge: "BEST SELLER" },
  { name: "Sandals", img: catSandal, note: "Warm weather", badge: "NEW" },
];

const shots = [
  { img: shotCloseup, title: "Macro Detail", note: "Close-up · knit + chrome sole" },
  { img: shotStreet, title: "Walking Shot", note: "Urban street-style · motion blur" },
  { img: shotAction, title: "Low Angle", note: "Sports action · dramatic beams" },
];

const showroomFeatures = [
  { t: "Illuminated Logo Wall", d: "Backlit GM Stride monogram in brushed chrome, 4.2 m wide." },
  { t: "Floating Shelves", d: "Cantilevered display planes with concealed LED wash lighting." },
  { t: "LED Campaign Screens", d: "Twin 98\u2033 panels looping cinematic product films." },
  { t: "Glass Counters", d: "Low-iron glass vitrines for limited drops and collabs." },
  { t: "Zoned Floorplan", d: "Sneakers, sports, casual and sandals in dedicated bays." },
  { t: "Fit Lounge", d: "Mirrored try-on benches with soft daylight-balanced lighting." },
];

const stickers = [
  "NEW",
  "TRENDING",
  "BEST SELLER",
  "LIMITED EDITION",
  "JUST DROPPED",
  "PREMIUM",
  "100% STYLE",
  "GM STRIDE",
];

function Index() {
  return (
    <div className="overflow-x-hidden bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <Wordmark />
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-ink" href="#collection">Collection</a>
            <a className="transition-colors hover:text-ink" href="#store">Showroom</a>
            <a className="transition-colors hover:text-ink" href="#cinema">Cinematic</a>
            <a className="transition-colors hover:text-ink" href="#posters">Posters</a>
          </div>
          <a
            href="#drop"
            className="bg-gradient-brand font-display rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-foreground shadow-glow transition-transform hover:scale-[1.04]"
          >
            Limited Drop
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="bg-gradient-glow pointer-events-none absolute inset-0 -z-10" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--steel) 55%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--steel) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(70% 60% at 50% 30%, #000, transparent)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28">
          <div>
            <Reveal className="flex flex-wrap items-center gap-2">
              <Sticker tone="flash" rotate={-4} delay={120}>Limited Drop</Sticker>
              <Sticker tone="chrome" rotate={3} delay={260}>SS / 26 Collection</Sticker>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-[clamp(3rem,9vw,6.6rem)] leading-[0.86] font-extrabold uppercase text-ink">
                Find your
                <br />
                <span className="text-gradient-brand">stride.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                A premium footwear house built on motion. Cinematic product design, engineered
                comfort and streetwear energy — from the showroom floor to the pavement.
              </p>
            </Reveal>
            <Reveal delay={280} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#collection"
                className="bg-gradient-brand font-display rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-brand-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Shop the collection
              </a>
              <a
                href="#store"
                className="font-display rounded-full border-2 border-ink px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                Visit the showroom
              </a>
            </Reveal>
            <Reveal delay={360} className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { k: "128", v: "Silhouettes" },
                { k: "42", v: "Flagship stores" },
                { k: "4.9", v: "Avg. rating" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-extrabold text-ink">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <div className="bg-gradient-chrome relative overflow-hidden rounded-[2.5rem] p-6 shadow-lift">
              <div className="bg-gradient-glow pointer-events-none absolute inset-0" />
              <img
                src={heroSneaker}
                alt="GM Stride premium white and blue running sneaker floating under cinematic light"
                width={1600}
                height={1200}
                className="animate-float relative w-full rounded-[1.8rem] object-cover"
              />
              <div className="absolute left-8 top-8">
                <Sticker tone="flash" rotate={-8} delay={520}>Just Dropped</Sticker>
              </div>
              <div className="absolute bottom-9 right-8">
                <Sticker tone="brand" rotate={5} delay={700}>Premium</Sticker>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-lift">
              <div>
                <div className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
                  Stride Air 01
                </div>
                <div className="text-xs text-muted-foreground">Chrome / Cobalt / Flare</div>
              </div>
              <div className="font-display text-xl font-extrabold text-brand">₹8,499</div>
            </div>
          </Reveal>
        </div>

        {/* MARQUEE */}
        <div className="bg-ink py-4">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((rep) => (
              <div key={rep} className="flex shrink-0 items-center gap-8 pr-8">
                {["MOVE. STYLE. STRIDE.", "BUILT FOR EVERY STEP", "NEW COLLECTION", "STEP INTO YOUR STYLE", "LIMITED DROP"].map(
                  (t) => (
                    <span
                      key={rep + t}
                      className="font-display flex items-center gap-8 text-lg font-extrabold uppercase tracking-[0.18em] text-background/90"
                    >
                      {t}
                      <svg viewBox="0 0 24 24" className="size-4 text-flash" fill="currentColor">
                        <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                      </svg>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-brand">
              The collection
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.95] text-ink">
              Four floors.
              <br />
              One stride.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Dedicated bays for sneakers, sports, casual and sandals — each lit, styled and staged
            like its own campaign.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
                <div className="bg-gradient-chrome relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={`GM Stride ${c.name} product shot`}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <Sticker tone={i % 2 ? "brand" : "flash"} rotate={i % 2 ? 4 : -5} delay={200 + i * 90}>
                      {c.badge}
                    </Sticker>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <h3 className="font-display text-base font-extrabold uppercase tracking-[0.1em] text-ink">
                      {c.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{c.note}</p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full border border-border text-ink transition-colors group-hover:bg-ink group-hover:text-background">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3D ROTATION SHOWCASE */}
      <section className="relative overflow-hidden bg-gradient-chrome py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal className="relative grid place-items-center">
            <div className="animate-spin-slow absolute size-[22rem] rounded-full border border-dashed border-brand/40 sm:size-[26rem]" />
            <div className="bg-gradient-glow absolute size-[24rem] rounded-full" />
            <img
              src={shotCloseup}
              alt="Slow rotation study of a GM Stride sneaker sole and knit upper"
              width={1024}
              height={1280}
              loading="lazy"
              className="animate-float relative w-64 rounded-[2rem] object-cover shadow-glow sm:w-72"
            />
            <div className="absolute -right-1 top-6 sm:right-10">
              <Sticker tone="outline" rotate={8}>360° View</Sticker>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-flash">
                Product film
              </p>
              <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95] text-ink">
                Slow-motion
                <br />
                rotation study
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-muted-foreground">
                Every silhouette is captured as a full 360° turntable pass under a five-point
                cinematic light rig — chrome kicker, cobalt rim light and a single flare accent for
                the outsole.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Turntable pass · 24 fps",
                "Rim + kicker lighting",
                "Real material response",
                "Zoom-in macro cutaways",
              ].map((t, i) => (
                <Reveal key={t} delay={180 + i * 70}>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-ink">
                    <span className="bg-gradient-brand size-2.5 rounded-full" />
                    {t}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSTERS */}
      <section id="posters" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-brand">
            Campaign posters
          </p>
          <h2 className="mt-3 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.95] text-ink">
            Bold type. Loud motion. Zero noise.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((p, i) => (
            <Reveal key={p.line2 + i} delay={i * 80}>
              <article
                className={`group relative aspect-[4/5] overflow-hidden rounded-3xl p-7 shadow-lift ${posterSkin[p.tone]}`}
              >
                <div
                  className="absolute inset-0 opacity-25 transition-transform duration-700 group-hover:scale-125"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(115deg, currentColor 0 2px, transparent 2px 16px)",
                    maskImage: "radial-gradient(80% 70% at 80% 20%, #000, transparent)",
                  }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="font-display text-[0.65rem] font-extrabold uppercase tracking-[0.3em] opacity-80">
                    {p.tag}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold uppercase leading-[0.9]">
                      {p.line1}
                      <br />
                      {p.line2}
                    </h3>
                    <div className="mt-5 flex items-center gap-2 opacity-90">
                      <span className="h-[3px] w-10 rounded-full bg-current" />
                      <span className="h-[3px] w-6 rounded-full bg-current opacity-60" />
                      <span className="font-display text-[0.65rem] font-extrabold uppercase tracking-[0.24em]">
                        GM Stride
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHOWROOM */}
      <section id="store" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-flash">
                Retail concept
              </p>
              <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.95] text-ink">
                The GM Stride
                <br />
                showroom
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Brushed chrome, low-iron glass and a light concrete floor — a bright, gallery-grade
              space where product is the only hero.
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mt-12 overflow-hidden rounded-[2.5rem] shadow-lift">
            <img
              src={showroom}
              alt="Modern GM Stride footwear showroom with illuminated shelves, LED screens and glass counters"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
              <Sticker tone="brand" rotate={-5}>Flagship Concept</Sticker>
              <Sticker tone="chrome" rotate={4}>4 Zones</Sticker>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {showroomFeatures.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-lift transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="bg-gradient-brand mb-4 h-1.5 w-10 rounded-full" />
                  <h3 className="font-display text-base font-extrabold uppercase tracking-[0.08em] text-ink">
                    {f.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC */}
      <section id="cinema" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-brand">
            Cinematic visuals
          </p>
          <h2 className="mt-3 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold uppercase leading-[0.95] text-ink">
            Shot like a film. Sold like a story.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={s.img}
                  alt={`${s.title} — ${s.note}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6">
                  <div className="font-display text-lg font-extrabold uppercase tracking-[0.08em] text-background">
                    {s.title}
                  </div>
                  <div className="text-xs text-background/75">{s.note}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STICKER SHEET */}
      <section className="bg-gradient-chrome py-24">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <Reveal>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.28em] text-flash">
              Graphic kit
            </p>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95] text-ink">
              Sticker sheet
            </h2>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {stickers.map((s, i) => (
              <Sticker
                key={s}
                tone={(["brand", "flash", "chrome", "outline"] as const)[i % 4] ?? "brand"}
                rotate={i % 2 ? 5 : -5}
                delay={i * 80}
                className="text-sm"
              >
                <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                </svg>
                {s}
              </Sticker>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="drop" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="bg-gradient-brand relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center shadow-glow sm:px-16">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(100deg, #fff 0 3px, transparent 3px 22px)",
            }}
          />
          <div className="relative">
            <Sticker tone="chrome" rotate={-4} delay={200}>Limited Drop · 48H</Sticker>
            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)] font-extrabold uppercase leading-[0.9] text-brand-foreground">
              Step into your style
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-brand-foreground/85">
              Join the GM Stride list for early access to drops, showroom openings and campaign
              previews.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full rounded-full bg-card px-5 py-3.5 text-sm text-ink outline-none ring-0 placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="font-display rounded-full bg-ink px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-background transition-transform hover:scale-[1.04]"
              >
                Get access
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <Wordmark />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Move. Style. Stride. © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
