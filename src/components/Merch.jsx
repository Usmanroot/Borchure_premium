import React from 'react';
import { MERCH_ITEMS } from '../data/merh.js';

export default function Merch() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-zinc-800 pb-6">
        <div>
          <span className="text-purple-500 font-mono text-sm tracking-widest uppercase font-bold">
            // Official Merchandise Drop
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-1">
            Lookbook & Merch
          </h2>
        </div>
        <p className="text-zinc-400 text-base max-w-md">
          Exclusive gear and community merchandise. Clicking on an item opens its direct order page on the marketplace.
        </p>
      </div>

      {/* Сетка товаров (2 колонки) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MERCH_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-105 sm:h-125 rounded-3xl overflow-hidden shadow-2xl group border border-zinc-800/80 bg-zinc-950"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {item.badge && (
              <span className="absolute top-5 left-5 z-10 bg-purple-600/90 backdrop-blur-md text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                {item.badge}
              </span>
            )}

            <span className="absolute top-5 right-5 z-10 bg-black/80 backdrop-blur-md border border-white/10 text-purple-400 text-base font-black px-4 py-1.5 rounded-2xl shadow-lg">
              {item.price}
            </span>

            <div className="absolute bottom-6 left-6 right-6 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide drop-shadow-md">
                {item.title}
              </h3>
            </div>

            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-8 sm:p-12 text-center z-20">
              <h3 className="text-3xl sm:text-4xl font-black uppercase mb-3 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 text-purple-400">
                {item.title}
              </h3>

              <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-lg translate-y-6 transition-transform duration-300 delay-75 group-hover:translate-y-0 leading-relaxed">
                {item.description}
              </p>

              <div className="translate-y-6 transition-transform duration-300 delay-150 group-hover:translate-y-0">
                <a
                  href={item.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-purple-600 text-white font-extrabold text-lg rounded-2xl hover:bg-purple-500 transition-all active:scale-95 shadow-xl shadow-purple-600/30"
                >
                  Order on Marketplace
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}