import React from 'react'
import Car from './Moshinka.jpg'
import Button_3d from '../Buttons/Btn3d.jsx'

export default function Card_3({ title = 'Card Title', price = '$29.99', image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGx-xiSB1gg-m2gOcPK-k27w4_GhlboCzMfNde224suJjdcxJMDNMDLgS&s=10', link = '#' }) {
  return (
    <div className='w-85 h-40 sm:w-112.5 sm:h-45 md:w-162.5 md:h-55 bg-zinc-900 rounded-xl shadow-md shadow-violet-900/40 overflow-hidden flex transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-900/60'>
      
      {/* Левая часть с картинкой (ровно 40% ширины) */}
      <div className='w-2/5 h-full relative overflow-hidden shrink-0'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
      
      {/* Правая часть с контентом (ровно 60% ширины) */}
      <div className='w-3/5 flex flex-col justify-between p-3 sm:p-4 md:p-5'>
        
        {/* Верхняя панель: Заголовок и Цена */}
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1'>
          <h1 className='text-lg sm:text-2xl md:text-4xl font-black text-white line-clamp-1 leading-tight'>
            {title}
          </h1>
          <p className='text-base sm:text-xl md:text-3xl font-black text-violet-500 whitespace-nowrap'>
            {price}
          </p>
        </div>

        {/* Нижняя часть: Кнопка */}
        <div className='flex justify-end items-center mt-2'>
          <a href={link} target="_blank" rel="noopener noreferrer" className="scale-90 sm:scale-95 md:scale-100 origin-right">
            <Button_3d text='See on Store' variant='secondary' />
          </a>
        </div>

      </div>
    </div>
  )
}