import React from 'react';

export default function Footer_gamer() {
  return (
    <footer className="bg-[#0b0c10] text-[#c5c6c7] py-12 px-6 border-t-2 border-[#1f2833] relative overflow-hidden">
      {/* Неоновая полоска сверху */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Лого / Никнейм */}
        <div className="text-center md:text-left">
          <h3 className="font-black tracking-wider text-xl uppercase bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            STREAMER_NAME
          </h3>
          <p className="text-xs text-gray-500 mt-1">Live almost every day</p>
        </div>

        {/* Ссылки на соцсети с геймерским эффектом */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-wide">
          <a href="#twitch" className="px-4 py-2 rounded bg-[#1f2833] hover:bg-purple-600 hover:text-white transition-all -translate-y-1 duration-300 transform hover:-translate-y-2 active:-translate-y-1">
            Twitch
          </a>
          <a href="#youtube" className="px-4 py-2 rounded bg-[#1f2833] hover:bg-red-600 hover:text-white transition-all -translate-y-1 duration-300 transform hover:-translate-y-2 active:-translate-y-1">
            YouTube
          </a>
          <a href="#discord" className="px-4 py-2 rounded bg-[#1f2833] hover:bg-indigo-600 hover:text-white transition-all -translate-y-1 duration-300 transform hover:-translate-y-2 active:-translate-y-1">
            Discord
          </a>
        </div>
      </div>

      {/* Нижняя плашка */}
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        <p>Designed by Usman Mukhtorow | Powered by pure code</p>
      </div>
    </footer>
  );
}