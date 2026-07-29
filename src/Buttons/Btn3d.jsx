import React from 'react';

export default function Btn3d({ text = 'Кнопка', variant = 'primary', onClick, children }) {

  // ЗАМЕНИЛИ transition-transform НА transition-all И СДЕЛАЛИ ЕГО ЧУТЬ МЕДЛЕННЕЕ (300ms для мягкости)
  const baseButtonStyles = 'group flex items-center justify-center relative cursor-pointer outline-none transition-all duration-300 active:scale-95';
  const baseTopStyles = 'relative block -translate-y-1 rounded-xl px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out group-hover:-translate-y-1.5 group-active:-translate-y-0';

  const colorVariants = {
    primary:   ['bg-blue-800', 'bg-blue-600'],
    secondary: ['bg-violet-700', 'bg-violet-500/90'],
    success:   ['bg-emerald-800', 'bg-emerald-600'],
    danger:    ['bg-rose-800',    'bg-rose-600'],
    warning:   ['bg-amber-700',   'bg-amber-500'],
    
    info:      [
      'bg-cyan-950',
      'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[size:200%_auto] bg-left shadow-[0_0_25px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] group-hover:bg-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-cyan-50'
    ],
    
    neon:      [
      'bg-purple-950', 
      'bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-[size:200%_auto] bg-left shadow-[0_0_25px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] group-hover:bg-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-purple-50'
    ],
    light:     ['bg-gray-400',    'bg-gray-200 !text-gray-800'], 
  };

  const [bottomBg, topBg] = colorVariants[variant] || colorVariants.primary;

  return (
    <button className={baseButtonStyles} onClick={onClick}>
      <span className="absolute inset-0 rounded-xl bg-black/40 blur-sm transition-all duration-300 group-hover:translate-y-0.5 group-active:translate-y-0"></span>
      <span className={`absolute inset-0 rounded-xl ${bottomBg}`}></span>
      <span className={`${baseTopStyles} ${topBg}`}>
        {children || text || 'Кнопка'}
      </span>
    </button>
  );
}