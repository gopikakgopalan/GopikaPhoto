const socials = ["Instagram", "Twitter", "Facebook", "Linkedin", "Youtube"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#dfd8ce] bg-[#ede9e3] px-[6vw] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:justify-between md:gap-[4vw]">
        <div className="flex flex-col gap-8 md:flex-[2.2]">
          <h2 className="font-serif text-4xl font-normal leading-tight text-[#1a1a1a] lg:text-5xl">Discover, Share, Connect</h2>
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {socials.map((s) => (
              <li key={s}>
                <a href="#" className="text-xs font-medium uppercase tracking-[0.16em] text-[#2b2622] hover:text-accent">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-7 md:flex-[1.2]">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-accent">Studio</span>
            <address className="text-sm font-light not-italic leading-relaxed text-[#55504a]">
              8th Floor, Alapatt Heritage Building<br />MG Road, Kochi, Kerala — 682035
            </address>
          </div>
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-accent">Direct Inquiries</span>
            <p className="text-sm font-light text-[#55504a]"><a href="mailto:inquiries@gopsphotography.com">inquiries@gopsphotography.com</a></p>
            <p className="text-sm font-light text-[#55504a]"><a href="tel:+917510202009">+91 75102 02009</a></p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7 md:flex-[1.2]">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-accent">Availability</span>
            <p className="text-sm font-light text-[#55504a]">Accepting commissions worldwide for 2026 &amp; 2027.</p>
          </div>
          <div className="border-t border-black/10 pt-6 text-sm text-[#4f463e]">
            <p>&copy; 2026 Gops Photography.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}