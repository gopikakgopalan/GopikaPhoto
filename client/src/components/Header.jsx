import { useState } from "react";
import { useSession, signOut } from "../lib/auth-client";
import Login from "./Login";

const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Shoot", href: "#inquiry" },
];

export default function Header() {
  const { data: session, isPending } = useSession();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20 flex flex-col items-center gap-3 bg-white/40 px-4 py-5 backdrop-blur-sm md:flex-row md:justify-between md:gap-0 md:px-12 md:py-6">
        <a
          href="#"
          className="text-sm font-medium uppercase tracking-[0.22em] text-[#1a1a1a] hover:opacity-70"
        >
          Gops Photography
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex list-none flex-wrap items-center justify-center gap-4 md:gap-6">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs font-medium uppercase tracking-[0.12em] text-[#2b2b2b] hover:opacity-60"
                >
                  {label}
                </a>
              </li>
            ))}

            {!isPending && (
              <li className="flex items-center gap-3">
                {session ? (
                  <>
                    <span className="text-xs text-[#2b2b2b]">Hi, {session.user.name}</span>
                    <button
                      type="button"
                      onClick={() => signOut()}
                      className="text-xs font-medium uppercase tracking-[0.12em] text-[#2b2b2b] underline hover:opacity-60"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowLogin(true)}
                    className="text-xs font-medium uppercase tracking-[0.12em] text-[#2b2b2b] underline hover:opacity-60"
                  >
                    Sign in
                  </button>
                )}
              </li>
            )}
          </ul>
        </nav>
      </header>

      {showLogin && !session && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}