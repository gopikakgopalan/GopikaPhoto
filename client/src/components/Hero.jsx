export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-svh flex-col items-center justify-center bg-cover bg-right-top px-6 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.12)), url('/images/backgroundpic.PNG')",
      }}
    >
      <h1 className="mb-5 font-serif text-4xl font-normal leading-tight tracking-wide text-white drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
        Wedding Photography
      </h1>
      <p className="mb-8 max-w-lg text-sm text-white/95 sm:text-base">
        Candid storytelling, raw emotions, and timeless moments captured forever.
      </p>
      <a
        href="#inquiry"
        className="rounded-sm border border-white/70 bg-white/15 px-7 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-white hover:text-black sm:px-9 sm:py-3.5"
      >
        Book a Shoot
      </a>
    </section>
  );
}