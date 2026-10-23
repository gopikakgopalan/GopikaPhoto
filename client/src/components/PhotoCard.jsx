import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";

export default function PhotoCard({ item, liked, onToggleLike }) {
  return (
    <figure className="group relative m-0 overflow-hidden rounded-sm bg-[#ede9e3]">
      <Link to={`/gallery/${item.slug}`} className="block"></Link>
      <img
        src={item.imageUrl}
        alt={item.alt}
        loading="lazy"
        className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <LikeButton liked={liked} onToggle={onToggleLike} />
      <figcaption
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-8 text-center text-xs font-medium uppercase tracking-[0.12em] text-white
                   transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        {item.title}
      </figcaption>
    </figure>
  );
}