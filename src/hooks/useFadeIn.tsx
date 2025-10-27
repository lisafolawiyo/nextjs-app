export const useFadeIn = (index: number, delay: number = 100) => {
  return {
    className: 'animate-fade-in',
    style: { animationDelay: `${index * delay}ms` },
  };
};
