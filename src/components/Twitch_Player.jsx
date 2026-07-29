import React, { useState, useEffect } from 'react';

export default function Twitch_Player() {
  const streamerName = 'MOOCAPITANN';
  
  // 1. Автоматически берем текущий домен сайта
  const [parentDomain, setParentDomain] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Получаем хост браузера (например, "mysite.com" или "localhost")
    if (typeof window !== 'undefined') {
      setParentDomain(window.location.hostname);
    }

    const img = new Image();
    img.src = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamerName}-640x360.jpg?t=${new Date().getTime()}`;

    img.onload = () => {
      setIsLive(true);
      setLoading(false);
    };

    img.onerror = () => {
      setIsLive(false);
      setLoading(false);
    };
  }, [streamerName]);

  if (loading) {
    return (
      <div className="w-full max-w-3xl aspect-video bg-zinc-900 rounded-2xl animate-pulse flex items-center justify-center border border-zinc-800 mx-auto">
        <span className="text-zinc-500 font-medium">Проверка статуса стрима...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-300 mx-auto py-30">
      {isLive && parentDomain ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
          <div className="md:col-span-3 group relative">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 aspect-video">
              <iframe
                src={`https://player.twitch.tv/?channel=${streamerName}&parent=${parentDomain}&autoplay=true`}
                className="w-full h-full"
                allowFullScreen={true}
                title="Twitch Stream"
              ></iframe>
            </div>
          </div>
          
          <div className="md:col-span-1 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl md:h-full min-h-100">
            <iframe
              src={`https://www.twitch.tv/embed/${streamerName}/chat?parent=${parentDomain}&theme=dark`}
              className="w-full h-full"
              title="Twitch Chat"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="relative bg-zinc-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center border border-zinc-800 shadow-xl overflow-hidden group hover:border-zinc-700 transition-all duration-300 max-w-3xl mx-auto">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 text-zinc-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Стример сейчас <span className="text-zinc-500 font-extrabold uppercase tracking-wide">Offline</span>
          </h3>
          <p className="text-zinc-400 max-w-sm mx-auto text-sm md:text-base mb-6">
            но это не повод грустить! Чекай расписание ниже или заглядывай в Telegram, там весь движ.
          </p>

          <a
            href="#schedule"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm rounded-xl transition-all duration-200 active:scale-95 border border-zinc-700/50"
          >
            Посмотреть расписание
          </a>
        </div>
      )}
    </div>
  );
}