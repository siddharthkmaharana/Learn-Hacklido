import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import FloatingInput from "./FloatingInput";

function getStrength(pw) {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
}

const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const colors = ["bg-slate-600", "bg-rose-500", "bg-amber-500", "bg-hacklido-electric", "bg-emerald-500"];

export default function PasswordInput({ showStrength = false, value, ...props }) {
    const [show, setShow] = useState(false);
    const strength = getStrength(value);

    return (
        <div>
            <FloatingInput
                {...props}
                value={value}
                type={show ? "text" : "password"}
                rightSlot={
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        aria-label={show ? "Hide password" : "Show password"}
                        className="text-slate-400 hover:text-hacklido-cyan transition-colors p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-hacklido-electric/40"
                    >
                        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                }
            />
            {showStrength && value && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 overflow-hidden"
                >
                    <div className="flex gap-1.5">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < strength ? colors[strength] : "bg-white/10"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400">{labels[strength]}</p>
                </motion.div>
            )}
        </div>
    );
}