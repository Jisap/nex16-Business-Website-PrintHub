import { Variants } from 'framer-motion';

/**
 * Animación de aparición gradual (fadeIn).
 * @param direction - Dirección desde la que aparece el elemento ('up', 'down', 'left', 'right').
 * @param delay - Retraso antes de que comience la animación.
 * @returns Un objeto de variantes para Framer Motion.
 */
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/**
 * Contenedor para animaciones escalonadas (stagger).
 * @param staggerChildren - Retraso entre la animación de cada elemento hijo.
 * @param delayChildren - Retraso antes de que el primer hijo comience a animarse.
 * @returns Un objeto de variantes para Framer Motion.
 */
export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

/**
 * Animación de zoom.
 * @param delay - Retraso antes de que comience la animación.
 * @param duration - Duración de la animación.
 * @returns Un objeto de variantes para Framer Motion.
 */
export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
