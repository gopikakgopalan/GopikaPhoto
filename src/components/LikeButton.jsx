export default function LikeButton({ liked, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this photo" : "Like this photo"}
      className="absolute right-3 top-3 z-10 rounded-full bg-white/80 px-2.5 py-1 text-lg leading-none text-rose-600 transition hover:bg-white"
    >
      {liked ? "♥" : "♡"}
    </button>
  );
}
