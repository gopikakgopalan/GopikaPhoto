import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PhotoDetail() {
  const { slug } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setNotFound(false);

    fetch(`/api/photos/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        if (!ignore) setPhoto(data);
      })
      .catch(() => {
        if (!ignore) setNotFound(true);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [slug]);

  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-40 md:pt-32">
      <a href="/#gallery" className="text-xs uppercase tracking-widest text-accent underline">
        ← Back to gallery
      </a>

      {loading && <p className="mt-8">Loading…</p>}

      {!loading && notFound && (
        <p className="mt-8">
          Sorry, that photo could not be found.{" "}
          <Link to="/" className="underline">Go home</Link>
        </p>
      )}

      {!loading && photo && (
        <div className="mt-8">
          <img
            src={photo.imageUrl}
            alt={photo.alt}
            className="max-h-[80vh] w-full rounded-sm object-contain"
          />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {photo.category}
          </p>
          <h1 className="mt-1 font-serif text-3xl text-[#1a1a1a] md:text-4xl">{photo.title}</h1>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-[#55504a]">
            {photo.alt}
          </p>
        </div>
      )}
    </section>
  );
}