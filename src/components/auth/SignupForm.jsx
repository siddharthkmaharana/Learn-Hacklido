import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Loader2, Check } from "lucide-react";
import { authApi } from "@/api/apiClient";
import FloatingInput from "./FloatingInput";
import PasswordInput from "./PasswordInput";
import GoogleIcon from "@/components/GoogleIcon";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const shakeVariant = {
    shake: { x: [0, -8, 8, -6, 6, -3, 0], transition: { duration: 0.4 } },
};

export default function SignupForm({ onToggle }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [shakeKey, setShakeKey] = useState(0);

    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState("");

    const validate = () => {
        const e = {};
        if (!name.trim()) e.name = "Full name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address";
        if (password.length < 8) e.password = "At least 8 characters";
        if (confirm !== password) e.confirm = "Passwords do not match";
        if (!terms) e.terms = "You must accept the terms";
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
            const response = await authApi.register(email, password, name);
            if (response && response.token) {
                localStorage.setItem("auth_token", response.token);
            }
            setSuccess(true);
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
        } catch (err) {
            setErrors({ form: err.response?.data?.error || err.message || "Registration failed" });
            setShakeKey((k) => k + 1);
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async () => {
        // No-op or placeholder since backend doesn't require OTP
    };

    const handleResend = async () => {
        // No-op or placeholder since backend doesn't require OTP
    };

    const handleGoogle = () => {
        alert("Google login is not configured in this environment.");
    };

    if (showOtp) {
        return (
            <div>
                <div className="mb-6">
                    <h2 className="text-2xl font-heading font-bold text-white">Verify your email</h2>
                    <p className="text-sm text-slate-400 mt-1">
                        We sent a 6-digit code to <span className="text-hacklido-cyan">{email}</span>
                    </p>
                </div>

                {errors.form && (
                    <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                        {errors.form}
                    </div>
                )}

                <div className="flex justify-center mb-6">
                    <InputOTP maxLength={6} value={otp} onChange={setOtp} autoFocus autoComplete="one-time-code">
                        <InputOTPGroup>
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <InputOTPSlot key={i} index={i} className="border-white/15 bg-white/5" />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <button
                    onClick={handleVerify}
                    disabled={loading || success || otp.length < 6}
                    className="w-full h-12 rounded-xl font-semibold text-hacklido-deepest bg-gradient-to-r from-hacklido-electric to-hacklido-cyan hover:scale-[1.02] hover:shadow-lg hover:shadow-hacklido-electric/30 transition-all duration-300 disabled:opacity-90 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {success ? (
                        <>
                            <Check className="w-4 h-4 animate-pulse" /> Verified
                        </>
                    ) : loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Verifying...
                        </>
                    ) : (
                        "Verify Account"
                    )}
                </button>

                <p className="text-center text-sm text-slate-400 mt-4">
                    Didn't receive the code?{" "}
                    <button onClick={handleResend} className="text-hacklido-cyan font-medium hover:underline">
                        Resend
                    </button>
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-heading font-bold text-white">Create your account</h2>
                <p className="text-sm text-slate-400 mt-1">Start learning in minutes — free.</p>
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
                    id="signup-name"
                    label="Full Name"
                    icon={User}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    error={errors.name}
                />
                <FloatingInput
                    id="signup-email"
                    label="Email"
                    type="email"
                    icon={Mail}
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    error={errors.email}
                />
                <PasswordInput
                    id="signup-password"
                    label="Password"
                    icon={Lock}
                    autoComplete="new-password"
                    showStrength
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors({ ...errors, password: undefined });
                    }}
                    error={errors.password}
                />
                <PasswordInput
                    id="signup-confirm"
                    label="Confirm Password"
                    icon={Lock}
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => {
                        setConfirm(e.target.value);
                        if (errors.confirm) setErrors({ ...errors, confirm: undefined });
                    }}
                    error={errors.confirm}
                />

                <div>
                    <label className="flex items-start gap-2 cursor-pointer group">
                        <Checkbox
                            checked={terms}
                            onCheckedChange={(v) => {
                                setTerms(!!v);
                                if (errors.terms) setErrors({ ...errors, terms: undefined });
                            }}
                            className="border-white/20 data-[state=checked]:bg-hacklido-electric data-[state=checked]:border-hacklido-electric mt-0.5"
                        />
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                            I agree to the{" "}
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="text-hacklido-cyan hover:underline"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="text-hacklido-cyan hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </span>
                    </label>
                    {errors.terms && <p className="mt-1.5 text-xs text-rose-400">{errors.terms}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading || success}
                    className="w-full h-12 rounded-xl font-semibold text-hacklido-deepest bg-gradient-to-r from-hacklido-electric to-hacklido-cyan hover:scale-[1.02] hover:shadow-lg hover:shadow-hacklido-electric/30 transition-all duration-300 disabled:opacity-90 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {success ? (
                        <>
                            <Check className="w-4 h-4 animate-pulse" /> Created
                        </>
                    ) : loading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Creating account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </motion.form>

            <p className="text-center text-sm text-slate-400 mt-6">
                Already have an account?{" "}
                <button
                    onClick={onToggle}
                    className="text-hacklido-cyan font-medium hover:text-hacklido-electric transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-hacklido-cyan hover:after:w-full after:transition-all after:duration-300"
                >
                    Sign In
                </button>
            </p>
        </div>
    );
}