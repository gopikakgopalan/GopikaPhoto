const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { id: "event-details", label: "Event Details (Please Mention The Dates So We Can Check Availability)", type: "textarea" },
  { id: "venue", label: "Venue", type: "text" },
  { id: "phone", label: "Contact Number", type: "tel", autoComplete: "tel" },
];

const inputClass =
  "w-full rounded-sm border border-[#c9c2b8] bg-white/45 px-4 py-3 text-sm focus:border-[#222] focus:bg-white focus:outline-none";

export default function Inquiry() {
  return (
    <section id="inquiry" className="bg-[#ede9e3]">
      <div className="bg-[#f6f1ea] px-6 py-14 text-center">
        <p className="mx-auto max-w-3xl font-serif text-base italic leading-relaxed text-[#4a453f]">
          Want to make us a part of your celebration? Fill the form below with your details and we will get back to you
          as soon as we can. We take up very limited weddings per year, so please share as much as you can: dates,
          venues, ceremonies, theme and a few lines about your story.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        <h2 className="mb-6 font-serif text-xl font-medium text-[#2b2622]">Please complete the form below</h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          {fields.map(({ id, label, type, autoComplete }) => (
            <div key={id}>
              <label htmlFor={id} className="sr-only">{label} *</label>
              {type === "textarea" ? (
                <textarea id={id} name={id} rows={5} placeholder={`${label} *`} required className={inputClass} />
              ) : (
                <input id={id} name={id} type={type} autoComplete={autoComplete} placeholder={`${label} *`} required className={inputClass} />
              )}
            </div>
          ))}
          <div className="flex justify-end">
            <button type="submit" className="rounded bg-[#111] px-7 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#333]">
              Request A Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}