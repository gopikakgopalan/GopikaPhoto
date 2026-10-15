import LikeButton from "./LikeButton";

export default function PhotoCard({ item, liked, onToggleLike }) {
  return (
    <figure className="group relative m-0 overflow-hidden rounded-sm bg-[#ede9e3]">
      <img
        src={`/${item.image}`}
        alt={item.alt}
        loading="lazy"
        className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <LikeButton liked={liked} onToggle={onToggleLike} />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-6 text-center text-xs font-medium uppercase tracking-[0.12em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        {item.title}
      </figcaption>
    </figure>
  );
}