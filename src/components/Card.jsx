import React from "react";
import "./Card.css";

export default function Card({ title, description, category, icon: Icon, image }) {
  return (
    <div className="hover-card-container">
      {image && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-slate-900/40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          {category && (
            <span className="absolute top-2.5 left-2.5 px-2 py-1 rounded-md text-[10px] font-mono font-semibold bg-hacklido-electric/20 text-hacklido-cyan border border-hacklido-electric/30 backdrop-blur-md">
              {category}
            </span>
          )}
        </div>
      )}
      
      <div className="flex items-start gap-4">
        {Icon && !image && (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-hacklido-electric/25 to-hacklido-purple/20 border border-hacklido-electric/20 flex items-center justify-center shrink-0 text-hacklido-cyan">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {!image && category && (
            <span className="text-[10px] font-mono font-semibold text-hacklido-cyan uppercase tracking-wider block mb-1">
              {category}
            </span>
          )}
          <h3 className="text-lg font-heading font-semibold text-white truncate mb-1.5">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
