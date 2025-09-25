'use client';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Calcular delay basado en el orden de aparición
            const delay = index * 0.2;
            
            // Aplicar estilos de animación como viste en el inspector
            element.style.visibility = 'visible';
            element.style.animationDelay = `${delay}s`;
            element.style.animationName = 'fadeInUp';
            element.style.animationDuration = '0.8s';
            element.style.animationFillMode = 'both';
            element.style.animationTimingFunction = 'ease-out';
            
            // Desconectar el observer para este elemento
            observer.unobserve(element);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Activar un poco antes de que sea completamente visible
      }
    );

    // Observar todos los elementos con clase 'animate-element'
    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export const useNavbarAnimation = () => {
  useEffect(() => {
    // Animar elementos de navbar de izquierda a derecha
    const navItems = document.querySelectorAll('.navbar-item');
    
    navItems.forEach((item, index) => {
      const element = item as HTMLElement;
      const delay = index * 0.1;
      
      setTimeout(() => {
        element.style.visibility = 'visible';
        element.style.animationName = 'slideRight';
        element.style.animationDuration = '0.6s';
        element.style.animationFillMode = 'both';
        element.style.animationTimingFunction = 'ease-out';
      }, delay * 1000);
    });
  }, []);
};