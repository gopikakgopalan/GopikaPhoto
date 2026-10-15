export default function About() {
  return (
    <section id="about" className="border-t border-[#e3d8c8] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:gap-16">
        <img
          src="/images/About1.PNG"
          alt="Photographer behind the lens"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-sm object-cover shadow-lg md:w-2/5 md:max-w-[460px]"
        />
        <div className="flex-1">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.22em] text-accent">About The Artist</span>
          <h2 className="mb-6 font-serif text-3xl font-normal text-[#1a1a1a]">Raw Emotion, Timeless Vows</h2>
          <p className="mb-7 max-w-xl text-sm font-light leading-loose text-[#55504a]">
            Based between cities and destination celebrations worldwide, our approach blends high-fashion editorial
            composition with unscripted intimacy. We believe the most breathtaking photographs are the quiet, authentic
            glances you didn’t realize were being preserved.
          </p>
          <p className="font-serif text-base italic text-[#4a4039]">— Documenting love stories worldwide</p>
        </div>
      </div>
    </section>
  );
}
