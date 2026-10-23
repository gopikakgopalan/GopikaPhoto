import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signIn, signUp, useSession } from "../lib/auth-client";

const inputClass =
  "w-full rounded-sm border border-[#c9c2b8] bg-white px-4 py-3 text-sm focus:border-[#222] focus:outline-none";
const labelClass = "mb-1 block text-xs uppercase tracking-widest text-[#55504a]";

export default function Login({ mode = "signin" }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (session) return <Navigate to="/" replace />;

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
    navigate("/");
  }

  return (
    <section className="flex min-h-[80vh] items-start justify-center px-4 pb-20 pt-40 md:pt-32">
      <div className="w-full max-w-sm rounded-sm bg-white/60 p-6 shadow-sm sm:p-8">
        <h1 className="mb-6 font-serif text-2xl text-[#1a1a1a]">
          {isSignup ? "Create account" : "Sign in"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignup && (
            <div>
              <label htmlFor="auth-name" className={labelClass}>Name</label>
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
            <label htmlFor="auth-email" className={labelClass}>Email</label>
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
            <label htmlFor="auth-password" className={labelClass}>Password</label>
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
            <p role="alert" className="text-sm text-red-700">{error}</p>
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
          <Link to={isSignup ? "/login" : "/signup"} className="font-medium text-accent underline">
            {isSignup ? "Sign in" : "Create an account"}
          </Link>
        </p>
      </div>
    </section>
  );
}