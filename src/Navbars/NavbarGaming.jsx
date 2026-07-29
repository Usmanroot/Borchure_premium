import { useState } from 'react';
import React from 'react';
import Btn3d from '../Buttons/Btn3d.jsx';

export default function NavbarGaming({ streamerSlug = 'MOOCAPITANN' }) {
  const [isOpen, setIsOpen] = useState(false);

  const donationUrl = `https://streamlabs.com/${streamerSlug}/tip`;

  return (
    // ДОБАВИЛИ relative, чтобы мобильное меню (absolute) позиционировалось ровно относительно навбара
    <nav className="relative md:sticky md:top-0 md:backdrop-blur-md bg-zinc-900 border-b-4 border-zinc-800 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 uppercase italic">
          Minecraft
        </div>

        {/* ДЕСКТОПНЫЕ ССЫЛКИ */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
          <a href="#stream" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-purple-500 py-1">Stream</a>
          <a href="#pc" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-purple-500 py-1">PC stats</a>
          <a href="#merch" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-purple-500 py-1">Merch</a>
          <a href="#milestone" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-purple-500 py-1">Milestone</a>
        </div>

        {/* ДЕСКТОПНАЯ КНОПКА (Убрали двойную ссылку <a> в <a>) */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a href={donationUrl} target="_blank" rel="noreferrer">
            <Btn3d text='Donate' variant='neon' />
          </a>
        </div>

        {/* БУРГЕР-КНОПКА */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-purple-400 transition-colors focus:outline-none p-2"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b-4 border-zinc-800 px-6 py-6 flex flex-col gap-6 shadow-2xl">
          <div className="flex flex-col gap-4 text-base font-bold text-zinc-400 uppercase tracking-wider">
            <a href="#stream" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-purple-500 pl-3">Stream</a>
            <a href="#pc" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-purple-500 pl-3">PC stats</a>
            <a href="#merch" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-purple-500 pl-3">Merch</a>
            <a href="#milestone" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-purple-500 pl-3">Milestone</a>
          </div>

          <div className="h-2 bg-zinc-800/60 w-full" />

          {/* ИСПРАВЛЕННЫЙ БЛОК СОЦСЕТЕЙ */}
          <div className="flex items-ceter justify-center w-full">
            <Btn3d variant='neon' onClick={() => window.location.hash = 'donate'}>
              Donate
            </Btn3d>
          </div>
        </div>
      )}
    </nav>
  );
}