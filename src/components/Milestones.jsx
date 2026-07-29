import React from 'react';

// Данные можно вынести в отдельные переменные/конфиг
const defaultMilestones = [
  {
    date: 'January 2025',
    title: 'First Launch 🚀',
    description: 'Channel launch, 0 viewers and lots of enthusiasm.',
    badge: 'START'
  },
  {
    date: 'June 2025',
    title: '500 Followers & Badge 👑',
    description: 'Completed the requirements for the affiliate program and launched custom emojis.',
    badge: 'AFFILIATE'
  },
  {
    date: 'December 2025',
    title: 'Charity Marathon 🎁',
    description: 'Raised a record amount in just 24 hours of streaming with our community.',
    badge: 'EVENT'
  },
  {
    date: 'May 2026',
    title: 'Online Peak: 1,000+ 🏆',
    description: 'Set a new record for concurrent viewers during a competitive gaming tournament.',
    badge: 'RECORD'
  }
];

export function Milestones({ milestones = defaultMilestones }) {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      {/* Заголовок секции */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          🏆 Hall of Fame
        </h2>
        <p className="text-sm text-neutral-400 mt-2">
          Key moments and achievements of our community
        </p>
      </div>

      {/* Контейнер таймлайна */}
      <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-32 space-y-8">
        {milestones.map((item, index) => (
          <div key={index} className="relative pl-6 md:pl-8 group">
            
            {/* Светящаяся точка на линии */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-violet-500 group-hover:border-fuchsia-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(217,70,239,0.8)] transition-all duration-300" />

            {/* Дата слева (на десктопах выносится за линию) */}
            <span className="md:absolute md:-left-32 md:top-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 group-hover:text-violet-400 transition-colors duration-300 block mb-1 md:mb-0 md:w-24 md:text-right">
              {item.date}
            </span>

            {/* Карточка достижения */}
            <div className="bg-neutral-900/80 border border-neutral-800/80 rounded-2xl p-5 backdrop-blur-sm group-hover:border-neutral-700 group-hover:translate-x-1 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {item.badge}
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}