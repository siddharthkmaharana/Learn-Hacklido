import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles, ShieldCheck, Zap, BookOpen } from "lucide-react";
import AuthBackground from "@/components/auth/AuthBackground";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

const features = [
    { icon: BookOpen, title: "Structured Learning", desc: "Curated paths across every tech domain." },
    { icon: Zap, title: "Hands-on Labs", desc: "PocketCTFs, Blue Box & Red Quest playgrounds." },
    { icon: ShieldCheck, title: "Career Roadmaps", desc: "Track skills from beginner to mastery." },
];

export default function Auth() {
    const location = useLocation();
    const [mode, setMode] = useState(location.pathname === "/register" ? "signup" : "login");

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
            <AuthBackground />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 glass-strong rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
            >
                {/* Branding panel */}
                <div className="hidden lg:flex flex-col justify-between p-10 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-60"
                        style={{
                            background:
                                "linear-gradient(160deg, rgba(40,182,246,0.10) 0%, rgba(124,77,255,0.08) 50%, transparent 100%)",
                        }}
                    />
                    <div className="relative">
                        <div className="flex items-center gap-2.5 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center glow-blue">
                                <Terminal className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-heading font-bold text-white">
                                Hacklido<span className="text-gradient-cyan"> Learn</span>
                            </span>
                        </div>

                        <h1 className="text-3xl font-heading font-bold text-white leading-tight mb-3">
                            One playground. <br />
                            <span className="text-gradient-blue">Every tech skill.</span>
                        </h1>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Learn, practice, and build your tech career in one connected, premium experience.
                        </p>
                    </div>

                    <div className="relative space-y-4 mt-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.12 }}
                                className="flex items-start gap-3 glass-subtle rounded-xl p-3.5"
                            >
                                <div className="w-9 h-9 rounded-lg bg-hacklido-electric/15 flex items-center justify-center shrink-0">
                                    <f.icon className="w-4 h-4 text-hacklido-cyan" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{f.title}</p>
                                    <p className="text-xs text-slate-400">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative flex items-center gap-2 mt-10 text-xs text-slate-500">
                        <Sparkles className="w-3.5 h-3.5 text-hacklido-cyan" />
                        Trusted by 50,000+ learners worldwide
                    </div>
                </div>

                {/* Form panel */}
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                    <div className="lg:hidden flex items-center gap-2.5 mb-8 justify-center">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-hacklido-electric to-hacklido-purple flex items-center justify-center glow-blue">
                            <Terminal className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-heading font-bold text-white">
                            Hacklido<span className="text-gradient-cyan"> Learn</span>
                        </span>
                    </div>

                    <AnimatePresence mode="wait">
                        {mode === "login" ? (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -24, scale: 0.98 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <LoginForm onToggle={() => setMode("signup")} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signup"
                                initial={{ opacity: 0, x: 24, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -24, scale: 0.98 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <SignupForm onToggle={() => setMode("login")} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}