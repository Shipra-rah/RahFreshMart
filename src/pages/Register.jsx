import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3ea] px-4 py-5">
      <div className="w-full max-w-md rounded-xl border border-black/10 bg-white shadow-lg shadow-black/10">
        {/* Header */}
        <div className="px-8 pt-8 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Join us and manage your account easily
          </p>
        </div>

        {/* Form */}
        <form className="px-8 pb-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="
                mt-1 w-full rounded-md border border-black/15
                px-3 py-2 text-sm text-slate-700
                focus:outline-none focus:border-slate-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-600">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                mt-1 w-full rounded-md border border-black/15
                px-3 py-2 text-sm text-slate-700
                focus:outline-none focus:border-slate-500
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-600">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="
                  w-full rounded-md border border-black/15
                  px-3 py-2 pr-10 text-sm text-slate-700
                  focus:outline-none focus:border-slate-500
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 text-xs text-slate-500 hover:text-slate-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-600">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="
                mt-1 w-full rounded-md border border-black/15
                px-3 py-2 text-sm text-slate-700
                focus:outline-none focus:border-slate-500
              "
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" className="mt-1 rounded border-black/20" />
            <span>
              I agree to the{" "}
              <span className="underline cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-4 w-full rounded-md bg-slate-800
              py-2.5 text-sm font-semibold text-white
              transition hover:bg-slate-900
            "
          >
            Create account
          </button>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <span className="relative z-10 bg-white px-3 text-xs text-slate-400">
              Already have an account?
            </span>
            <div className="absolute inset-0 top-1/2 h-px bg-black/10" />
          </div>

          {/* Login */}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="
    w-full rounded-md border border-black/20
    py-2.5 text-sm font-medium text-slate-700
    transition hover:bg-black/5
  "
          >
            Sign in instead
          </button>
        </form>
      </div>
    </div>
  );
}
