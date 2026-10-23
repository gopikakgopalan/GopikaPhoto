import { useEffect, useState } from "react";
import { signIn, signUp } from "../lib/auth-client";

const inputClass =
  "w-full rounded-sm border border-[#c9c2b8] bg-white px-4 py-3 text-sm focus:border-[#222] focus:outline-none";

export default function Login({ onClose }) {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const isSignup = mode === "signup";

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    const result = isSignup
      ? await signUp.email({ name, email, password })
      : await signIn.email({ email, password });

    setBusy(false);

    if (result.error) {
      setError(result.error.message || "Something went wrong. Please try again.");
      return;
    }
    onClose();
  }

  function switchMode() {
    setMode(isSignup ? "signin" : "signup");
    setError("");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="w-full max-w-sm rounded-sm bg-[#fdfbf7] p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <h2 id="login-title" className="font-serif text-2xl text-[#1a1a1a]">
            {isSignup ? "Create account" : "Sign in"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-2xl leading-none text-[#55504a] hover:text-black"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignup && (
            <div>
              <label htmlFor="auth-name" className="mb-1 block text-xs uppercase tracking-widest text-[#55504a]">
                Name
              </label>
              <input
                id="auth-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="mb-1 block text-xs uppercase tracking-widest text-[#55504a]">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="auth-password" className="mb-1 block text-xs uppercase tracking-widest text-[#55504a]">
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
            {isSignup && <p className="mt-1 text-xs text-[#55504a]">At least 8 characters.</p>}
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="rounded bg-[#111] px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-[#333] disabled:opacity-60"
          >
            {busy ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-[#55504a]">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <button type="button" onClick={switchMode} className="font-medium text-accent underline">
            {isSignup ? "Sign in" : "Create an account"}
          </button>
        </p>
      </div>
    </div>
  );
}