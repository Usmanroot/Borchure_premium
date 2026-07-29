import React, { useRef } from 'react'
import Car from './Moshinka.jpg'

export default function Swiper_Cyber() {
  const swiperRef = useRef(null)

  // Увеличили шаг скролла: новая ширина карточки (360px) + отступ gap (24px) = 384px
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft += 384 
    }
  }

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft -= 384
    }
  }

  const cards = [
    { id: 1, tag: 'LIVE', name: 'PvP', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hNslktuNR85D_PolDCIUXx-gw9Ogx4mOEP3xLUN64g&s=10', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum' },
    { id: 2, tag: 'VALORANT', name: 'Ranked Grind', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3h_i3iFQLU3lpEuKhH7mHIJ1XynWJyRJaYJDWyWHvQ&s=10', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum' },
    { id: 3, tag: 'HARDCORE', name: 'Minecraft 100 Days', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1-61WKAZ3bGQQD8QMeZwi0W4lvpBTManafc4mhc2aw&s=10', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum' },
    { id: 4, tag: 'SETUP', name: 'My Gaming Rig', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXJjxh_ZQZDATkTf_EfXvW94fOLsoiNTnrrkds8mm1g&s=10', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum' },
  ]

  return (
    <div className='px-10 py-32'>
    <div className='w-90 md:w-full md:max-w-300 bg-black p-8 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-500/50 flex flex-col gap-y-6 relative group mx-auto'>
      <button 
        onClick={handlePrev} 
        className='absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600/90 text-white text-xl font-bold rounded-full items-center justify-center hidden group-hover:flex hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/50 active:scale-90'
      >
        &#8249;
      </button>
      <button 
        onClick={handleNext} 
        className='absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600/90 text-white text-xl font-bold rounded-full items-center justify-center hidden group-hover:flex hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/50 active:scale-90'
      >
        &#8250;
      </button>

      {/* Увеличили заголовок: text-2xl */}
      <h2 className='text-2xl font-black text-white uppercase tracking-widest border-l-4 border-purple-500 pl-3'>
        Recent Activity
      </h2>

      {/* Лента карточек (увеличили отступы gap-x-6) */}
      <div 
        ref={swiperRef}
        className='flex gap-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4'
        style={{ scrollbarWidth: 'none' }}
      >
        {cards.map((card) => (
          <div 
            key={card.id}
            // 2. РАЗМЕР КАРТОЧКИ: Ширина 360px, Высота 440px (вместо 260x320)
            className='min-w-90 max-w-90 h-150 bg-zinc-900 rounded-2xl overflow-hidden snap-start flex flex-col border border-zinc-800 transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/30 group/card'
          >
            {/* Картинка теперь занимает чуть больше места (h-[65%]) */}
            <div className='w-full h-[55%] overflow-hidden relative'>
              <span className='absolute top-3 left-3 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded tracking-widest z-10 uppercase'>
                {card.tag}
              </span>
              <img 
                src={card.img} 
                alt={card.name} 
                className='w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110' 
              />
            </div>

            <div className='p-6 justify-between grow bg-linear-to-b from-zinc-900 to-zinc-950'>
              <h3 className='text-white font-extrabold text-[30px] tracking-tight line-clamp-1 group-hover/card:text-purple-400 transition-colors'>
                {card.name}
              </h3>
              <p className='text-zinc-400 text-sm line-clamp-6 mt-2'>
                {card.title}
              </p>
              {/* <button className='w-full py-3 mt-3 bg-zinc-800 text-zinc-200 hover:bg-purple-600 hover:text-white font-black text-sm uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-md'>
                Watch Clip
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}