import React, { useState, useEffect } from 'react'
import Btn3d from '../Buttons/Btn3d.jsx'
import pfp from '../assets/Ava.png'

export default function Hero({ streamerSlug = 'MOOCAPITANN' }) {
  // Состояние для хранения статуса стрима (по умолчанию оффлайн)
  const [isLive, setIsLive] = useState(false);
  
  const donationUrl = `https://streamlabs.com/${streamerSlug}/tip`;

  // Автоматический запрос статуса при загрузке компонента
  useEffect(() => {
    fetch(`https://decapi.me/twitch/uptime/${streamerSlug}`)
      .then((res) => res.text())
      .then((data) => {
        // Если стример оффлайн, API вернет текст со словом "offline"
        if (data.toLowerCase().includes('offline')) {
          setIsLive(false);
        } else {
          setIsLive(true); // Если вернулось время аптайма — стрим идет!
        }
      })
      .catch((err) => {
        console.error("Ошибка проверки Twitch статуса:", err);
        setIsLive(false); // В случае сбоя оставляем оффлайн
      });
  }, [streamerSlug]); // Перезапустит проверку, если изменится ник стримера

  return (
    <section className=" relative min-h-[85vh] flex items-center justify-center bg-[#0d0e12] text-white px-6 py-12 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://wallpapercave.com/wp/wp4911907.jpg')] bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0d0e12]/50 via-transparent to-[#0d0e12] pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
            <span className="bg-linear-to-r cursor-pointer from-purple-500 to-cyan-400 bg-clip-text text-transparent hover:brightness-110 transition duration-300">
              {/* Выводим ник стримера динамически */}
              {streamerSlug}
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-md mx-auto lg:mx-0 font-medium tracking-wide">
            Professional Minecraft pvp & Streamer.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            {/* Динамическая ссылка на Твич канал */}
            <a href={`https://twitch.tv/${streamerSlug}`} target="_blank" rel="noreferrer">
              <Btn3d text='Watch on Twitch' variant='secondary' />
            </a>
            <a href={donationUrl} target="_blank" rel="noreferrer">
              <Btn3d text='Support Streamer' variant='neon' />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-gray-800/60 max-w-xs mx-auto lg:mx-0 w-full">
            <a
              href={`https://twitch.tv/${streamerSlug}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#9146FF] font-medium transition duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Twitch</span>
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://youtube.com/your_channel"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#FF0000] font-medium transition duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>YouTube</span>
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://discord.gg/your_server"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#5865F2] font-medium transition duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Discord</span>
            </a>
          </div>

        </div>

        <div className="flex flex-col items-center justify-center order-1 lg:order-2 space-y-4">
          
          {/* АВТОМАТИЧЕСКАЯ ПЛАШКА: Стили и анимация зависят от isLive */}
          <div className={`flex items-center gap-2 border px-4 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isLive 
              ? 'bg-red-500/10 border-red-500/30 animate-pulse' 
              : 'bg-gray-500/10 border-gray-500/30'
          }`}>
            <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isLive 
                ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]' 
                : 'bg-gray-500'
            }`} />
            <span className={`text-xs uppercase font-black tracking-widest transition-all duration-300 ${
              isLive ? 'text-red-400' : 'text-gray-400'
            }`}>
              {isLive ? 'LIVE NOW' : 'OFFLINE'}
            </span>
          </div>

          <div className="relative group w-80 h-80 md:w-120 md:h-120 transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-purple-400 rounded-[100%] blur-2xl opacity-90 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative w-full h-full bg-[#161820] border border-gray-800 rounded-[100%] overflow-hidden flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-3">
              <img
                src={pfp}
                alt="Streamer Avatar"
                className={`w-full h-full object-cover ${
                  isLive ? 'grayscale-0' : 'grayscale-0 group-hover:grayscale-0'
                }`}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}