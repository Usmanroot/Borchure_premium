import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, variant = 'fade-up' }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Как только элемент пересек границу экрана хотя бы на 10%, включаем анимацию
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Если хочешь, чтобы анимация срабатывала ОДИН раз, отключаем слежку:
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Базовые стили: элемент изначально невидим (opacity-0) и плавно меняет свойства
  const baseStyles = 'transition-all duration-1000 ease-out transform';

  // Разные крутые типы спавна на выбор
  const variants = {
    'fade-up': 'translate-y-12 opacity-0',       // Вылетает снизу вверх
    'fade-down': '-translate-y-12 opacity-0',   // Вылетает сверху вниз
    'fade-left': '-translate-x-12 opacity-0',   // Вылетает слева направо
    'fade-right': 'translate-x-12 opacity-0',   // Вылетает справа налево
    'scale-up': 'scale-90 opacity-0',           // Мягко увеличивается из глубины
  };

  // Классы, которые применяются, КОГДА ЭЛЕМЕНТ ПОЯВИЛСЯ на экране
  const activeStyles = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${isIntersecting ? activeStyles : variants[variant]}`}
    >
      {children}
    </div>
  );
}