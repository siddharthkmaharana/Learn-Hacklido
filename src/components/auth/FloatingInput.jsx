import React from "react";
import { motion } from "framer-motion";

export default function FloatingInput({
    id,
    label,
    type = "text",
    value,
    onChange,
    icon: Icon,
    autoComplete,
    autoFocus,
    required,
    error,
    rightSlot,
}) {
    const labelLeft = Icon ? "left-11" : "left-4";

    return (
        <div className="relative">
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none z-10" />
                )}
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    required={required}
                    placeholder=" "
                    aria-invalid={!!error}
                    className={`peer w-full h-14 ${Icon ? "pl-11" : "pl-4"} ${rightSlot ? "pr-12" : "pr-4"
                        } pt-5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-transparent outline-none transition-all duration-300 focus:-translate-y-0.5 focus:bg-white/[0.06] ${error
                            ? "border-rose-500/50 focus:border-rose-400/70"
                            : "border-white/10 hover:border-white/20 focus:border-hacklido-electric/60 focus:shadow-[0_0_0_3px_rgba(40,182,246,0.12)]"
                        }`}
                />
                <label
                    htmlFor={id}
                    className={`absolute ${labelLeft} top-1/2 -translate-y-1/2 text-sm text-slate-400 pointer-events-none transition-all duration-200 peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-hacklido-cyan peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs`}
                >
                    {label}
                </label>
                {rightSlot && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
                )}
            </div>
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-xs text-rose-400"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}
