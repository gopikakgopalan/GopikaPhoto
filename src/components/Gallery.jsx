import { useState } from "react";
import { galleryData } from "../data/gallery_data";
import PhotoCard from "./PhotoCard";

const categories = ["All", ...new Set(galleryData.map((item) => item.category))];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [likedIds, setLikedIds] = useState([]);

  const visible =
    active === "All" ? galleryData : galleryData.filter((item) => item.category === active);

  function toggleLike(id) {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      {/* Section heading */}
      <div className="mb-8 text-center">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.22em] text-accent">
          Portfolio
        </span>
        <h2 className="font-serif text-3xl font-normal tracking-tight text-[#1a1a1a] md:text-4xl">
          Selected Works &amp; Visual Stories
        </h2>
        <div className="mx-auto mt-5 h-px w-10 bg-[#2b2b2b]/25" />
      </div>

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={c === active}
            className={`border px-4 py-2 text-xs uppercase tracking-widest transition ${
              c === active
                ? "border-[#111] bg-[#111] text-white"
                : "border-[#c9c2b8] hover:border-[#111]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {visible.map((item) => (
          <PhotoCard
            key={item.id}
            item={item}
            liked={likedIds.includes(item.id)}
            onToggleLike={() => toggleLike(item.id)}
          />
        ))}
      </div>
    </section>
  );
}