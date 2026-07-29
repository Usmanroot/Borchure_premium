import React from 'react'

export default function Clips() {
  const clips = [
    { id: "1", slug: "ArtsyOilyBobaHumbleLife-h0EBI-PNU-EdHuO1" },
    { id: "2", slug: "EagerAnnoyingGrasshopperTheThing-lOBPKgA9j7soccrH" },
    { id: "3", slug: "FairBlightedAlbatrossHassanChop-iuSH4Arnx4bA-VKg" },
  ]

  const parentDomain = process.env.NODE_ENV === 'development' ? 'localhost' : 'yourdomain.com'

  return (
    <section className="py-12 px-4 flex flex-col items-center min-h-screen text-white">
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-cyan-500 tracking-wider uppercase drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          Clips
        </h1>
      </div>

      {/* Увеличили общий контейнер сетки до 1700px */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-[1700px] w-full justify-items-center">
        {clips.map((clip) => (
          <div 
            key={clip.id} 
            /* Увеличили ширину: от 380px на мобилках до 480px на больших экранах */
            className="w-full sm:w-[420px] lg:w-[460px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(147,51,234,0.35)] border-2 border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.02] bg-zinc-900"
          >
            <iframe
              className="w-full h-full object-cover"
              src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=${parentDomain}&autoplay=false`}
              title="Twitch Clip"
              height="100%"
              width="100%"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}