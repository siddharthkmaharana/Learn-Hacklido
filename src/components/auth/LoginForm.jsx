import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, Check } from "lucide-react";
import { authApi } from "@/api/apiClient";
import FloatingInput from "./FloatingInput";
import PasswordInput from "./PasswordInput";
import GoogleIcon from "@/components/GoogleIcon";
import { Checkbox } from "@/components/ui/checkbox";

const shakeVariant = {
    shake: { x: [0, -8, 8, -6, 6, -3, 0], transition: { duration: 0.4 } },
};

export default function LoginForm({ onToggle }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [shakeKey, setShakeKey] = useState(0);

    const validate = () => {
        const e = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address";
        if (!password) e.password = "Password is required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!validate()) {
            setShakeKey((k) => k + 1);
            return;
        }
        setLoading(true);
        try {
            const params = new URLSearchParams(window.location.search);
            const returnTo = params.get("returnTo") || "/";
            const response = await authApi.login(email, password);
            if (response && response.token) {
                localStorage.setItem("auth_token", response.token);
            }
            setSuccess(true);
            setTimeout(() => {
                window.location.href = returnTo;
            }, 800);
        } catch (err) {
            setErrors({ form: err.response?.data?.error || err.message || "Invalid email or password" });
            setShakeKey((k) => k + 1);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = () => {
        alert("Google login is not configured in this environment.");
    };

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-heading font-bold text-white">Welcome back</h2>
                <p className="text-sm text-slate-400 mt-1">Log in to continue your journey.</p>
            </div>

            <button
                type="button"
                onClick={handleGoogle}
                className="w-full h-12 rounded-xl glass-subtle text-sm font-medium text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
                <GoogleIcon className="w-5 h-5" />
                Continue with Google
            </button>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="glass-strong px-3 text-slate-500">or</span>
                </div>
            </div>

            {errors.form && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                    {errors.form}
                </div>
            )}

            <motion.form key={shakeKey} onSubmit={handleSubmit} variants={shakeVariant} initial="shake" animate="shake" className="space-y-4">
                <FloatingInput
                    id="login-email"
                    label="Email"
                    type="email"
                    icon={Mail}
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    error={errors.email}
                />
                <PasswordInput
                    id="login-password"
                    label="Password"
                    icon={Lock}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    error={errors.password}
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <Checkbox checked={remember} onCheckedChange={setRemember} className="border-white/20 data-[state=checked]:bg-hacklido-electric data-[state=checked]:border-hacklido-electric" />
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
                    </label>
                    <Link
                        to="/forgot-password"
                        className="text-xs text-hacklido-cyan hover:text-hacklido-electric transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-hacklido-cyan hover:after:w-full after:transition-all after:duration-300"
                    >
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full h-12 rounded-xl font-semibold text-hacklido-deepest bg-gradient-to-r from-hacklido-electric to-hacklido-cyan hover:scale-[1.02] hover:shadow-lg hover:shadow-hacklido-electric/30 transition-all duration-300 disabled:opacity-90 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {success ? (
                        <>
                            <Check className="w-4 h-4 animate-pulse" /> Success
                        </>
                    ) : loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Authenticating...
                        </>
                    ) : (
                        "Sign In"
                    )}
                </button>
            </motion.form>

            <p className="text-center text-sm text-slate-400 mt-6">
                Don't have an account?{" "}
                <button
                    onClick={onToggle}
                    className="text-hacklido-cyan font-medium hover:text-hacklido-electric transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-hacklido-cyan hover:after:w-full after:transition-all after:duration-300"
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
}