import React, { useState } from 'react';
import Button from '../Buttons/Btn3d.jsx';
import Card from '../Cards/Card_3.jsx';

const DEFAULT_ITEMS = [
  { id: '1', title: 'Monitor', price: '$122', image : 'https://pcmarket.uz/wp-content/uploads/2026/06/5ImageConverter_202606050035.png', link: 'https://pcmarket.uz/product/lg-24-24g411a-b-ultragear-ips-5mc-144hz-fhd-1920-x-1080-hdmidisplay-port-nvidia-g-sync-amd-freesync/' },
  { id: '2', title: 'Keyboard', price: '$65', image : 'https://fortpro.uz/uploads/cache/495x495/product/s98_energy_red_3.jpg', link: 'https://fortpro.uz/en/product/klaviatura-bloody-s87-energy-red-red-switch/' },
  { id: '3', title: 'Mouse', price: '$23', image : 'https://pcmarket.uz/wp-content/uploads/2022/11/SsMvBFuhdOu9D6y18QkA-large_default-removebg-preview.png', link: 'https://pcmarket.uz/product/lenovo-y-gaming-optical-mouse-ww-gx30l02674/' },
  { id: '4', title: 'Headphones', price: '$95', image : 'https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c20ad4d76fe97759aa27a0c99bff67102024020510282470267endg1M44vO.jpg.webp', link: 'https://asaxiy.uz/product/besprovodnye-naushniki-jbl-tune-770-nc-chernyy?gad_source=1&gad_campaignid=23981687241&gclid=CjwKCAjwyabTBhBFEiwAM3mNUCRT4qDIPzn8KzP8t3fY5aoaDEBcp4xSwqiLpBNS_lrJgBlMsU84ThoCiPgQAvD_BwE' },
  { id: '5', title: 'Webcam', price: '$78', image : '#', link: 'https://pcmarket.uz/product/web-camera-asus-c3-usb-camera-with-1080p-30-fps-recording-beamforming-microphone-for-better-live-streaming-video-and-audio-quality-and-adjustable-clip-that-fits-various-devices-90yh0340-b2ua00/' },
  { id: '6', title: 'Case', price: '$33', image : '#', link: 'https://mycom.uz/korpusa/kompjyuternyj-korpus-pro-gaming-g215-black' },
  { id: '7', title: 'Mother Board', price: '$299', image : '#', link: 'https://www.newegg.com/gigabyte-x870-aorus-elite-wifi7-atx-motherboard-amd-x870-am5/p/N82E16813145519?Item=N82E16813145519' },
  { id: '8', title: 'Video Card', price: '$1000', image : '#', link: 'https://brandstore.uz/productPage/videokarta-asus-rog-strix-geforce-rtx-3070-oc-8gb-rog-strix-rtx3070-o8g-gaming' },
  { id: '9', title: 'Processor', price: '$299.99', image : '#', link: '#' },
  { id: '10', title: 'RAM', price: '$249.99', image : '#', link: '#' },
  { id: '11', title: 'SSD', price: '$249.99', image : '#', link: '#' },
  { id: '12', title: 'PowerBlock', price: '$249.99', image : '#', link: '#' },
  { id: '13', title: 'Fan', price: '$249.99', image : '#', link: '#' },
  { id: '14', title: 'Coolers', price: '$249.99', image : '#', link: '#' },
];

export default function SetUp({ streamerSlug = 'MOOCAPITANN', items = DEFAULT_ITEMS }) {
  // Начальное количество карточек
  const [visibleCount, setVisibleCount] = useState(4);

  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 overflow-hidden bg-black text-white min-h-screen">
      {/* Стили для мягкого каскадного появления */}
      <style>{`
        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-card-appear {
          animation: cardFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Заголовок в Cyber-стиле */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight flex flex-col items-center justify-center uppercase leading-none">
          <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            {streamerSlug}'s
          </span>
          <span className="text-7xl sm:text-9xl bg-linear-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)] mt-2">
            Set-Up
          </span>
        </h1>
      </div>

      {/* Обертка списка в неоновой рамке по аналогии со Swiper_Cyber */}
      <div className="max-w-350 mx-auto bg-zinc-950/80 p-6 sm:p-10 rounded-3xl border border-purple-500/20 shadow-2xl shadow-purple-950/50 backdrop-blur-md">
        
        {/* Сетка карточек */}
        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={item.id || `${item.title}-${index}`}
              className="animate-card-appear"
              style={{
                // Каждая следующая карточка выплывает с небольшой задержкой
                animationDelay: `${(index % 6) * 0.08}s`,
              }}
            >
              <Card title={item.title} price={item.price} link={item.link} image={item.image} />
            </div>
          ))}
        </div>

        {/* Кнопка "Show More" */}
        {visibleCount < items.length && (
          <div className="flex justify-center mt-12 pt-4">
            <div onClick={showMoreItems} className="cursor-pointer active:scale-95 transition-transform">
              <Button text="Show More" variant="info" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}